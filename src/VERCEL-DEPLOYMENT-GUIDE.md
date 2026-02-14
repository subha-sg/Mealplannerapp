# 🚀 Vercel Deployment Guide - Shakti Aahaar

## Quick Deploy (2 Minutes!) ⚡

### Method 1: One-Click Deploy (Easiest!)

Click this button to deploy instantly:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/shakti-aahaar&project-name=shakti-aahaar&repository-name=shakti-aahaar)

> **Note**: Replace `YOUR_USERNAME` with your actual GitHub username in the URL above.

---

## Method 2: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Shakti Aahaar Meal Planner"

# Create main branch
git branch -M main

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/shakti-aahaar.git

# Push to GitHub
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"** with GitHub
3. Click **"Add New..."** → **"Project"**
4. Find your `shakti-aahaar` repository
5. Click **"Import"**

### Step 3: Configure Project (Auto-detected!)

Vercel automatically detects these settings:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node.js Version: 18.x (recommended)
```

**You don't need to change anything!** ✅

### Step 4: Deploy!

1. Click **"Deploy"**
2. Wait 30-60 seconds ⏱️
3. **Done!** 🎉

Your app will be live at: `https://shakti-aahaar-xxxxx.vercel.app`

---

## Method 3: Deploy via Vercel CLI

### Install Vercel CLI

```bash
npm install -g vercel
```

### Login to Vercel

```bash
vercel login
```

### Deploy

```bash
# First deployment
vercel

# Production deployment
vercel --prod
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No
- **What's your project's name?** → shakti-aahaar
- **In which directory is your code located?** → ./
- **Want to override the settings?** → No

**Your app is now live!** 🚀

---

## 🌐 Custom Domain Setup

### Option 1: Use Vercel Subdomain (Free)

Your app is already live at:
- `https://shakti-aahaar.vercel.app`
- `https://shakti-aahaar-xxxxx.vercel.app`

You can customize the Vercel domain:

1. Go to **Project Settings** → **Domains**
2. Edit your `.vercel.app` domain
3. Change to `shaktiaahaar.vercel.app` (if available)

### Option 2: Add Your Own Domain (Free!)

#### If you have a domain (e.g., `shaktiaahaar.com`):

1. **In Vercel Dashboard:**
   - Go to **Project Settings** → **Domains**
   - Click **"Add"**
   - Enter your domain: `shaktiaahaar.com`
   - Click **"Add"**

2. **In Your Domain Registrar (e.g., GoDaddy, Namecheap):**

   Vercel will show you DNS records to add:

   **For Root Domain** (`shaktiaahaar.com`):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For WWW** (`www.shaktiaahaar.com`):
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS Propagation** (5-30 minutes)

4. **SSL Certificate** - Automatically provisioned by Vercel! ✅

### Option 3: Buy a Domain Through Vercel

1. Go to **Domains** tab
2. Click **"Buy a domain"**
3. Search for available domains
4. Purchase (starts at ~$15/year)
5. Automatically configured! No DNS setup needed!

---

## 🔧 Environment Variables

### For Production Deployment:

If you add environment variables later:

1. Go to **Project Settings** → **Environment Variables**
2. Add your variables:

```
VITE_API_URL=https://api.yourdomain.com
VITE_BUILDER_API_KEY=your_builder_key_here
VITE_USE_MOCK_DATA=false
```

3. Redeploy (automatic on next git push, or click "Redeploy")

### Local Development:

Create `.env` file:
```bash
cp .env.example .env
```

Edit `.env` with your local values.

---

## 🔄 Automatic Deployments

### Every Git Push Deploys Automatically!

```bash
# Make changes to your code
git add .
git commit -m "Updated recipes"
git push

# Vercel automatically deploys in ~30 seconds!
```

### Preview Deployments

- **Every branch** gets its own preview URL
- **Every pull request** gets a unique preview
- Perfect for testing before going live!

### Deployment Workflow:

```
main branch → Production (shaktiaahaar.com)
feature-branch → Preview (shakti-aahaar-git-feature-xxx.vercel.app)
Pull Request → Preview (comment with URL automatically added)
```

---

## 📊 Monitoring & Analytics

### Built-in Vercel Analytics (Free!)

1. Go to **Analytics** tab
2. See:
   - Page views
   - Unique visitors
   - Top pages
   - Real-time traffic
   - Performance metrics

### Enable Web Analytics:

1. Go to **Analytics** → **Enable Web Analytics**
2. Add this to your `index.html` (Vercel does this automatically)
3. Get detailed insights!

---

## ⚡ Performance Optimizations

Your app is already optimized with:

✅ **CDN** - Global edge network
✅ **Caching** - Automatic asset caching
✅ **Compression** - Gzip/Brotli
✅ **HTTP/2** - Fast multiplexing
✅ **SSL** - Free HTTPS certificate
✅ **Image Optimization** - Coming soon with Vercel Image

### Current Performance:

Expected Lighthouse scores:
- **Performance**: 95-100 ⚡
- **Accessibility**: 95-100 ♿
- **Best Practices**: 95-100 ✅
- **SEO**: 90-100 🔍

---

## 🐛 Troubleshooting

### Build Fails?

**Error: `npm ERR! code ELIFECYCLE`**

Solution:
```bash
# Clear cache locally
rm -rf node_modules package-lock.json
npm install
npm run build

# If it works locally, redeploy on Vercel
```

**Error: Memory Limit**

Solution: Upgrade to Vercel Pro ($20/month) for larger builds

### Routes Don't Work (404 on refresh)?

Already fixed in `vercel.json`! ✅

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Environment Variables Not Working?

1. Check you're using `VITE_` prefix
2. Redeploy after adding variables
3. Check **Deployments** → **Build Logs** for errors

### Domain Not Working?

1. Wait 5-30 minutes for DNS propagation
2. Check DNS settings with: `nslookup yourdomain.com`
3. Try incognito/private browsing
4. Clear browser cache

---

## 📱 Mobile Testing

Test your deployed app on mobile:

1. Visit your Vercel URL on your phone
2. Add to home screen
3. Test all features
4. Check responsiveness

---

## 🔐 Security Best Practices

Your app already has:

✅ **HTTPS** - Enforced
✅ **Security Headers** - Configured in `vercel.json`
✅ **XSS Protection** - Enabled
✅ **Frame Protection** - DENY
✅ **Content Security** - Nosniff

### Additional Security:

Add to `vercel.json` for API protection:

```json
{
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "https://yourdomain.com"
        }
      ]
    }
  ]
}
```

---

## 📈 Scaling

### Free Tier Limits:

- ✅ **Bandwidth**: 100GB/month
- ✅ **Builds**: Unlimited
- ✅ **Deployments**: Unlimited
- ✅ **Team Members**: 1
- ✅ **Domains**: Unlimited

### When to Upgrade to Pro ($20/month):

- Need more bandwidth (1TB)
- Larger build sizes
- Team collaboration
- Advanced analytics
- Priority support

---

## 🎯 Next Steps After Deployment

### 1. **Test Everything**

- [ ] Homepage loads
- [ ] Search works
- [ ] Filters work
- [ ] Weekly planner works
- [ ] Mobile responsive
- [ ] All features functional

### 2. **Set Up Custom Domain**

- [ ] Buy domain (or use existing)
- [ ] Configure DNS
- [ ] Wait for SSL certificate
- [ ] Test HTTPS

### 3. **Share Your App!**

- [ ] Share URL on social media
- [ ] Add to your portfolio
- [ ] Submit to Product Hunt
- [ ] Post on Reddit/Dev.to

### 4. **Monitor Performance**

- [ ] Enable Vercel Analytics
- [ ] Add Google Analytics (optional)
- [ ] Monitor error logs
- [ ] Track user feedback

---

## 🆘 Need Help?

### Resources:

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Discord**: https://vercel.com/discord
- **Status**: https://vercel-status.com

### Common Issues:

| Issue | Solution |
|-------|----------|
| Build fails | Check build logs in Vercel dashboard |
| 404 errors | Check `vercel.json` rewrites |
| Slow loading | Check bundle size, enable compression |
| Domain issues | Wait for DNS, check registrar settings |

---

## 🎉 You're Live!

**Congratulations!** Your Shakti Aahaar app is now deployed and accessible worldwide! 🌍

**Your Live URLs:**
- Production: `https://your-domain.com`
- Vercel: `https://shakti-aahaar.vercel.app`

**Next Deployment:**
Just `git push` and Vercel handles the rest! 🚀

---

## 📋 Quick Reference Commands

```bash
# Local development
npm run dev

# Build locally
npm run build

# Preview build
npm run preview

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Open project in browser
vercel open
```

---

**Made with ❤️ for Indian women's health**

*Need more help? Check [PRODUCTION-READY-GUIDE.md](./PRODUCTION-READY-GUIDE.md)*
