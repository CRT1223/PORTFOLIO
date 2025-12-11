#!/bin/bash

# Render.com Deployment Script
# This script helps you deploy your portfolio to Render.com

echo "🚀 Starting Render.com Deployment Process..."
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}⚠️  Git not initialized. Initializing git...${NC}"
    git init
    echo -e "${GREEN}✅ Git initialized${NC}"
fi

# Check if files are staged
if [ -z "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}⚠️  No changes to commit${NC}"
else
    echo -e "${GREEN}📝 Staging files...${NC}"
    git add .
    
    echo -e "${GREEN}💾 Committing changes...${NC}"
    git commit -m "Deploy to Render.com - $(date +%Y-%m-%d)"
    echo -e "${GREEN}✅ Changes committed${NC}"
fi

# Check if remote exists
if git remote | grep -q "origin"; then
    echo -e "${GREEN}✅ Remote 'origin' already exists${NC}"
    REMOTE_URL=$(git remote get-url origin)
    echo -e "   Remote URL: ${REMOTE_URL}"
else
    echo -e "${YELLOW}⚠️  No remote repository found${NC}"
    read -p "Enter your GitHub repository URL: " REPO_URL
    git remote add origin "$REPO_URL"
    echo -e "${GREEN}✅ Remote added${NC}"
fi

# Push to GitHub
echo ""
echo -e "${GREEN}📤 Pushing to GitHub...${NC}"
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Successfully pushed to GitHub!${NC}"
    echo ""
    echo -e "${GREEN}🎉 Next Steps:${NC}"
    echo "1. Go to https://dashboard.render.com"
    echo "2. Click 'New +' → 'Static Site'"
    echo "3. Connect your GitHub repository"
    echo "4. Configure settings:"
    echo "   - Build Command: (leave empty or use: echo 'No build needed')"
    echo "   - Publish Directory: . (dot)"
    echo "5. Click 'Create Static Site'"
    echo ""
    echo -e "${GREEN}✨ Your portfolio will be live in a few minutes!${NC}"
else
    echo -e "${RED}❌ Failed to push to GitHub${NC}"
    echo "Please check your Git configuration and try again."
    exit 1
fi

