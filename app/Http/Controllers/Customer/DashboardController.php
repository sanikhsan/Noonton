<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use App\Models\UserSubscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index() {
        return Inertia::render('Customer/Dashboard', [
            'featuredMovies' => Movie::whereIsFeatured(true)->get(),
            'movies' => Movie::all()
        ]);
    }

    public function history() {
        return Inertia::render('Customer/Transaction', [
            'userSubscriptions' => UserSubscription::with('subscriptionPlan:id,name')->where('user_id', Auth::user()->id)->get()
        ]);
    }
}
