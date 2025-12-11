@echo off
REM Fix npm "Lock compromised" error for Render.com deployment

echo.
echo ========================================
echo   Fixing npm Lock Compromised Error
echo ========================================
echo.

REM Remove package-lock.json if it exists
if exist "package-lock.json" (
    echo [INFO] Removing package-lock.json...
    del /f package-lock.json
    echo [SUCCESS] Removed package-lock.json
) else (
    echo [INFO] No package-lock.json found
)

REM Remove node_modules if it exists
if exist "node_modules" (
    echo [INFO] Removing node_modules...
    rmdir /s /q node_modules
    echo [SUCCESS] Removed node_modules
) else (
    echo [INFO] No node_modules found
)

REM Check if .npmrc exists
if not exist ".npmrc" (
    echo [INFO] Creating .npmrc...
    (
        echo package-lock=false
        echo save=false
    ) > .npmrc
    echo [SUCCESS] Created .npmrc
) else (
    echo [INFO] .npmrc already exists
)

REM Update .gitignore
if exist ".gitignore" (
    findstr /C:"package-lock.json" .gitignore >nul
    if errorlevel 1 (
        echo. >> .gitignore
        echo # NPM lock files >> .gitignore
        echo package-lock.json >> .gitignore
        echo [SUCCESS] Updated .gitignore
    ) else (
        echo [INFO] package-lock.json already in .gitignore
    )
) else (
    echo package-lock.json > .gitignore
    echo node_modules/ >> .gitignore
    echo [SUCCESS] Created .gitignore
)

echo.
echo ========================================
echo   Fix Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Commit these changes:
echo    git add .
echo    git commit -m "Fix npm lock error"
echo    git push
echo.
echo 2. In Render.com dashboard:
echo    - Set Build Command to: (empty)
echo    - Or recreate as Static Site type
echo.
pause

