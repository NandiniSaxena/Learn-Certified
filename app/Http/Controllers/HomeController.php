<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Certification;

class HomeController extends Controller
{
    public function index()
    {
        $certifications = Certification::all(); // or limit if too many

        return Inertia::render('User/Home', [
            'certifications' => $certifications,
        ]);
    }

    public function allCourses()
    {
        // For /all-courses – same as home or list more
        return Inertia::render('AllCourses', [
            'certifications' => Certification::all(),
        ]);
    }

    public function showCertification($slug)
    {
        $cert = Certification::where('slug', $slug)->firstOrFail();

        return Inertia::render('User.CertificationShow', [
            'certification' => $cert,
        ]);
    }


        //user dashboard

        public function store(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            // Redirect to /dashboard after successful login
            return redirect()->intended('/dashboard');
        }

        return back()->withErrors(['email' => 'Invalid login details.']);
    }
}
