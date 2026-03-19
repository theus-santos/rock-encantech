<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $categories = Category::pluck('id', 'name')->toArray();

        $products = [
            [
                'name'=>'iPhone 14 Pro',
                'description'=>'Apple smartphone with advanced camera system.',
                'price'=>999.99,
                'category'=>'Electronics',
                'image_url'=>'https://images.unsplash.com/photo-1663499482523-1c6d9b0a0a6d',
            ],
            [
                'name'=>'MacBook Air',
                'description'=>'Lightweight Apple laptop.',
                'price'=>1199.99,
                'category'=>'Electronics',
                'image_url'=>'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
            ],
            [
                'name'=>'Sony Headphones',
                'description'=>'Noise cancelling headphones.',
                'price'=>349.99,
                'category'=>'Electronics',
                'image_url'=>'https://images.unsplash.com/photo-1518443895914-6b0bde7f6b9d',
            ],
            [
                'name'=>'Apple Watch',
                'description'=>'Smartwatch with health tracking.',
                'price'=>399.99,
                'category'=>'Electronics',
                'image_url'=>'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b',
            ],
            [
                'name'=>'Clean Code',
                'description'=>'Guide to writing clean code.',
                'price'=>39.99,
                'category'=>'Books',
                'image_url'=>'https://images.unsplash.com/photo-1512820790803-83ca734da794',
            ],
            [
                'name'=>'Atomic Habits',
                'description'=>'Build better habits.',
                'price'=>29.99,
                'category'=>'Books',
                'image_url'=>'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c',
            ],
            [
                'name'=>'Modern Sofa',
                'description'=>'Comfortable modern sofa.',
                'price'=>599.99,
                'category'=>'Home',
                'image_url'=>'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
            ],
            [
                'name'=>'Dining Table',
                'description'=>'Wooden dining table.',
                'price'=>499.99,
                'category'=>'Home',
                'image_url'=>'https://images.unsplash.com/photo-1493666438817-866a91353ca9',
            ],
            [
                'name'=>'Nike Air Max',
                'description'=>'Comfortable Nike sneakers.',
                'price'=>150.00,
                'category'=>'Clothing',
                'image_url'=>'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
            ],
            [
                'name'=>'Adidas Hoodie',
                'description'=>'Warm hoodie.',
                'price'=>80.00,
                'category'=>'Clothing',
                'image_url'=>'https://images.unsplash.com/photo-1556906781-9a412961c28c',
            ],
            [
                'name'=>'Levi’s Jeans',
                'description'=>'Classic denim jeans.',
                'price'=>90.00,
                'category'=>'Clothing',
                'image_url'=>'https://images.unsplash.com/photo-1541099649105-f69ad21f3246',
            ],
            [
                'name'=>'Football Ball',
                'description'=>'Professional football.',
                'price'=>39.99,
                'category'=>'Sports',
                'image_url'=>'https://images.unsplash.com/photo-1517649763962-0c623066013b',
            ],
            [
                'name'=>'Tennis Racket',
                'description'=>'Lightweight racket.',
                'price'=>89.99,
                'category'=>'Sports',
                'image_url'=>'https://images.unsplash.com/photo-1521412644187-c49fa049e84d',
            ],
            [
                'name'=>'RC Car',
                'description'=>'Remote control car.',
                'price'=>49.99,
                'category'=>'Toys',
                'image_url'=>'https://images.unsplash.com/photo-1608889175111-e19c9b6f8f90',
            ],
            [
                'name'=>'Puzzle Game',
                'description'=>'Puzzle board game.',
                'price'=>14.99,
                'category'=>'Toys',
                'image_url'=>'https://images.unsplash.com/photo-1589254065878-42c9da997008',
            ],
            [
                'name'=>'Perfume',
                'description'=>'Long lasting fragrance.',
                'price'=>59.99,
                'category'=>'Beauty',
                'image_url'=>'https://images.unsplash.com/photo-1596462502278-27bfdc403348',
            ],
            [
                'name'=>'Car Interior',
                'description'=>'Modern car dashboard.',
                'price'=>199.99,
                'category'=>'Automotive',
                'image_url'=>'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
            ],
            [
                'name'=>'Plant Pot',
                'description'=>'Decorative plant pot.',
                'price'=>14.99,
                'category'=>'Garden',
                'image_url'=>'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735',
            ],
            [
                'name'=>'Fitness Tracker',
                'description'=>'Track daily activity.',
                'price'=>79.99,
                'category'=>'Health',
                'image_url'=>'https://images.unsplash.com/photo-1550831107-1553da8c8464',
            ],
        ];

        foreach ($products as $product) {
            if (!isset($categories[$product['category']])) continue;

            Product::create([
                'name' => $product['name'],
                'description' => $product['description'],
                'price' => $product['price'],
                'category_id' => $categories[$product['category']],
                'image_url' => $product['image_url'] . '?auto=format&fit=crop&w=400&q=80',
            ]);
        }
    }
}