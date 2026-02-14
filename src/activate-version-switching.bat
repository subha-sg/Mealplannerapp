@echo off
REM NaturaNest Version Switching Activation Script (Windows)
REM This script sets up version switching in one command

echo.
echo 🔄 NaturaNest Version Switching Setup
echo ======================================
echo.

REM Check if files exist
if not exist "App.tsx" (
    echo ❌ Error: App.tsx not found!
    exit /b 1
)

if not exist "SimpleRouter.tsx" (
    echo ❌ Error: SimpleRouter.tsx not found!
    exit /b 1
)

echo 📦 Step 1: Backing up current V2 code...
copy App.tsx App-v2.tsx >nul
echo ✅ Created App-v2.tsx (backup of your V2 code)

echo.
echo 🔧 Step 2: Activating router...
copy SimpleRouter.tsx App.tsx >nul
echo ✅ Router activated (SimpleRouter.tsx → App.tsx)

echo.
echo 📝 Step 3: Updating imports...

REM Update the App.tsx to uncomment V1 import and use AppV1
powershell -Command "(gc App.tsx) -replace '// import AppV1 from', 'import AppV1 from' | Out-File -encoding ASCII App.tsx"
powershell -Command "(gc App.tsx) -replace '<AppV1Placeholder />', '<AppV1 />' | Out-File -encoding ASCII App.tsx"

echo ✅ Imports updated

echo.
echo ✨ Setup Complete!
echo.
echo 🎯 How to Use:
echo   • Version 2.0: http://localhost:5173/
echo   • Version 1.0: http://localhost:5173/#v1
echo.
echo 📂 File Structure:
echo   • App.tsx         → Router (switches between versions)
echo   • App-v2.tsx      → Your V2 code (teal theme)
echo   • App-v1.tsx      → Your V1 code (pink theme or placeholder)
echo.
echo 💡 Next Steps:
echo   1. Run: npm run dev
echo   2. Visit: http://localhost:5173/
echo   3. Change URL to: http://localhost:5173/#v1
echo.
echo 📝 Note: If you have your original V1 code, paste it into App-v1.tsx
echo.
echo 🎉 Happy switching!
echo.
pause
