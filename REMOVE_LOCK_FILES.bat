@echo off
REM Quick script to remove package-lock.json and fix Render deployment

echo.
echo ========================================
echo   Removing package-lock.json
echo ========================================
echo.

if exist "package-lock.json" (
    echo [INFO] Found package-lock.json
    del /f package-lock.json
    echo [SUCCESS] Removed package-lock.json
) else (
    echo [INFO] No package-lock.json found - Good!
)

if exist "node_modules" (
    echo [INFO] Found node_modules
    rmdir /s /q node_modules
    echo [SUCCESS] Removed node_modules
) else (
    echo [INFO] No node_modules found - Good!
)

echo.
echo ========================================
echo   Next Steps:
echo ========================================
echo.
echo 1. Commit these changes:
echo    git add .
echo    git commit -m "Remove package-lock.json"
echo    git push
echo.
echo 2. In Render:
echo    - DELETE the current Web Service
echo    - Create NEW Static Site
echo    - Build Command: (empty)
echo    - Publish Directory: .
echo.
pause

