#!/bin/sh

set -e

echo "⏳ Waiting for database..."

until php -r "try { new PDO('mysql:host=db;port=3306;dbname=rockencantech', 'user', 'password'); echo 'Database is ready!'; } catch (Exception \$e) { exit(1); }"; do
  echo "Database not ready... retrying in 3 seconds"
  sleep 3
done

# Criar .env se não existir
if [ ! -f .env ]; then
  cp .env.example .env
fi

# Gerar key
php artisan key:generate --force

# Rodar migrations (sem apagar dados existentes)
php artisan migrate --seed --force

# Subir servidor
php artisan serve --host=0.0.0.0 --port=8000