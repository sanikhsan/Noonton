<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index() {
        return Inertia::render('Customer/Dashboard', [
            'featuredMovies' => Movie::whereIsFeatured(true)->get(),
            'movies' => Movie::all()
        ]);
    }
}
