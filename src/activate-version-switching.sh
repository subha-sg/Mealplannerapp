#!/bin/bash

# NaturaNest Version Switching Activation Script
# This script sets up version switching in one command

echo "🔄 NaturaNest Version Switching Setup"
echo "======================================"
echo ""

# Check if files exist
if [ ! -f "App.tsx" ]; then
    echo "❌ Error: App.tsx not found!"
    exit 1
fi

if [ ! -f "SimpleRouter.tsx" ]; then
    echo "❌ Error: SimpleRouter.tsx not found!"
    exit 1
fi

echo "📦 Step 1: Backing up current V2 code..."
cp App.tsx App-v2.tsx
echo "✅ Created App-v2.tsx (backup of your V2 code)"

echo ""
echo "🔧 Step 2: Activating router..."
cp SimpleRouter.tsx App.tsx
echo "✅ Router activated (SimpleRouter.tsx → App.tsx)"

echo ""
echo "📝 Step 3: Updating imports..."

# Update the App.tsx to uncomment V1 import and use AppV1
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' 's|// import AppV1 from|import AppV1 from|g' App.tsx
    sed -i '' 's|<AppV1Placeholder />|<AppV1 />|g' App.tsx
else
    # Linux
    sed -i 's|// import AppV1 from|import AppV1 from|g' App.tsx
    sed -i 's|<AppV1Placeholder />|<AppV1 />|g' App.tsx
fi

echo "✅ Imports updated"

echo ""
echo "✨ Setup Complete!"
echo ""
echo "🎯 How to Use:"
echo "  • Version 2.0: http://localhost:5173/"
echo "  • Version 1.0: http://localhost:5173/#v1"
echo ""
echo "📂 File Structure:"
echo "  • App.tsx         → Router (switches between versions)"
echo "  • App-v2.tsx      → Your V2 code (teal theme)"
echo "  • App-v1.tsx      → Your V1 code (pink theme or placeholder)"
echo ""
echo "💡 Next Steps:"
echo "  1. Run: npm run dev"
echo "  2. Visit: http://localhost:5173/"
echo "  3. Change URL to: http://localhost:5173/#v1"
echo ""
echo "📝 Note: If you have your original V1 code, paste it into App-v1.tsx"
echo ""
echo "🎉 Happy switching!"
