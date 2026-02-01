<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Certification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index()
    {
        // Eager load subCertifications so they are available in the frontend dropdowns
        $certifications = Certification::with('subCertifications')->get();

        return Inertia::render('User/Home', [
            'certifications' => $certifications,
        ]);
    }

    public function allCourses()
    {
        return Inertia::render('AllCourses', [
            'certifications' => Certification::with('subCertifications')->get(),
        ]);
    }

    public function showCertification($slug)
    {
        $cert = Certification::with('subCertifications')->where('slug', $slug)->firstOrFail();

        return Inertia::render('User/CertificationShow', [
            'certification' => $cert,
        ]);
    }

    /**
     * Handle authentication for the user dashboard.
     */
    public function store(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            // Logic for admin vs user redirect
            if (Auth::user()->email === 'admin@gmail.com') {
                return redirect()->route('admin.dashboard');
            }

            return redirect()->intended('/dashboard');
        }

        return back()->withErrors(['email' => 'Invalid login details.']);
    }
}
