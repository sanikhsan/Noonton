<?php

use App\Http\Controllers\Customer\DashboardController as CustomerDashboard;
use App\Http\Controllers\Customer\MovieController;
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
    Route::get('/', [CustomerDashboard::class, 'index'])->name('index');
    Route::get('/player/{movie:slug}', [MovieController::class, 'player'])->name('player');
});