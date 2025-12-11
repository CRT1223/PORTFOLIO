@echo off
REM Render.com Deployment Script for Windows
REM This script helps you deploy your portfolio to Render.com

echo.
echo ========================================
echo   Render.com Deployment Script
echo ========================================
echo.

REM Check if git is initialized
if not exist ".git" (
    echo [WARNING] Git not initialized. Initializing git...
    git init
    echo [SUCCESS] Git initialized
)

REM Stage all files
echo.
echo [INFO] Staging all files...
git add .

REM Commit changes
echo [INFO] Committing changes...
git commit -m "Deploy to Render.com - %date% %time%"
if %errorlevel% neq 0 (
    echo [WARNING] No changes to commit or commit failed
) else (
    echo [SUCCESS] Changes committed
)

REM Check if remote exists
git remote show origin >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo [WARNING] No remote repository found
    set /p REPO_URL="Enter your GitHub repository URL: "
    git remote add origin %REPO_URL%
    echo [SUCCESS] Remote added
) else (
    echo [INFO] Remote 'origin' already exists
    git remote get-url origin
)

REM Push to GitHub
echo.
echo [INFO] Pushing to GitHub...
git branch -M main
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo   Deployment Script Complete!
    echo ========================================
    echo.
    echo [SUCCESS] Successfully pushed to GitHub!
    echo.
    echo Next Steps:
    echo 1. Go to https://dashboard.render.com
    echo 2. Click 'New +' -^> 'Static Site'
    echo 3. Connect your GitHub repository
    echo 4. Configure settings:
    echo    - Build Command: (leave empty)
    echo    - Publish Directory: . (dot)
    echo 5. Click 'Create Static Site'
    echo.
    echo Your portfolio will be live in a few minutes!
    echo.
) else (
    echo.
    echo [ERROR] Failed to push to GitHub
    echo Please check your Git configuration and try again.
    pause
    exit /b 1
)

pause

