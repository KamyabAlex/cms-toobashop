<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
  public function index()
  {
    $categories = Category::select('id', 'name', 'parent_id')->get();
    return Inertia::render('Categories/Index', compact('categories'));
  }

  public function mainCategoryStore(Request $request)
  {
    $request->validate([
      'name' => 'required|unique:categories|max:140',
      'slug' => 'required|unique:categories',
    ]);

    Category::create([
      'name' => trim($request->name),
      'slug' => Str::slug($request->slug),
    ]);

    return back()->with(['message' => 'دسته بندی اصلی با موفقیت وارد شد.']);
  }

  public function subCategoryStore(Request $request)
  {
    $request->validate([
      'category' => 'required',
      'subName' => 'required',
      'slug' => 'required|unique:categories',
    ]);

    Category::create([
      'name' => trim($request->subName),
      'slug' => Str::slug($request->slug),
      'parent_id' => $request->category,
    ]);

    return back()->with(['message' => 'زیر دسته بندی را با موفقیت وارد شد.']);
  }
}
