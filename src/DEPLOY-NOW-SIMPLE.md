# 🚀 Deploy NaturaNest in 5 Minutes

## ⚡ FASTEST Way (Recommended)

### Option A: Vercel (No Command Line Needed!)

1. **Push to GitHub**
   - Create a new repository on GitHub.com
   - Upload your NaturaNest folder
   
2. **Deploy**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"
   - ✅ Done! Live in 2 minutes!

**Your live URL:** `https://naturanest-xyz.vercel.app`

---

### Option B: Using Command Line

#### Step 1: Prepare
```bash
# Mac/Linux
bash scripts/prepare-deployment.sh

# Windows
scripts\prepare-deployment.bat
```

#### Step 2: Deploy to Vercel
```bash
npm install -g vercel
vercel
```

Follow the prompts, and you're live! 🎉

---

## 🌐 Traditional Hosting (Hostinger, Bluehost, etc.)

### Quick Steps:
1. **Build your app**
   ```bash
   npm run build
   ```

2. **Upload `dist` folder contents to your hosting**
   - Via cPanel File Manager → `public_html`
   - Or via FTP

3. **Create `.htaccess` file** in your root folder:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **✅ Visit your domain!**

---

## 📱 Make it a Mobile App (PWA)

Your app is already mobile-ready! Users can:
- Open your website on their phone
- Tap "Add to Home Screen"
- Use it like a native app!

No app store needed! 📲

---

## ✅ Pre-Launch Checklist

- [ ] Build completes without errors
- [ ] All 160+ recipes are added
- [ ] Test on mobile device
- [ ] Test filters work
- [ ] Test meal planner
- [ ] Check subscription features
- [ ] INDB attribution visible

---

## 🆘 Having Issues?

### Build fails?
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Can't see recipes?
- Check `/data/mockRecipes.json` has your recipes
- Refresh browser cache (Ctrl+Shift+R)

### Blank page after upload?
- Make sure you uploaded from `dist` folder, not root
- Add `.htaccess` file (see above)

---

## 📞 What's Next?

After deployment:
1. ✅ Share your live link!
2. 📊 Add Google Analytics (optional)
3. 🎨 Set up custom domain (optional)
4. 💾 Connect to real database (Supabase - free!)

---

## 💰 Cost Summary

| What | Cost |
|------|------|
| Vercel Hosting | **FREE** |
| Domain Name (optional) | $10-15/year |
| Supabase Database (optional) | **FREE** |
| **Total** | **$0 to start!** |

---

**Need help?** See the complete guide: `DEPLOYMENT-GUIDE.md`

**Ready to add recipes?** See: `RECIPE-IMPORT-GUIDE.md`

---

## 🎯 Recommended Next Steps

1. **Today:** Deploy to Vercel (free)
2. **This Week:** Add your 160+ recipes
3. **Next Week:** Test with real users
4. **Month 2:** Add custom domain
5. **Month 3:** Connect Supabase for real data

---

**You're ready to launch! 🚀**

Run this command to start:
```bash
bash scripts/prepare-deployment.sh
```

Or just push to GitHub and use Vercel! 🌿
