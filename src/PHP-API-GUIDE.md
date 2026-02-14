# PHP API Integration Guide for Shakti Aahaar

## Overview
This guide provides the complete PHP backend structure for the Shakti Aahaar meal planner application.

---

## 📁 Recommended PHP File Structure

```
/api
├── config
│   ├── database.php          # Database connection
│   └── constants.php          # App constants
├── models
│   ├── Recipe.php             # Recipe model
│   └── User.php               # User model (future)
├── controllers
│   ├── RecipeController.php   # Recipe CRUD operations
│   └── FilterController.php   # Advanced filtering
├── utils
│   ├── Response.php           # Standard API responses
│   └── Validator.php          # Input validation
└── recipes.php                # Main API endpoint
```

---

## 1. Database Schema (MySQL)

### Table: `recipes`

```sql
CREATE TABLE `recipes` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `protein` DECIMAL(10, 2) NOT NULL,
  `calories` DECIMAL(10, 2) NOT NULL,
  `fiber` DECIMAL(10, 2) NOT NULL,
  `iron` DECIMAL(10, 2) NOT NULL,
  `calcium` DECIMAL(10, 2) NOT NULL,
  `prep_time` INT NULL,
  `is_vegetarian` BOOLEAN DEFAULT TRUE,
  `cuisine_type` VARCHAR(100) NOT NULL,
  `is_unhealthy` BOOLEAN DEFAULT FALSE,
  `is_pregnancy_friendly` BOOLEAN DEFAULT FALSE,
  `is_diabetic_friendly` BOOLEAN DEFAULT FALSE,
  `is_women_over_50_friendly` BOOLEAN DEFAULT FALSE,
  `is_perimenopause_friendly` BOOLEAN DEFAULT FALSE,
  `is_menopause_friendly` BOOLEAN DEFAULT FALSE,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_name (name),
  INDEX idx_vegetarian (is_vegetarian),
  INDEX idx_cuisine (cuisine_type)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### Table: `recipe_ingredients`

```sql
CREATE TABLE `recipe_ingredients` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `recipe_id` INT NOT NULL,
  `ingredient` VARCHAR(255) NOT NULL,
  FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
  INDEX idx_recipe (recipe_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### Table: `recipe_tags`

```sql
CREATE TABLE `recipe_tags` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `recipe_id` INT NOT NULL,
  `tag` VARCHAR(100) NOT NULL,
  FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
  INDEX idx_recipe (recipe_id),
  INDEX idx_tag (tag)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### Table: `recipe_meal_types`

```sql
CREATE TABLE `recipe_meal_types` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `recipe_id` INT NOT NULL,
  `meal_type` ENUM('Breakfast', 'Lunch', 'Dinner', 'Snacks') NOT NULL,
  FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
  INDEX idx_recipe (recipe_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

---

## 2. Database Connection (config/database.php)

```php
<?php
class Database {
    private $host = "localhost";
    private $db_name = "shakti_aahaar";
    private $username = "root";
    private $password = "";
    public $conn;

    public function getConnection() {
        $this->conn = null;

        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name,
                $this->username,
                $this->password,
                array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")
            );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}
?>
```

---

## 3. Response Utility (utils/Response.php)

```php
<?php
class Response {
    public static function json($data, $statusCode = 200) {
        http_response_code($statusCode);
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
        header('Access-Control-Allow-Headers: Content-Type');
        
        echo json_encode($data);
        exit;
    }

    public static function success($data, $message = "Success", $total = null) {
        $response = [
            'success' => true,
            'message' => $message,
            'data' => $data
        ];
        
        if ($total !== null) {
            $response['total'] = $total;
        }
        
        self::json($response);
    }

    public static function error($message, $statusCode = 400) {
        self::json([
            'success' => false,
            'message' => $message,
            'data' => []
        ], $statusCode);
    }
}
?>
```

---

## 4. Recipe Model (models/Recipe.php)

```php
<?php
class Recipe {
    private $conn;
    private $table_name = "recipes";

    public function __construct($db) {
        $this->conn = $db;
    }

    /**
     * Get all recipes with optional pagination
     */
    public function getAll($page = 1, $limit = 10) {
        $offset = ($page - 1) * $limit;
        
        $query = "SELECT r.*, 
                  GROUP_CONCAT(DISTINCT ri.ingredient) as ingredients,
                  GROUP_CONCAT(DISTINCT rt.tag) as tags,
                  GROUP_CONCAT(DISTINCT rmt.meal_type) as meal_types
                  FROM " . $this->table_name . " r
                  LEFT JOIN recipe_ingredients ri ON r.id = ri.recipe_id
                  LEFT JOIN recipe_tags rt ON r.id = rt.recipe_id
                  LEFT JOIN recipe_meal_types rmt ON r.id = rmt.recipe_id
                  GROUP BY r.id
                  ORDER BY r.name
                  LIMIT :limit OFFSET :offset";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":limit", $limit, PDO::PARAM_INT);
        $stmt->bindParam(":offset", $offset, PDO::PARAM_INT);
        $stmt->execute();

        $recipes = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $recipes[] = $this->formatRecipe($row);
        }

        return $recipes;
    }

    /**
     * Get total count of recipes
     */
    public function getTotalCount() {
        $query = "SELECT COUNT(*) as total FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        return $row['total'];
    }

    /**
     * Search recipes by name or ingredients
     */
    public function search($searchTerm, $page = 1, $limit = 10) {
        $offset = ($page - 1) * $limit;
        $searchTerm = "%{$searchTerm}%";
        
        $query = "SELECT DISTINCT r.*, 
                  GROUP_CONCAT(DISTINCT ri.ingredient) as ingredients,
                  GROUP_CONCAT(DISTINCT rt.tag) as tags,
                  GROUP_CONCAT(DISTINCT rmt.meal_type) as meal_types
                  FROM " . $this->table_name . " r
                  LEFT JOIN recipe_ingredients ri ON r.id = ri.recipe_id
                  LEFT JOIN recipe_tags rt ON r.id = rt.recipe_id
                  LEFT JOIN recipe_meal_types rmt ON r.id = rmt.recipe_id
                  WHERE r.name LIKE :search
                  OR ri.ingredient LIKE :search
                  OR rt.tag LIKE :search
                  GROUP BY r.id
                  LIMIT :limit OFFSET :offset";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":search", $searchTerm);
        $stmt->bindParam(":limit", $limit, PDO::PARAM_INT);
        $stmt->bindParam(":offset", $offset, PDO::PARAM_INT);
        $stmt->execute();

        $recipes = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $recipes[] = $this->formatRecipe($row);
        }

        return $recipes;
    }

    /**
     * Get recipe by ID
     */
    public function getById($id) {
        $query = "SELECT r.*, 
                  GROUP_CONCAT(DISTINCT ri.ingredient) as ingredients,
                  GROUP_CONCAT(DISTINCT rt.tag) as tags,
                  GROUP_CONCAT(DISTINCT rmt.meal_type) as meal_types
                  FROM " . $this->table_name . " r
                  LEFT JOIN recipe_ingredients ri ON r.id = ri.recipe_id
                  LEFT JOIN recipe_tags rt ON r.id = rt.recipe_id
                  LEFT JOIN recipe_meal_types rmt ON r.id = rmt.recipe_id
                  WHERE r.id = :id
                  GROUP BY r.id";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $id);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        return $row ? $this->formatRecipe($row) : null;
    }

    /**
     * Filter recipes with advanced criteria
     */
    public function filter($filters) {
        $conditions = [];
        $params = [];

        // Dietary preference
        if (isset($filters['vegetarian']) && $filters['vegetarian']) {
            $conditions[] = "r.is_vegetarian = 1";
        }
        if (isset($filters['nonVegetarian']) && $filters['nonVegetarian']) {
            $conditions[] = "r.is_vegetarian = 0";
        }

        // Nutrition filters
        if (isset($filters['highProtein']) && $filters['highProtein']) {
            $conditions[] = "r.protein >= 25";
        }
        if (isset($filters['highFiber']) && $filters['highFiber']) {
            $conditions[] = "r.fiber >= 8";
        }
        if (isset($filters['highIron']) && $filters['highIron']) {
            $conditions[] = "r.iron >= 4";
        }

        // Health focus
        if (isset($filters['calciumRich']) && $filters['calciumRich']) {
            $conditions[] = "r.calcium >= 300";
        }
        if (isset($filters['pregnancyDiet']) && $filters['pregnancyDiet']) {
            $conditions[] = "r.is_pregnancy_friendly = 1";
        }
        if (isset($filters['diabeticFriendly']) && $filters['diabeticFriendly']) {
            $conditions[] = "r.is_diabetic_friendly = 1";
        }

        // Prep time
        if (isset($filters['prepTime'])) {
            if ($filters['prepTime'] === 'quick') {
                $conditions[] = "r.prep_time <= 15";
            } elseif ($filters['prepTime'] === 'moderate') {
                $conditions[] = "r.prep_time BETWEEN 16 AND 30";
            } elseif ($filters['prepTime'] === 'long') {
                $conditions[] = "r.prep_time > 30";
            }
        }

        $whereClause = !empty($conditions) ? "WHERE " . implode(" AND ", $conditions) : "";

        $query = "SELECT r.*, 
                  GROUP_CONCAT(DISTINCT ri.ingredient) as ingredients,
                  GROUP_CONCAT(DISTINCT rt.tag) as tags,
                  GROUP_CONCAT(DISTINCT rmt.meal_type) as meal_types
                  FROM " . $this->table_name . " r
                  LEFT JOIN recipe_ingredients ri ON r.id = ri.recipe_id
                  LEFT JOIN recipe_tags rt ON r.id = rt.recipe_id
                  LEFT JOIN recipe_meal_types rmt ON r.id = rmt.recipe_id
                  {$whereClause}
                  GROUP BY r.id
                  ORDER BY r.name";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        $recipes = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $recipes[] = $this->formatRecipe($row);
        }

        return $recipes;
    }

    /**
     * Format recipe data for JSON response
     */
    private function formatRecipe($row) {
        return [
            'id' => (int)$row['id'],
            'name' => $row['name'],
            'protein' => (float)$row['protein'],
            'calories' => (float)$row['calories'],
            'fiber' => (float)$row['fiber'],
            'iron' => (float)$row['iron'],
            'calcium' => (float)$row['calcium'],
            'prepTime' => $row['prep_time'] ? (int)$row['prep_time'] : null,
            'ingredients' => $row['ingredients'] ? explode(',', $row['ingredients']) : [],
            'tags' => $row['tags'] ? explode(',', $row['tags']) : [],
            'mealType' => $row['meal_types'] ? explode(',', $row['meal_types']) : [],
            'isVegetarian' => (bool)$row['is_vegetarian'],
            'cuisineType' => $row['cuisine_type'],
            'isUnhealthy' => (bool)$row['is_unhealthy'],
            'isPregnancyFriendly' => (bool)$row['is_pregnancy_friendly'],
            'isDiabeticFriendly' => (bool)$row['is_diabetic_friendly'],
            'isWomenOver50Friendly' => (bool)$row['is_women_over_50_friendly'],
            'isPerimenopauseFriendly' => (bool)$row['is_perimenopause_friendly'],
            'isMenopauseFriendly' => (bool)$row['is_menopause_friendly']
        ];
    }
}
?>
```

---

## 5. Main API Endpoint (recipes.php)

```php
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once 'config/database.php';
require_once 'models/Recipe.php';
require_once 'utils/Response.php';

$database = new Database();
$db = $database->getConnection();
$recipe = new Recipe($db);

$requestMethod = $_SERVER["REQUEST_METHOD"];
$requestUri = $_SERVER['REQUEST_URI'];

// Get query parameters
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 10;

switch ($requestMethod) {
    case 'GET':
        if (isset($_GET['id'])) {
            // Get single recipe by ID
            $data = $recipe->getById($_GET['id']);
            if ($data) {
                Response::success([$data], "Recipe found");
            } else {
                Response::error("Recipe not found", 404);
            }
        } elseif (isset($_GET['search'])) {
            // Search recipes
            $searchTerm = $_GET['search'];
            $recipes = $recipe->search($searchTerm, $page, $limit);
            $total = count($recipes);
            Response::success($recipes, "Search results", $total);
        } else {
            // Get all recipes with pagination
            $recipes = $recipe->getAll($page, $limit);
            $total = $recipe->getTotalCount();
            Response::success($recipes, "Recipes retrieved successfully", $total);
        }
        break;

    case 'POST':
        // Filter recipes
        $data = json_decode(file_get_contents("php://input"), true);
        if ($data && isset($data['filters'])) {
            $recipes = $recipe->filter($data['filters']);
            Response::success($recipes, "Filtered recipes", count($recipes));
        } else {
            Response::error("Invalid filter data");
        }
        break;

    default:
        Response::error("Method not allowed", 405);
        break;
}
?>
```

---

## 6. Sample Data Insert Script (insert_sample_data.php)

```php
<?php
require_once 'config/database.php';

$database = new Database();
$conn = $database->getConnection();

try {
    $conn->beginTransaction();

    // Insert recipe
    $query = "INSERT INTO recipes (name, protein, calories, fiber, iron, calcium, prep_time, 
              is_vegetarian, cuisine_type, is_pregnancy_friendly, is_diabetic_friendly, 
              is_women_over_50_friendly, is_perimenopause_friendly, is_menopause_friendly)
              VALUES (:name, :protein, :calories, :fiber, :iron, :calcium, :prep_time,
              :is_vegetarian, :cuisine_type, :is_pregnancy_friendly, :is_diabetic_friendly,
              :is_women_over_50_friendly, :is_perimenopause_friendly, :is_menopause_friendly)";
    
    $stmt = $conn->prepare($query);
    
    // Sample recipe data
    $stmt->execute([
        ':name' => 'Palak Paneer with Roti',
        ':protein' => 20.00,
        ':calories' => 350.00,
        ':fiber' => 6.00,
        ':iron' => 5.00,
        ':calcium' => 500.00,
        ':prep_time' => 25,
        ':is_vegetarian' => 1,
        ':cuisine_type' => 'Indian',
        ':is_pregnancy_friendly' => 1,
        ':is_diabetic_friendly' => 1,
        ':is_women_over_50_friendly' => 1,
        ':is_perimenopause_friendly' => 1,
        ':is_menopause_friendly' => 1
    ]);
    
    $recipe_id = $conn->lastInsertId();

    // Insert ingredients
    $ingredientQuery = "INSERT INTO recipe_ingredients (recipe_id, ingredient) VALUES (:recipe_id, :ingredient)";
    $ingredientStmt = $conn->prepare($ingredientQuery);
    
    $ingredients = ['paneer', 'spinach', 'onion', 'tomatoes', 'whole wheat roti', 'ghee'];
    foreach ($ingredients as $ingredient) {
        $ingredientStmt->execute([
            ':recipe_id' => $recipe_id,
            ':ingredient' => $ingredient
        ]);
    }

    // Insert tags
    $tagQuery = "INSERT INTO recipe_tags (recipe_id, tag) VALUES (:recipe_id, :tag)";
    $tagStmt = $conn->prepare($tagQuery);
    
    $tags = ['vegetarian', 'indian', 'calcium rich', 'iron rich'];
    foreach ($tags as $tag) {
        $tagStmt->execute([
            ':recipe_id' => $recipe_id,
            ':tag' => $tag
        ]);
    }

    // Insert meal types
    $mealTypeQuery = "INSERT INTO recipe_meal_types (recipe_id, meal_type) VALUES (:recipe_id, :meal_type)";
    $mealTypeStmt = $conn->prepare($mealTypeQuery);
    
    $mealTypes = ['Lunch', 'Dinner'];
    foreach ($mealTypes as $mealType) {
        $mealTypeStmt->execute([
            ':recipe_id' => $recipe_id,
            ':meal_type' => $mealType
        ]);
    }

    $conn->commit();
    echo "Sample data inserted successfully!";
    
} catch (Exception $e) {
    $conn->rollback();
    echo "Error: " . $e->getMessage();
}
?>
```

---

## 7. API Usage Examples

### JavaScript/React Usage

```javascript
import { recipeService } from './services/recipeService';

// Load all recipes
const recipes = await recipeService.loadFromAPI('/recipes');

// Search recipes
const searchResults = await recipeService.searchRecipes('paneer', 1, 10);

// Get single recipe
const recipe = await recipeService.getRecipeById(123);

// Filter recipes
const filtered = await recipeService.filterRecipes({
  vegetarian: true,
  highProtein: true,
  calciumRich: true
});
```

---

## 8. Environment Configuration

Create `.env` file:

```
DB_HOST=localhost
DB_NAME=shakti_aahaar
DB_USER=root
DB_PASS=your_password
API_URL=http://localhost/api
```

---

## 9. Security Best Practices

1. **Use prepared statements** (already implemented)
2. **Validate all inputs**
3. **Implement rate limiting**
4. **Use HTTPS in production**
5. **Add authentication** for write operations
6. **Sanitize output**
7. **Keep PHP and MySQL updated**

---

## 10. Deployment Checklist

- [ ] Set up MySQL database
- [ ] Run schema creation scripts
- [ ] Configure database credentials
- [ ] Test all API endpoints
- [ ] Enable error logging
- [ ] Set up CORS properly
- [ ] Configure SSL certificate
- [ ] Set up backup system
- [ ] Monitor API performance
- [ ] Document API for frontend team

---

*This API structure provides a solid foundation for the Shakti Aahaar application with scalability and maintainability in mind.*
