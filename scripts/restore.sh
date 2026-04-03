#!/bin/bash
# Clean install and start dev server (run from my-app folder: bash scripts/restore.sh)
set -e
cd "$(dirname "$0")/.."
echo "Removing .next and node_modules..."
rm -rf .next node_modules
echo "Installing dependencies..."
npm install
echo "Starting dev server with webpack..."
exec npm run dev
