#!/bin/bash

# NaturaNest Deployment Preparation Script
# This script prepares your app for deployment

echo "🌿 NaturaNest - Deployment Preparation"
echo "======================================"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🧹 Cleaning previous builds..."
rm -rf dist

echo ""
echo "🔨 Building production version..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful!"
    echo ""
    echo "📊 Build Statistics:"
    echo "-------------------"
    du -sh dist
    echo ""
    echo "📁 Files created:"
    ls -lh dist/
    echo ""
    echo "🚀 Next Steps:"
    echo ""
    echo "Choose your deployment method:"
    echo ""
    echo "1. VERCEL (Recommended - Easiest)"
    echo "   → Visit https://vercel.com"
    echo "   → Import your GitHub repository"
    echo "   → Click Deploy"
    echo ""
    echo "2. NETLIFY"
    echo "   → Run: netlify deploy --prod"
    echo "   → Or drag/drop 'dist' folder to netlify.com"
    echo ""
    echo "3. TRADITIONAL HOSTING (cPanel/FTP)"
    echo "   → Upload all files from 'dist' folder"
    echo "   → Upload to public_html or your domain folder"
    echo "   → Don't forget to add .htaccess!"
    echo ""
    echo "4. GITHUB PAGES"
    echo "   → Run: npm run deploy"
    echo "   → (Make sure you've set up gh-pages first)"
    echo ""
    echo "📖 Full guide: See DEPLOYMENT-GUIDE.md"
    echo ""
else
    echo ""
    echo "❌ Build failed! Please check the errors above."
    echo ""
    exit 1
fi
