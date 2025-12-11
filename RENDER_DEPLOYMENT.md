# Complete Render.com Deployment Guide

This guide will help you deploy your portfolio website to Render.com step by step.

## Prerequisites

- ✅ GitHub account
- ✅ Git installed on your computer
- ✅ Your portfolio code ready

## Method 1: Using Deployment Scripts (Easiest)

### For Windows:
1. Double-click `deploy-render.bat`
2. Follow the prompts
3. Script will push to GitHub automatically

### For Mac/Linux:
1. Open terminal in project folder
2. Run: `chmod +x deploy-render.sh`
3. Run: `./deploy-render.sh`
4. Follow the prompts

## Method 2: Manual Deployment

### Step 1: Push to GitHub

```bash
# Navigate to project folder
cd "C:\Users\admin\Desktop\PORTFOLIO-main\PORTFOLIO-main"

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Deploy to Render.com"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Render.com

1. **Go to Render Dashboard**
   - Visit: https://dashboard.render.com
   - Sign in (or create account with GitHub)

2. **Create New Static Site**
   - Click **"New +"** button (top right)
   - Select **"Static Site"**

3. **Connect Repository**
   - Click **"Connect account"** if not connected
   - Select your GitHub account
   - Choose your repository (portfolio)
   - Click **"Connect"**

4. **Configure Settings**
   ```
   Name: portfolio-website (or any name)
   
   Branch: main
   
   Root Directory: (leave empty or use: PORTFOLIO-main if files are in subfolder)
   
   Build Command: (leave EMPTY or use: echo "No build needed")
   
   Publish Directory: . (just a dot)
   ```

5. **Advanced Settings (Optional)**
   - Click **"Advanced"**
   - Environment: `Static Site`
   - Auto-Deploy: `Yes` (deploys on every push)

6. **Create Static Site**
   - Click **"Create Static Site"**
   - Wait 2-3 minutes for deployment

7. **Get Your Live URL**
   - Once deployed, you'll get a URL like:
   - `https://portfolio-website.onrender.com`
   - Or set a custom domain in settings

## Method 3: Using render.yaml (Automatic Configuration)

If you've pushed `render.yaml` to your repository:

1. Go to Render dashboard
2. Click **"New +"** → **"Blueprint"**
3. Connect your repository
4. Render will automatically detect `render.yaml`
5. Click **"Apply"**
6. Your site will be configured automatically!

## Configuration Settings Summary

| Setting | Value |
|---------|-------|
| **Type** | Static Site |
| **Branch** | main |
| **Build Command** | (empty) or `echo "No build needed"` |
| **Publish Directory** | `.` (dot) |
| **Environment** | Static Site |

## Troubleshooting

### Error: "Could not read package.json"
✅ **Fixed!** - We've added `package.json` to your project.

### Error: "Build failed"
- Make sure **Build Command** is empty or `echo "No build needed"`
- Check that **Publish Directory** is set to `.`

### Error: "404 Not Found"
- Verify **Publish Directory** is `.` (not empty)
- Check that `index.html` is in the root folder
- If files are in subfolder, set Root Directory to that folder

### Site not updating after push
- Check Auto-Deploy is enabled in Render settings
- Manually trigger deployment: Settings → Manual Deploy

### Custom Domain Setup
1. Go to your service in Render
2. Click **"Settings"** → **"Custom Domains"**
3. Add your domain
4. Follow DNS configuration instructions

## Render.com Features

- ✅ **Free SSL Certificate** (automatic HTTPS)
- ✅ **Custom Domain Support**
- ✅ **Auto-Deploy** from GitHub
- ✅ **Global CDN** (fast loading)
- ✅ **Free Tier Available**

## Free Tier Limits

- 750 hours/month (enough for always-on site)
- 100 GB bandwidth/month
- Custom domains supported

## Updating Your Site

After making changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Render will automatically detect changes and redeploy (if Auto-Deploy is enabled).

## Files Included

- ✅ `package.json` - Prevents npm errors
- ✅ `render.yaml` - Auto-configuration file
- ✅ `deploy-render.sh` - Linux/Mac deployment script
- ✅ `deploy-render.bat` - Windows deployment script

## Quick Reference

**Render Dashboard:** https://dashboard.render.com  
**Documentation:** https://render.com/docs/static-sites  
**Support:** https://render.com/docs/support

---

## Need Help?

If you encounter any issues:
1. Check Render logs: Dashboard → Your Service → Logs
2. Verify all settings match this guide
3. Make sure `index.html` is in the root directory

Good luck with your deployment! 🚀

