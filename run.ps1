#!/usr/bin/env pwsh
# Run the whole project (install deps if needed, then start the dev server).
# Usage:  ./run.ps1            -> start dev server on http://localhost:5173
#         ./run.ps1 build      -> typecheck + production build
#         ./run.ps1 preview    -> serve the production build
$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

if (-not (Get-Command pnpm -ErrorAction SilentlyContinue)) {
  Write-Error "pnpm is not installed. Install it with: npm install -g pnpm"
  exit 1
}

if (-not (Test-Path 'node_modules')) {
  Write-Host "Installing dependencies..." -ForegroundColor Cyan
  pnpm install
}

$task = if ($args.Count -gt 0) { $args[0] } else { 'dev' }
Write-Host "Running: pnpm run $task" -ForegroundColor Cyan
pnpm run $task @($args | Select-Object -Skip 1)
