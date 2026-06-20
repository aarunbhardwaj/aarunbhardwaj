# Deployment Guide for GitHub Pages Website

## Overview

This guide explains how to deploy the academic portfolio website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed locally
3. This repository cloned to your local machine

## Deployment Steps

### Option 1: Automatic Deployment via GitHub Actions (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add academic portfolio website"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Build and deployment":
     - Source: "GitHub Actions"
     - Branch: "main"
   - Click "Save"

3. **Monitor Deployment:**
   - Go to "Actions" tab
   - You should see the "Deploy to GitHub Pages" workflow running
   - Once complete, your site will be available at:
     `https://[your-username].github.io/[repository-name]`

### Option 2: Manual Deployment (Using docs folder)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add academic portfolio website"
   git push origin main
   ```

2. **Configure GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Build and deployment":
     - Source: "Deploy from a branch"
     - Branch: "main" → "/docs" folder
   - Click "Save"

3. **Wait for Deployment:**
   - GitHub will automatically deploy your site
   - Usually takes 1-2 minutes
   - Site will be available at:
     `https://[your-username].github.io/[repository-name]`

## Custom Domain (Optional)

To use a custom domain:

1. **Update CNAME file:**
   - Edit `/docs/CNAME`
   - Add your domain (e.g., `yourdomain.com`)

2. **Configure DNS:**
   - Add A records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add a CNAME record pointing to `[your-username].github.io`

3. **Update GitHub Settings:**
   - Go to repository Settings → Pages
   - Add your custom domain
   - Enable "Enforce HTTPS"

## Local Development

To run the website locally:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js with serve
npx serve docs

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Updating Content

1. **Edit files:**
   - `docs/index.html` - Main content
   - `docs/css/style.css` - Styles
   - `docs/js/main.js` - Interactive features

2. **Test locally** before pushing changes

3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```

## Features Included

✅ **Modern, Responsive Design**
- Works on desktop, tablet, and mobile
- Academic-focused aesthetic with custom color palette

✅ **Interactive Elements**
- Dark/light theme toggle
- Hover effects on skills
- Expandable project cards
- Print-friendly CV mode

✅ **Accessibility**
- Keyboard navigation
- Focus states
- Semantic HTML
- Reduced motion support

✅ **Deployment Ready**
- GitHub Actions workflow
- GitHub Pages configuration
- Custom domain support

## Troubleshooting

### Site Not Deploying
- Check GitHub Actions logs for errors
- Ensure `/docs` folder exists and contains `index.html`
- Verify repository settings have Pages enabled

### Styling Issues
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check browser console for CSS/JS errors
- Verify all file paths are correct

### Custom Domain Not Working
- DNS changes can take up to 24 hours to propagate
- Verify DNS records are correct
- Check GitHub Pages settings for domain verification

## Support

For issues or questions:
1. Check the GitHub Actions logs
2. Review the `/docs/README.md` file
3. Check browser console for errors

## License

This website is for personal/portfolio use. Feel free to modify and adapt for your own portfolio.