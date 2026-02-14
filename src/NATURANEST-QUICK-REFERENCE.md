# 🌿 NaturaNest - Quick Reference Card

## 📦 Project Information

**Name**: NaturaNest  
**Version**: 1.0.0  
**Description**: Meal planner for Indian women's health  
**Technology**: React 18 + Vite + Tailwind CSS v4  

---

## 🔗 Important URLs

### Development:
- **Local Dev**: `http://localhost:5173` (default Vite port)

### Production (After Deployment):
- **Vercel URL**: `https://naturanest.vercel.app`
- **Custom Domain**: `https://naturanest.com` (if configured)

### Repository:
- **GitHub**: `https://github.com/YOUR_USERNAME/naturanest`
- **Vercel Dashboard**: `https://vercel.com/your-username/naturanest`

---

## ⚡ Quick Commands

### Development:
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Deployment:
```bash
npm run deploy       # Deploy to Vercel preview
npm run deploy:prod  # Deploy to Vercel production
vercel --prod        # Direct CLI deployment
```

### Automation Scripts:
```bash
# Linux/Mac
chmod +x scripts/deploy.sh
npm run deploy:prod:script

# Windows
scripts\deploy.bat production
```

---

## 📂 Key Files & Directories

### Configuration:
- `/vercel.json` - Vercel deployment config
- `/package.json` - Project dependencies & scripts
- `/.gitignore` - Git ignore rules
- `/.env.example` - Environment variables template

### Application:
- `/App.tsx` - Main application component
- `/components/` - React components
- `/data/` - Data types & mock recipes
- `/services/` - Recipe service layer
- `/styles/globals.css` - Tailwind v4 styles

### Documentation:
- `/README.md` - Main project documentation
- `/NATURANEST-DEPLOY.md` - Deployment guide
- `/DEPLOY-NOW.md` - Quick 3-step deployment
- `/WOMENS-HEALTH-GUIDE.md` - Health information

---

## 🎨 Branding

### Name:
**NaturaNest** (one word, camelCase)

### Tagline:
"Nourishing Indian Women & Children at Every Life Stage"

### Color Scheme:
- **Primary**: Orange (#ff6b35) - Energy & warmth
- **Secondary**: Yellow (#ffd93d) - Brightness & optimism
- **Accent**: Green (#6bcf7f) - Health & nature
- **Background**: Warm beige (#fef9f5)

### Icon:
🌿 Leaf/Nature symbol (represents natural nutrition)

---

## 🚀 Deployment Checklist

### Pre-Deployment:
- [ ] Test locally (`npm run dev`)
- [ ] Build successful (`npm run build`)
- [ ] No console errors
- [ ] Replace `YOUR_USERNAME` in files

### GitHub Setup:
- [ ] Create repository: `naturanest`
- [ ] Push code to main branch
- [ ] Repository is public (or private with Vercel access)

### Vercel Deployment:
- [ ] Sign up at vercel.com
- [ ] Import `naturanest` repository
- [ ] Click Deploy
- [ ] Wait 30-60 seconds

### Post-Deployment:
- [ ] Visit live URL
- [ ] Test all features
- [ ] Check mobile responsive
- [ ] No errors in browser console

---

## 🔧 Environment Variables

### Local Development (.env):
```env
VITE_API_URL=http://localhost:3000
VITE_USE_MOCK_DATA=true
```

### Production (Vercel Dashboard):
```env
VITE_API_URL=https://api.naturanest.com
VITE_USE_MOCK_DATA=false
VITE_BUILDER_API_KEY=your_key_here
```

**Note**: All variables must start with `VITE_` to be exposed to the app.

---

## 📊 Features Overview

### Core Features:
✅ Recipe search by ingredients, nutrients, health needs  
✅ Advanced filtering (dietary, nutrients, prep time)  
✅ 10 recipes per page with pagination  
✅ Weekly meal planning by day & meal type  
✅ Wishlist functionality (localStorage)  
✅ Life stage filtering (pregnancy, menopause, etc.)  

### Health Focus:
✅ Pregnancy & Postpartum nutrition  
✅ Perimenopause support  
✅ Menopause wellness  
✅ Children's nutrition  
✅ Women over 50  
✅ Diabetic-friendly options  

### Technical Features:
✅ Responsive design (mobile-first)  
✅ Dark mode support  
✅ 2-decimal precision for nutrients  
✅ Interactive health awareness cards  
✅ Life stage badges in recipe table  
✅ Production-ready data loading  

---

## 🐛 Common Issues & Fixes

### Build Fails:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routes Don't Work:
Already fixed in `vercel.json` - SPA routing configured ✅

### Environment Variables Not Working:
1. Must start with `VITE_` prefix
2. Add in Vercel Dashboard → Environment Variables
3. Redeploy after adding

### Port Already in Use:
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

---

## 📱 Testing Checklist

### Functionality:
- [ ] Search works
- [ ] All filters work
- [ ] Pagination works
- [ ] Weekly planner saves meals
- [ ] Wishlist persists
- [ ] Life stage cards filter recipes

### Responsive:
- [ ] Mobile (< 640px)
- [ ] Tablet (640-1024px)
- [ ] Desktop (> 1024px)

### Browsers:
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

### Performance:
- [ ] Lighthouse score > 90
- [ ] Page load < 2 seconds
- [ ] No console errors
- [ ] Images load properly

---

## 🌐 Custom Domain Setup

### DNS Configuration:

**A Record** (Root domain):
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**CNAME Record** (WWW):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### In Vercel:
1. Project Settings → Domains
2. Add `naturanest.com`
3. Wait 5-30 minutes for DNS
4. SSL auto-enabled ✅

---

## 📈 Analytics & Monitoring

### Vercel Analytics (Built-in):
- **Deployments** - View all deployments
- **Analytics** - Traffic & visitors
- **Logs** - Error tracking
- **Performance** - Speed metrics

### Enable Web Analytics:
1. Vercel Dashboard → Analytics
2. Enable Web Analytics (free)
3. View real-time data

---

## 🔐 Security

### Included:
✅ HTTPS enforced  
✅ Security headers configured  
✅ XSS protection enabled  
✅ Frame protection (DENY)  
✅ Content Security (nosniff)  

### Best Practices:
- Never commit `.env` file
- Use environment variables for API keys
- Keep dependencies updated
- Monitor security alerts

---

## 📞 Support & Resources

### Documentation:
- [NaturaNest Deploy Guide](./NATURANEST-DEPLOY.md)
- [Quick Deploy](./DEPLOY-NOW.md)
- [Production Guide](./PRODUCTION-READY-GUIDE.md)
- [Women's Health Guide](./WOMENS-HEALTH-GUIDE.md)

### External Resources:
- [Vercel Docs](https://vercel.com/docs)
- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)

### Community:
- [Vercel Discord](https://vercel.com/discord)
- [GitHub Issues](https://github.com/YOUR_USERNAME/naturanest/issues)

---

## ✅ Success Metrics

Your NaturaNest deployment is successful when:

✅ Live URL is accessible  
✅ All features work on live site  
✅ Mobile responsive  
✅ No console errors  
✅ Performance score > 90  
✅ HTTPS enabled  
✅ Auto-deployments working  

---

## 🎉 Next Steps

1. ✅ Deploy to Vercel
2. ✅ Test all features
3. ✅ Add custom domain (optional)
4. ✅ Enable analytics
5. ✅ Share with users
6. ✅ Gather feedback
7. ✅ Plan improvements

---

**Made with 💚 for Indian women's health**

**NaturaNest - Your trusted companion for nutritious living** 🌿

---

*Last Updated: Ready for immediate deployment*
