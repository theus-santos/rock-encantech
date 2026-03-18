<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Electronics'],
            ['name' => 'Books'],
            ['name' => 'Home'],
            ['name' => 'Clothing'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}