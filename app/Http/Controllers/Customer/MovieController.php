<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MovieController extends Controller
{
    public function player(Movie $movie) {
        return Inertia::render('Customer/Player', [
            'movie' => $movie
        ]);
    }
}
