@echo off
REM NaturaNest Deployment Preparation Script (Windows)
REM This script prepares your app for deployment

echo.
echo 🌿 NaturaNest - Deployment Preparation
echo ======================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo 📦 Installing dependencies...
    call npm install
) else (
    echo ✅ Dependencies already installed
)

echo.
echo 🧹 Cleaning previous builds...
if exist "dist\" rmdir /s /q dist

echo.
echo 🔨 Building production version...
call npm run build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Build successful!
    echo.
    echo 📊 Build created in 'dist' folder
    echo.
    echo 🚀 Next Steps:
    echo.
    echo Choose your deployment method:
    echo.
    echo 1. VERCEL (Recommended - Easiest^)
    echo    → Visit https://vercel.com
    echo    → Import your GitHub repository
    echo    → Click Deploy
    echo.
    echo 2. NETLIFY
    echo    → Run: netlify deploy --prod
    echo    → Or drag/drop 'dist' folder to netlify.com
    echo.
    echo 3. TRADITIONAL HOSTING (cPanel/FTP^)
    echo    → Upload all files from 'dist' folder
    echo    → Upload to public_html or your domain folder
    echo    → Don't forget to add .htaccess!
    echo.
    echo 4. GITHUB PAGES
    echo    → Run: npm run deploy
    echo    → (Make sure you've set up gh-pages first^)
    echo.
    echo 📖 Full guide: See DEPLOYMENT-GUIDE.md
    echo.
) else (
    echo.
    echo ❌ Build failed! Please check the errors above.
    echo.
    exit /b 1
)

pause
