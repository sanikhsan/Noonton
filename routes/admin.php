<?php

use App\Http\Controllers\Admin\DashboardController as AdminController;
use App\Http\Controllers\Admin\MovieController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Admin Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('admin')->middleware(['auth', 'role:ADMIN'])->name('admin.')->group(function() {
    Route::get('dashboard', [AdminController::class, 'index'])->name('dashboard.index');
    Route::put('movie/{movie}/restore', [MovieController::class , 'restore'])->name('movie.restore');
    Route::resource('movie', MovieController::class);
});