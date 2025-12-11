# How to Deploy Your Portfolio to GitHub

Follow these step-by-step instructions to deploy your portfolio website to GitHub and make it live using GitHub Pages.

## Prerequisites

- A GitHub account (create one at [github.com](https://github.com) if you don't have one)
- Git installed on your computer ([Download Git](https://git-scm.com/downloads))

## Step-by-Step Instructions

### Step 1: Create a New Repository on GitHub

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `portfolio` (or any name you prefer)
   - **Description**: "My Portfolio Website"
   - **Visibility**: Choose **Public** (required for free GitHub Pages)
   - **DO NOT** check "Initialize with README" (we already have files)
5. Click **"Create repository"**

### Step 2: Open Terminal/Command Prompt

- **Windows**: Press `Win + R`, type `cmd`, and press Enter
- **Mac/Linux**: Open Terminal

### Step 3: Navigate to Your Project Folder

```bash
cd "C:\Users\admin\Desktop\PORTFOLIO-main\PORTFOLIO-main"
```

### Step 4: Initialize Git (if not already done)

```bash
git init
```

### Step 5: Add All Files to Git

```bash
git add .
```

### Step 6: Create Your First Commit

```bash
git commit -m "Initial commit: Portfolio website"
```

### Step 7: Connect to Your GitHub Repository

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
```

### Step 8: Push Your Code to GitHub

```bash
git branch -M main
git push -u origin main
```

You'll be prompted to enter your GitHub username and password (or personal access token).

### Step 9: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** tab (at the top of the repository)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **"Save"**

### Step 10: Access Your Live Website

After a few minutes, your website will be live at:
```
https://YOUR_USERNAME.github.io/portfolio/
```

Replace `YOUR_USERNAME` with your GitHub username and `portfolio` with your repository name.

## Updating Your Website

Whenever you make changes to your website:

1. Navigate to your project folder in terminal
2. Add your changes:
   ```bash
   git add .
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of your changes"
   ```
4. Push to GitHub:
   ```bash
   git push
   ```

Your changes will be live on GitHub Pages within a few minutes!

## Troubleshooting

### If you get authentication errors:
- Use a Personal Access Token instead of password
- Create one at: GitHub → Settings → Developer settings → Personal access tokens

### If GitHub Pages doesn't work:
- Make sure your repository is **Public**
- Check that you selected the correct branch (main) and folder (/)
- Wait a few minutes for GitHub to process the changes

### If files don't appear:
- Make sure you're in the correct directory
- Check that `index.html` is in the root folder
- Verify all files were added with `git status`

## Need Help?

If you encounter any issues, check the [GitHub Pages Documentation](https://docs.github.com/en/pages) or feel free to ask for assistance!

