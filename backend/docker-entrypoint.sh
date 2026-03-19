#!/bin/sh

set -e

echo "⏳ Waiting for database..."

until php -r "try { new PDO('mysql:host=db;port=3306;dbname=rockencantech', 'user', 'password'); echo 'Database is ready!'; } catch (Exception \$e) { exit(1); }"; do
  echo "Database not ready... retrying in 3 seconds"
  sleep 3
done

if [ ! -d "vendor" ]; then
  echo "📦 Installing composer dependencies..."
  composer install
fi

if [ ! -f .env ]; then
  cp .env.example .env
fi

php artisan key:generate --force

php artisan migrate --seed --force

php artisan serve --host=0.0.0.0 --port=8000