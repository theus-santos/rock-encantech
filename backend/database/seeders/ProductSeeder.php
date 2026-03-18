<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        Product::insert([
            [
                'name' => 'Wireless Headphones',
                'description' => 'Noise cancelling wireless headphones',
                'price' => 299.90,
                'category_id' => 1,
                'image_url' => 'https://via.placeholder.com/300',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Clean Code',
                'description' => 'A handbook of agile software craftsmanship',
                'price' => 89.90,
                'category_id' => 2,
                'image_url' => 'https://via.placeholder.com/300',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Office Chair',
                'description' => 'Comfortable ergonomic office chair',
                'price' => 459.90,
                'category_id' => 3,
                'image_url' => 'https://via.placeholder.com/300',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Basic T-Shirt',
                'description' => 'Cotton t-shirt for daily use',
                'price' => 49.90,
                'category_id' => 4,
                'image_url' => 'https://via.placeholder.com/300',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}