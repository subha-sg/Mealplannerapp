# ⚡ Quick Deploy Guide - Get Live in 5 Minutes!

## 🚀 Fastest Way (One-Click Deploy)

### Step 1: Push to GitHub (2 minutes)

```bash
# Replace YOUR_USERNAME with your GitHub username
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shakti-aahaar.git
git push -u origin main
```

### Step 2: Deploy to Vercel (1 minute)

Click this button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/shakti-aahaar&project-name=shakti-aahaar&repository-name=shakti-aahaar)

**That's it!** Your app is live! 🎉

---

## 📋 Alternative: Manual Deploy

### Method A: Vercel Dashboard

1. **Go to**: https://vercel.com
2. **Sign up/Login** with GitHub
3. **Click**: "Add New..." → "Project"
4. **Import**: Your `shakti-aahaar` repository
5. **Click**: "Deploy"
6. **Wait**: 30 seconds
7. **Done!** ✅

### Method B: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (from project directory)
vercel

# For production
vercel --prod
```

---

## 🎯 Using Our Deployment Scripts

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

## ✅ Verify Deployment

After deploying, check:

- [ ] Visit your Vercel URL
- [ ] Search works
- [ ] Filters work
- [ ] Meal planner works
- [ ] Mobile responsive
- [ ] No console errors

---

## 🌐 Add Custom Domain (Optional)

### In Vercel Dashboard:

1. **Project Settings** → **Domains**
2. **Add** your domain (e.g., `shaktiaahaar.com`)
3. **Add DNS records** in your domain registrar:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

4. **Wait** 5-30 minutes for DNS propagation
5. **HTTPS** automatically enabled! 🔒

---

## 🔄 Update Your Live App

Every time you update code:

```bash
git add .
git commit -m "Updated recipes"
git push
```

**Vercel automatically deploys!** No manual steps needed! 🚀

---

## 🆘 Troubleshooting

### Build Failed?

Check build logs in Vercel dashboard:
1. Go to **Deployments**
2. Click failed deployment
3. View **Build Logs**
4. Fix errors locally
5. Push again

### Common Fixes:

```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install

# Test build locally
npm run build

# If works, push to GitHub
git add .
git commit -m "Fixed build"
git push
```

### Still Having Issues?

1. Check [VERCEL-DEPLOYMENT-GUIDE.md](./VERCEL-DEPLOYMENT-GUIDE.md)
2. Check [Vercel Status](https://vercel-status.com)
3. Ask on [Vercel Discord](https://vercel.com/discord)

---

## 📱 Test Your Live App

Visit your deployed URL and test:

```
✓ Homepage loads
✓ Search recipes
✓ Apply filters
✓ Add to meal plan
✓ Test on mobile
✓ Test on different browsers
```

---

## 🎉 You're Live!

**Your app is now accessible worldwide!**

- Production: `https://shakti-aahaar.vercel.app`
- Custom Domain: `https://yourdomain.com` (if configured)

### Share it!

- LinkedIn
- Twitter
- Reddit
- Dev.to
- Product Hunt

---

## 📚 More Resources

- **Detailed Guide**: [VERCEL-DEPLOYMENT-GUIDE.md](./VERCEL-DEPLOYMENT-GUIDE.md)
- **Checklist**: [DEPLOYMENT-CHECKLIST.md](./DEPLOYMENT-CHECKLIST.md)
- **Production Guide**: [PRODUCTION-READY-GUIDE.md](./PRODUCTION-READY-GUIDE.md)

---

**Need help? Open an issue or check the documentation!**

*Made with ❤️ for Indian women's health*
