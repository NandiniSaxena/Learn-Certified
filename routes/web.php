<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Models\Certification;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Admin\CertificationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Public Routes (Accessible by Everyone)
|--------------------------------------------------------------------------
*/

// Home Page
Route::get('/', [HomeController::class, 'index'])->name('home');

// Courses List
Route::get('/all-courses', [HomeController::class, 'allCourses'])->name('all-courses');

// Individual Certification View (Publicly Accessible)
Route::get('/certification/{name}', function ($name) {
    return Inertia::render('User/Certification', [
        'certName' => str_replace('-', ' ', $name),
        'certifications' => Certification::with('subCertifications')->get(),
    ]);
})->name('certification.view');

Route::get('/learn-more', function () {
    return Inertia::render('User/LearnMore');
})->name('learn.more');


/*
|--------------------------------------------------------------------------
| Authentication Routes (Guest Only)
|--------------------------------------------------------------------------
*/

Route::middleware('guest')->group(function () {
    // Registration
    Route::get('/register', [RegisteredUserController::class, 'create'])->name('register');
    Route::post('/register', [RegisteredUserController::class, 'store']);

    // Login
    Route::get('/login', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('/login', [AuthenticatedSessionController::class, 'store']);
});


/*
|--------------------------------------------------------------------------
| Authenticated Routes (Login Required)
|--------------------------------------------------------------------------
*/

Route::middleware('auth')->group(function () {

    // User Dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('User/Dashboard');
    })->name('dashboard');

    // Profile Management
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    /*
    |----------------------------------------------------------------------
    | Admin Specific Routes
    |----------------------------------------------------------------------
    */


    Route::prefix('admin')->group(function () {
        Route::get('/dashboard', [CertificationController::class, 'dashboard'])->name('admin.dashboard');
        // Add this line:
        Route::get('/certifications', [CertificationController::class, 'index'])->name('certifications.index');

        // Your existing routes:
        //Route::get('/dashboard', [CertificationController::class, 'index'])->name('admin.dashboard');
        Route::post('/certifications', [CertificationController::class, 'store'])->name('certifications.store');
        Route::delete('/certifications/{certification}', [CertificationController::class, 'destroy'])->name('certifications.destroy');
        Route::get('/certifications/{certification}/edit', [CertificationController::class, 'edit'])->name('certifications.edit');
        Route::put('/certifications/{certification}', [CertificationController::class, 'update'])->name('certifications.update');
    });

    Route::middleware(['auth', 'verified'])->group(function () {
        Route::get('/users', [UserController::class, 'index'])->name('users.index');
        Route::post('/users', [UserController::class, 'store'])->name('users.store');
        Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
        Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');
    });


    // Logout
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
});

Route::middleware(['auth'])->group(function () {
    // Profile Page
    Route::get('/profile', [CertificationController::class, 'profile_edit'])->name('profile.edit');

    // Update Info (Name/Email)
    Route::patch('/profile', [CertificationController::class, 'profile_update'])->name('profile.update');

    // Update Password
    Route::put('/profile/password', [CertificationController::class, 'updatePassword'])->name('profile.password');

    // Delete Account (Optional but standard)
    Route::delete('/profile', [CertificationController::class, 'destroy'])->name('profile.destroy');



/*
|--------------------------------------------------------------------------
| Dynamic Routing (MUST BE LAST)
|--------------------------------------------------------------------------
*/

// This route captures slugs like /cisco or /microsoft
Route::get('/{slug}', [HomeController::class, 'showCertification'])->name('certification.show');
});
