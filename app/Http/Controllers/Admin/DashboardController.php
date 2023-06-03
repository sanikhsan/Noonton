<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\UserSubscription;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index () {
        return Inertia::render('Admin/Dashboard', [
            'userSubscriptions' => UserSubscription::with(['User:id,name', 'subscriptionPlan:id,name'])->latest()->get()
        ]);
    }
}
