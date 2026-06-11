#!/usr/bin/env bash
# Run the whole project (install deps if needed, then start the dev server).
# Usage:  ./run.sh            -> start dev server on http://localhost:5173
#         ./run.sh build      -> typecheck + production build
#         ./run.sh preview    -> serve the production build
set -euo pipefail
cd "$(dirname "$0")"

if ! command -v pnpm >/dev/null 2>&1; then
  echo "pnpm is not installed. Install it with: npm install -g pnpm" >&2
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "Installing dependencies..."
  pnpm install
fi

task="${1:-dev}"
shift || true
echo "Running: pnpm run $task"
pnpm run "$task" "$@"
