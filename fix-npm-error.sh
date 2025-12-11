#!/bin/bash

# Fix npm "Lock compromised" error for Render.com deployment

echo "🔧 Fixing npm lock compromised error..."

# Remove package-lock.json if it exists (not needed for static sites)
if [ -f "package-lock.json" ]; then
    echo "Removing package-lock.json..."
    rm package-lock.json
    echo "✅ Removed package-lock.json"
fi

# Remove node_modules if it exists
if [ -d "node_modules" ]; then
    echo "Removing node_modules..."
    rm -rf node_modules
    echo "✅ Removed node_modules"
fi

# Add .npmrc to prevent lock file creation
if [ ! -f ".npmrc" ]; then
    echo "Creating .npmrc..."
    echo "package-lock=false" > .npmrc
    echo "save=false" >> .npmrc
    echo "✅ Created .npmrc"
fi

# Update .gitignore to exclude lock files
if [ -f ".gitignore" ]; then
    if ! grep -q "package-lock.json" .gitignore; then
        echo "" >> .gitignore
        echo "# NPM lock files" >> .gitignore
        echo "package-lock.json" >> .gitignore
        echo "✅ Updated .gitignore"
    fi
else
    echo "package-lock.json" > .gitignore
    echo "node_modules/" >> .gitignore
    echo "✅ Created .gitignore"
fi

echo ""
echo "✅ Fix complete!"
echo ""
echo "Next steps:"
echo "1. Commit these changes:"
echo "   git add ."
echo "   git commit -m 'Fix npm lock error'"
echo "   git push"
echo ""
echo "2. In Render.com dashboard:"
echo "   - Set Build Command to: (empty) or 'echo No build needed'"
echo "   - Or delete and recreate as Static Site type"

