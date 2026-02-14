# 🚀 Deployment Checklist - Shakti Aahaar

## Pre-Deployment

### Code Quality
- [ ] All features working locally (`npm run dev`)
- [ ] Production build successful (`npm run build`)
- [ ] No console errors or warnings
- [ ] TypeScript types validated (if using `npm run type-check`)
- [ ] Linting passed (if using `npm run lint`)
- [ ] All components render correctly
- [ ] Mobile responsive on all screen sizes

### Content & Data
- [ ] Recipe data is complete and accurate
- [ ] All nutritional values have 2 decimal precision
- [ ] Images load correctly (if any)
- [ ] Health information is up-to-date
- [ ] No placeholder text (Lorem ipsum, etc.)

### Testing
- [ ] Search functionality works
- [ ] All filters work correctly
- [ ] Weekly meal planner functions properly
- [ ] Wishlist saves to localStorage
- [ ] Life stage filtering works
- [ ] Pagination works correctly
- [ ] All buttons/links work
- [ ] No broken features

### Configuration Files
- [ ] `vercel.json` is configured
- [ ] `.env.example` is updated
- [ ] `README.md` has correct GitHub username
- [ ] `package.json` has correct name and version
- [ ] `.gitignore` includes `.env`

---

## GitHub Setup

### Repository
- [ ] Create GitHub repository named `shakti-aahaar`
- [ ] Repository is public (or private with Vercel access)
- [ ] README.md is complete
- [ ] License file added (if needed)

### Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Shakti Aahaar v1.0"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shakti-aahaar.git
git push -u origin main
```

- [ ] Code pushed to `main` branch
- [ ] All files uploaded correctly
- [ ] `.env` is NOT in repository (check .gitignore)

---

## Vercel Deployment

### First-Time Setup
- [ ] Vercel account created
- [ ] GitHub connected to Vercel
- [ ] Project imported from GitHub

### Deployment Configuration
- [ ] Framework preset: **Vite** (auto-detected)
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Install command: `npm install`
- [ ] Node.js version: 18.x or higher

### Environment Variables
If you have any:
- [ ] Added to Vercel dashboard
- [ ] Prefixed with `VITE_`
- [ ] Production values configured
- [ ] Preview values configured (if different)

### Deploy
- [ ] Click "Deploy" button
- [ ] Wait for deployment (30-60 seconds)
- [ ] Deployment successful (green checkmark)
- [ ] Build logs show no errors

---

## Post-Deployment Testing

### Functionality Testing
Visit your live URL: `https://shakti-aahaar-xxxxx.vercel.app`

- [ ] Homepage loads correctly
- [ ] Search bar works
- [ ] Filter panel opens (mobile)
- [ ] All filters function properly
- [ ] Recipe table displays data
- [ ] Pagination works
- [ ] Weekly meal planner opens
- [ ] Can add/remove meals from planner
- [ ] Wishlist functionality works
- [ ] Life stage cards filter correctly

### Visual Testing
- [ ] Design looks correct
- [ ] Colors match design (orange/yellow/green theme)
- [ ] Typography is readable
- [ ] Images load (if any)
- [ ] Icons display correctly
- [ ] Responsive on mobile (test on real device)
- [ ] Responsive on tablet
- [ ] Responsive on desktop
- [ ] Dark mode works (if implemented)

### Performance Testing
Use Lighthouse or PageSpeed Insights:
- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 80
- [ ] Page loads in < 2 seconds

### Cross-Browser Testing
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (Mac/iOS)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Error Testing
- [ ] No console errors
- [ ] No network errors
- [ ] 404 page shows (navigate to /nonexistent)
- [ ] Error boundaries work (if implemented)

---

## Domain Setup (Optional)

### If Using Custom Domain:

#### Purchase Domain
- [ ] Domain purchased (GoDaddy, Namecheap, etc.)
- [ ] Domain registrar account accessible

#### Configure DNS in Vercel
- [ ] Domain added in Vercel dashboard
- [ ] DNS records provided by Vercel

#### Update Domain Registrar
- [ ] A record added: `@` → `76.76.21.21`
- [ ] CNAME added: `www` → `cname.vercel-dns.com`
- [ ] DNS changes saved

#### Wait & Verify
- [ ] DNS propagation complete (5-30 minutes)
- [ ] SSL certificate issued (automatic)
- [ ] HTTPS works on custom domain
- [ ] WWW redirect works
- [ ] Both http and https redirect to https

---

## SEO & Analytics

### SEO Basics
- [ ] Page title is descriptive
- [ ] Meta description added (if applicable)
- [ ] Favicon displays correctly
- [ ] Open Graph tags (for social sharing)
- [ ] Structured data (optional)

### Analytics Setup
- [ ] Vercel Analytics enabled
- [ ] Google Analytics added (optional)
- [ ] Tracking code verified
- [ ] Test analytics tracking

---

## Documentation & Sharing

### Update Documentation
- [ ] Update README with live URL
- [ ] Update deployment guide if needed
- [ ] Document any custom configuration
- [ ] Add screenshots to README (optional)

### Prepare for Sharing
- [ ] Screenshot of live app
- [ ] Short description prepared
- [ ] Feature list ready
- [ ] Demo video created (optional)

### Share Your App!
- [ ] Share on LinkedIn
- [ ] Share on Twitter/X
- [ ] Post on Reddit (r/webdev, r/reactjs)
- [ ] Post on Dev.to
- [ ] Add to portfolio
- [ ] Submit to Product Hunt (optional)
- [ ] Share in relevant communities

---

## Monitoring & Maintenance

### Set Up Monitoring
- [ ] Vercel deployment notifications enabled
- [ ] Email alerts configured
- [ ] Bookmark Vercel dashboard
- [ ] Save deployment URLs

### Regular Checks
- [ ] Monitor analytics weekly
- [ ] Check error logs in Vercel
- [ ] Test features monthly
- [ ] Update dependencies quarterly
- [ ] Review user feedback

### Future Updates
- [ ] Plan feature roadmap
- [ ] Document known issues
- [ ] Set up issue tracker (GitHub Issues)
- [ ] Create contribution guidelines (if open source)

---

## Rollback Plan

### If Something Goes Wrong:

1. **Instant Rollback in Vercel:**
   - Go to Deployments tab
   - Find previous working deployment
   - Click "..." → "Promote to Production"

2. **Or via CLI:**
   ```bash
   vercel rollback
   ```

3. **Check Logs:**
   - Vercel Dashboard → Deployment → Logs
   - Look for errors in build/runtime logs

4. **Test Locally:**
   ```bash
   git checkout main
   npm install
   npm run build
   npm run preview
   ```

---

## Security Checklist

- [ ] No API keys in code
- [ ] `.env` in `.gitignore`
- [ ] Environment variables set correctly
- [ ] HTTPS enabled (automatic on Vercel)
- [ ] Security headers configured (in vercel.json)
- [ ] No sensitive data exposed
- [ ] CORS configured (if using API)

---

## Vercel-Specific

### Dashboard Access
- [ ] Can access Vercel dashboard
- [ ] Project settings accessible
- [ ] Deployment logs readable
- [ ] Analytics visible

### Automatic Deployments
- [ ] Git integration working
- [ ] Auto-deploy on push enabled
- [ ] Preview deployments for PRs enabled
- [ ] Deployment notifications configured

### Limits & Usage
- [ ] Within free tier limits:
  - Bandwidth: < 100GB/month
  - Builds: Unlimited
  - Serverless function executions: < 100k/month
- [ ] Monitor usage in dashboard

---

## Final Checks

### Before Announcing:
- [ ] All above items completed
- [ ] App tested on multiple devices
- [ ] No critical bugs
- [ ] Documentation is clear
- [ ] Contact information available
- [ ] Privacy policy added (if collecting data)
- [ ] Terms of service (if needed)

### Launch Day:
- [ ] Final production deployment
- [ ] All tests passing
- [ ] Performance optimized
- [ ] Ready for traffic
- [ ] Support plan in place

---

## 🎉 You're Live!

**Congratulations! Your Shakti Aahaar app is deployed!**

### Live URLs to Save:
- Production: `https://your-domain.com`
- Vercel: `https://shakti-aahaar.vercel.app`
- Dashboard: `https://vercel.com/your-username/shakti-aahaar`

### Next Steps:
1. Share your app with the world! 🌍
2. Gather user feedback
3. Plan next features
4. Keep improving!

---

**Need Help?**
- [Vercel Documentation](https://vercel.com/docs)
- [Deployment Guide](./VERCEL-DEPLOYMENT-GUIDE.md)
- [Production Guide](./PRODUCTION-READY-GUIDE.md)

*Made with ❤️ for Indian women's health*
