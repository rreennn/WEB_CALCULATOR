<?php

use App\Http\Controllers\AllController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [AllController::class, 'index'])->name('index');
Route::get('/math-calc', [AllController::class, 'math_calc'])->name('math-calc');
Route::get('/bmi-calc', [AllController::class, 'bmi_calc'])->name('bmi-calc');
Route::get('/age-calc', [AllController::class, 'age_calc'])->name('age-calc');

Route::post('/store', [FeedbackController::class, 'store'])->name('store');
Route::get('/dashboard', [FeedbackController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/dasboard/my-feedback/{email}', [FeedbackController::class, 'show'])->name('my-feedback');
Route::post('/update/{id}', [FeedbackController::class, 'update'])->name('update');
Route::post('/post/{id}', [FeedbackController::class, 'edit'])->name('edit');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
