<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Http\Resources\CategoryCollection;
use App\Services\CategoryService;

class CategoryController extends ResourceCollection
{
    public function __construct(
        private CategoryService $categoryService
    ) {}

    public function index(): CategoryCollection
    {
        $categories = $this->categoryService->listCategories();

        return new CategoryCollection($categories);
    }
}