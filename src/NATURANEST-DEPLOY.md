# 🌿 NaturaNest - Complete Vercel Deployment Guide

## 🚀 Quick Deploy (5 Minutes)

### Step 1: Push to GitHub

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - NaturaNest Meal Planner"

# Create main branch
git branch -M main

# Add your GitHub repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/naturanest.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy to Vercel

**Option A: One-Click Deploy (Easiest)**

Click this button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/naturanest&project-name=naturanest&repository-name=naturanest)

**Option B: Vercel Dashboard**

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New..." → "Project"
4. Import `naturanest` repository
5. Click "Deploy"

**Option C: Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Step 3: Done! 🎉

Your NaturaNest app is live at: `https://naturanest-xxxxx.vercel.app`

---

## 📋 Configuration Files

### vercel.json

Your project includes optimized Vercel configuration:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "regions": ["bom1"],
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### package.json

Project metadata configured for NaturaNest:

```json
{
  "name": "naturanest",
  "version": "1.0.0",
  "description": "NaturaNest - Meal planner for Indian women's health",
  "homepage": "https://naturanest.vercel.app"
}
```

---

## 🔄 Automatic Deployments

Every `git push` automatically deploys to Vercel:

```bash
# Make changes
git add .
git commit -m "Updated recipes"
git push

# Vercel auto-deploys in ~30 seconds!
```

---

## 🌐 Custom Domain Setup

### Add Your Domain in Vercel:

1. **Vercel Dashboard** → **Project Settings** → **Domains**
2. Click **"Add"**
3. Enter your domain: `naturanest.com`
4. Click **"Add"**

### Configure DNS:

**For Root Domain** (`naturanest.com`):
```
Type: A
Name: @
Value: 76.76.21.21
```

**For WWW** (`www.naturanest.com`):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Wait & Verify:

- DNS propagation: 5-30 minutes
- SSL certificate: Automatic
- HTTPS: Auto-enabled ✅

---

## 📊 What You Get (FREE)

✅ **100GB bandwidth** per month  
✅ **Unlimited deployments**  
✅ **Global CDN** (fast worldwide)  
✅ **Automatic HTTPS/SSL**  
✅ **Auto-deploy** on git push  
✅ **Preview URLs** for branches  
✅ **Built-in analytics**  
✅ **Custom domains** (unlimited)  

---

## 🎯 Expected Live URLs

After deployment:

- **Vercel URL**: `https://naturanest.vercel.app`
- **Custom Domain**: `https://naturanest.com` (if configured)
- **Preview Branches**: `https://naturanest-git-branch-xxx.vercel.app`

---

## ✅ Post-Deployment Checklist

### Test Your Live Site:

- [ ] Homepage loads correctly
- [ ] Search functionality works
- [ ] All filters function properly
- [ ] Recipe table displays data
- [ ] Pagination works
- [ ] Weekly meal planner opens
- [ ] Can add/remove meals from planner
- [ ] Wishlist functionality works
- [ ] Life stage filtering works
- [ ] Mobile responsive
- [ ] No console errors

### Performance:

- [ ] Lighthouse score > 90
- [ ] Page loads < 2 seconds
- [ ] Images load properly
- [ ] No broken links

### SEO:

- [ ] Page title is descriptive
- [ ] Meta description present
- [ ] Favicon displays
- [ ] Social sharing works

---

## 🛠️ Deployment Scripts

### Linux/Mac:

```bash
# Make script executable
chmod +x scripts/deploy.sh

# Deploy to preview
npm run deploy:script

# Deploy to production
npm run deploy:prod:script
```

### Windows:

```bash
# Deploy to preview
scripts\deploy.bat

# Deploy to production
scripts\deploy.bat production
```

---

## 🐛 Troubleshooting

### Build Failed?

```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install
npm run build

# If it works locally, push again
git add .
git commit -m "Fixed build"
git push
```

### Routes Don't Work (404)?

Already fixed in `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Environment Variables Not Working?

1. Vercel Dashboard → Environment Variables
2. Add variables with `VITE_` prefix
3. Redeploy

---

## 📈 Monitoring & Analytics

### Vercel Dashboard:

- **Deployments** - View all deployments
- **Analytics** - Traffic insights
- **Logs** - Error tracking
- **Performance** - Speed metrics

### Enable Web Analytics:

1. Vercel Dashboard → Analytics
2. Enable Web Analytics (free)
3. View detailed insights

---

## 🔐 Security

Your app includes:

✅ **HTTPS** enforced  
✅ **Security headers** configured  
✅ **XSS protection** enabled  
✅ **Frame protection** DENY  
✅ **Content Security** Nosniff  

---

## 🎉 Success Indicators

✅ Build completes without errors  
✅ Green checkmark in Vercel dashboard  
✅ Live URL is accessible  
✅ All features work on live site  
✅ No console errors  
✅ Mobile responsive  
✅ Performance scores > 90  

---

## 📞 Support

### Documentation:

- [Vercel Docs](https://vercel.com/docs)
- [Vite on Vercel](https://vercel.com/docs/frameworks/vite)
- [Custom Domains](https://vercel.com/docs/custom-domains)

### Community:

- [Vercel Discord](https://vercel.com/discord)
- [Vercel Support](https://vercel.com/support)
- [Status Page](https://vercel-status.com)

---

## 🌟 Next Steps

1. ✅ Test all features on live site
2. ✅ Add custom domain (optional)
3. ✅ Enable analytics
4. ✅ Share your app with the world!
5. ✅ Gather user feedback
6. ✅ Plan improvements

---

**Made with 💚 for Indian women's health**

**NaturaNest - Nourishing at Every Life Stage** 🌿
