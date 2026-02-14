# NaturaNest - Complete Deployment Guide

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Fastest & Free)

**Why Vercel?**
- Free tier available
- Automatic deployments from Git
- Built-in React/Next.js optimization
- Global CDN
- Zero configuration needed
- Custom domains supported

#### Step-by-Step Vercel Deployment

1. **Prepare Your Code**
   ```bash
   # Ensure all files are committed
   git add .
   git commit -m "Ready for deployment"
   ```

2. **Push to GitHub/GitLab/Bitbucket**
   ```bash
   # Create a new repository on GitHub
   # Then push your code
   git remote add origin https://github.com/yourusername/naturanest.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect React settings
   - Click "Deploy"
   - Done! Your app will be live in ~2 minutes

4. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your domain (e.g., naturanest.com)
   - Follow DNS configuration instructions

**Environment Variables (if needed later):**
```
VITE_API_URL=your-api-endpoint
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-key
```

---

### Option 2: Netlify (Great Alternative)

1. **Via Netlify CLI**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Build your app
   npm run build

   # Deploy
   netlify deploy --prod
   ```

2. **Via Netlify Dashboard**
   - Visit [netlify.com](https://netlify.com)
   - Drag and drop your `dist` folder
   - Or connect to GitHub for continuous deployment

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18.x or higher

---

### Option 3: Traditional Web Hosting (cPanel/Shared Hosting)

Perfect for hosting providers like Hostinger, Bluehost, SiteGround, etc.

#### Step 1: Build Your App
```bash
npm install
npm run build
```

This creates a `dist` folder with all your static files.

#### Step 2: Upload Files
1. Access your cPanel File Manager or use FTP
2. Navigate to `public_html` or your domain's root folder
3. Upload all contents from the `dist` folder
4. Your app should now be live!

#### Step 3: Configure .htaccess (Important!)
Create/edit `.htaccess` in your root folder:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

### Option 4: GitHub Pages (Free)

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these lines:
   ```json
   {
     "homepage": "https://yourusername.github.io/naturanest",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub**
   - Go to Repository Settings → Pages
   - Set source to `gh-pages` branch
   - Your site will be live at the homepage URL

---

## 📱 Mobile App Deployment (Progressive Web App)

Your app is already PWA-ready! To enable full mobile experience:

### Add manifest.json
Create `/public/manifest.json`:
```json
{
  "name": "NaturaNest - Nutrition for Indian Women & Children",
  "short_name": "NaturaNest",
  "description": "Health-focused nutrition app for Indian families",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#22c55e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Add to index.html
```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#22c55e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="NaturaNest">
```

Users can now "Add to Home Screen" on their phones!

---

## 🔌 Backend/API Deployment (When Ready)

### PHP API (for recipe data)

1. **Upload PHP files to your hosting**
   ```
   /api/
     ├── recipes.php
     ├── config.php
     └── .htaccess
   ```

2. **Configure Database**
   - Create MySQL database in cPanel
   - Import your recipes schema
   - Update `config.php` with credentials

3. **Update Frontend**
   In your React app, update API endpoint:
   ```typescript
   // services/recipeService.ts
   const API_URL = 'https://yourdomain.com/api/recipes.php';
   ```

### Alternative: Supabase (Recommended for Backend)

Supabase gives you:
- PostgreSQL database
- Auto-generated REST API
- Real-time subscriptions
- Authentication
- File storage
- All free tier!

**Setup:**
1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Create `recipes` table
4. Import your data
5. Get API URL and anon key
6. Update your app's environment variables

---

## 🧪 Pre-Deployment Checklist

- [ ] Test all features locally
- [ ] Check mobile responsiveness
- [ ] Verify all 160+ recipes load correctly
- [ ] Test filters and search
- [ ] Test weekly meal planner
- [ ] Test PDF download
- [ ] Verify subscription features
- [ ] Check all navigation links
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Test on different devices (phone, tablet, desktop)
- [ ] Remove console.logs from production code
- [ ] Optimize images (use WebP format)
- [ ] Check for broken links
- [ ] Verify INDB attribution is visible

---

## 📊 Post-Deployment

### 1. Analytics (Optional)
Add Google Analytics to track usage:
```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. Performance Monitoring
- Use [PageSpeed Insights](https://pagespeed.web.dev/)
- Target score: 90+ for mobile and desktop
- Optimize based on recommendations

### 3. SEO Optimization
Update `/index.html`:
```html
<title>NaturaNest - Nutrition App for Indian Women & Children</title>
<meta name="description" content="Discover healthy Indian recipes with nutrition info, meal planning for pregnancy, diabetes, women 50+. 1000+ INDB-verified recipes.">
<meta name="keywords" content="Indian nutrition, women health, pregnancy diet, diabetic recipes, meal planning">
<meta property="og:title" content="NaturaNest - Indian Nutrition App">
<meta property="og:description" content="Health-focused nutrition for Indian families">
<meta property="og:image" content="https://yourdomain.com/og-image.png">
```

### 4. Monitor & Maintain
- Check error logs weekly
- Update recipes monthly
- Monitor user feedback
- Keep dependencies updated: `npm audit fix`

---

## 🆘 Troubleshooting Common Issues

### Issue: Blank page after deployment
**Solution:** Check browser console for errors. Usually caused by incorrect base path.
- For subdirectory hosting, update `vite.config.ts`:
  ```typescript
  export default {
    base: '/your-subdirectory/'
  }
  ```

### Issue: 404 on page refresh
**Solution:** Add `.htaccess` (Apache) or configure your hosting for SPA routing.

### Issue: Recipes not loading
**Solution:** 
1. Check API endpoint URL
2. Verify CORS settings on backend
3. Check browser network tab for failed requests

### Issue: Images not showing
**Solution:** 
1. Verify image paths are relative
2. Check if images are included in build
3. Use absolute URLs for external images

---

## 💰 Cost Estimates

| Platform | Free Tier | Paid Plans |
|----------|-----------|------------|
| **Vercel** | 100GB bandwidth/month | $20/month for Pro |
| **Netlify** | 100GB bandwidth/month | $19/month for Pro |
| **GitHub Pages** | 1GB storage, 100GB bandwidth | Free forever |
| **Shared Hosting** | N/A | $3-10/month |
| **Supabase** | 500MB database, 1GB storage | $25/month for Pro |

**Recommendation for Starting Out:**
- Frontend: Vercel or Netlify (Free)
- Backend: Supabase (Free tier)
- Custom Domain: $10-15/year
- **Total: $0-15/year to start!**

---

## 🎯 Recommended Deployment Path

For NaturaNest, I recommend this setup:

1. **Week 1:** Deploy to Vercel (free) for testing
2. **Week 2:** Set up Supabase for recipes database
3. **Week 3:** Add custom domain if needed
4. **Week 4:** Implement analytics and monitor usage

This gives you a professional, scalable setup with minimal cost!

---

## 📞 Need Help?

Common resources:
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Vite Docs: https://vitejs.dev/guide/static-deploy.html
- React Deployment: https://create-react-app.dev/docs/deployment/

---

## 🔄 Continuous Deployment Setup

Once your code is on GitHub and connected to Vercel/Netlify:

1. Make changes locally
2. Commit and push to GitHub
3. Automatic deployment triggers
4. Live in ~2 minutes!

No manual uploads needed!

---

**Last Updated:** October 17, 2025
**Version:** 2.2
**Status:** Production Ready ✅
