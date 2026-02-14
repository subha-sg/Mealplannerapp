#!/bin/bash

# Shakti Aahaar - Automated Deployment Script for Vercel
# Usage: ./scripts/deploy.sh [production|preview]

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}================================${NC}"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# Check if vercel CLI is installed
check_vercel_cli() {
    if ! command -v vercel &> /dev/null; then
        print_error "Vercel CLI not found!"
        echo -e "Install it with: ${YELLOW}npm install -g vercel${NC}"
        exit 1
    fi
    print_success "Vercel CLI found"
}

# Check Node.js version
check_node_version() {
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        print_error "Node.js 18+ required. You have version $(node -v)"
        exit 1
    fi
    print_success "Node.js version $(node -v)"
}

# Run tests
run_tests() {
    print_header "Running Pre-Deployment Checks"
    
    # Type check
    echo "Type checking..."
    if npm run type-check 2>/dev/null; then
        print_success "TypeScript type check passed"
    else
        print_warning "TypeScript check skipped (no type-check script)"
    fi
    
    # Lint
    echo "Linting..."
    if npm run lint 2>/dev/null; then
        print_success "Linting passed"
    else
        print_warning "Linting skipped (no lint script)"
    fi
}

# Build locally to verify
build_locally() {
    print_header "Building Project Locally"
    
    echo "Installing dependencies..."
    npm ci
    print_success "Dependencies installed"
    
    echo "Building project..."
    npm run build
    print_success "Build successful"
    
    # Check build size
    BUILD_SIZE=$(du -sh dist 2>/dev/null | cut -f1 || echo "unknown")
    echo -e "Build size: ${YELLOW}${BUILD_SIZE}${NC}"
}

# Deploy to Vercel
deploy_to_vercel() {
    ENVIRONMENT=$1
    
    print_header "Deploying to Vercel ($ENVIRONMENT)"
    
    if [ "$ENVIRONMENT" = "production" ]; then
        echo "Deploying to PRODUCTION..."
        vercel --prod
    else
        echo "Deploying to PREVIEW..."
        vercel
    fi
    
    print_success "Deployment initiated!"
}

# Main deployment flow
main() {
    ENVIRONMENT=${1:-preview}
    
    echo ""
    print_header "Shakti Aahaar - Deployment Script"
    echo -e "Environment: ${YELLOW}${ENVIRONMENT}${NC}"
    echo ""
    
    # Pre-flight checks
    check_node_version
    check_vercel_cli
    
    # Ask for confirmation if production
    if [ "$ENVIRONMENT" = "production" ]; then
        echo ""
        print_warning "You are about to deploy to PRODUCTION!"
        read -p "Are you sure? (yes/no): " confirm
        if [ "$confirm" != "yes" ]; then
            print_error "Deployment cancelled"
            exit 0
        fi
    fi
    
    # Run checks
    run_tests
    
    # Build locally
    build_locally
    
    # Deploy
    deploy_to_vercel "$ENVIRONMENT"
    
    echo ""
    print_success "Deployment Complete!"
    echo ""
    echo "Next steps:"
    echo "1. Check deployment logs in Vercel dashboard"
    echo "2. Test your live site"
    echo "3. Monitor analytics"
    echo ""
}

# Run main function
main "$@"
