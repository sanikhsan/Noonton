<?php

use App\Http\Controllers\Customer\DashboardController as CustomerDashboard;
use App\Http\Controllers\Customer\MovieController;
use App\Http\Controllers\Customer\SubscriptionPlanController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Customer Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

route::prefix('dashboard')->middleware(['auth', 'role:CUSTOMER'])->name('customer.dashboard.')->group(function () {
    // Home Dashboard or Movie List
    Route::get('/', [CustomerDashboard::class, 'index'])->name('index');

    // Movie Player
    Route::get('/player/{movie:slug}', [MovieController::class, 'player'])->name('player');

    // Show Subscription Plan
    Route::get('/subscription-plan', [SubscriptionPlanController::class, 'plan'])->name('subscription');

    // Select Subscription Plan
    Route::post('/subscription-plan/{subscriptionPlan}/subscribe', [SubscriptionPlanController::class, 'selectPlan'])->name('subscribePlan');
});