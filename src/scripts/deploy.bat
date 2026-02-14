@echo off
REM Shakti Aahaar - Automated Deployment Script for Vercel (Windows)
REM Usage: scripts\deploy.bat [production|preview]

setlocal enabledelayedexpansion

REM Set environment (default to preview)
set "ENVIRONMENT=%1"
if "%ENVIRONMENT%"=="" set "ENVIRONMENT=preview"

echo.
echo ================================
echo Shakti Aahaar - Deployment
echo Environment: %ENVIRONMENT%
echo ================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js not found! Please install Node.js 18+
    exit /b 1
)
echo [OK] Node.js found: 
node -v

REM Check if Vercel CLI is installed
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Vercel CLI not found!
    echo Install it with: npm install -g vercel
    exit /b 1
)
echo [OK] Vercel CLI found

REM Confirmation for production
if "%ENVIRONMENT%"=="production" (
    echo.
    echo [WARNING] You are about to deploy to PRODUCTION!
    set /p "confirm=Are you sure? (yes/no): "
    if not "!confirm!"=="yes" (
        echo [CANCELLED] Deployment cancelled
        exit /b 0
    )
)

echo.
echo ================================
echo Installing Dependencies
echo ================================
call npm ci
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install dependencies
    exit /b 1
)
echo [OK] Dependencies installed

echo.
echo ================================
echo Building Project
echo ================================
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Build failed
    exit /b 1
)
echo [OK] Build successful

echo.
echo ================================
echo Deploying to Vercel
echo ================================

if "%ENVIRONMENT%"=="production" (
    echo Deploying to PRODUCTION...
    call vercel --prod
) else (
    echo Deploying to PREVIEW...
    call vercel
)

if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Deployment failed
    exit /b 1
)

echo.
echo [SUCCESS] Deployment Complete!
echo.
echo Next steps:
echo 1. Check deployment logs in Vercel dashboard
echo 2. Test your live site
echo 3. Monitor analytics
echo.

endlocal
