<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Certification;
use App\Models\SubCertification;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class CertificationController extends Controller
{
    public function index() {
        return Inertia::render('Admin/Dashboard', [
            'certifications' => Certification::with('subCertifications:id,certification_id,name')
                ->latest()
                ->get()
        ]);
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255|unique:certifications,name',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:2048',
            'sub_certs' => 'nullable|array',
            'sub_certs.*' => 'nullable|string|max:255'
        ]);

        return DB::transaction(function () use ($request) {
            $imagePath = null;
            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('certifications', 'public');
            }

            $certification = Certification::create([
                'name' => $request->name,
                'slug' => Str::slug($request->name),
                'description' => $request->description,
                'image' => $imagePath,
            ]);

            if ($request->has('sub_certs')) {
                foreach ($request->sub_certs as $subName) {
                    if (!empty($subName)) {
                        $certification->subCertifications()->create([
                            'name' => $subName,
                            'slug' => Str::slug($subName), // Correctly added here
                        ]);
                    }
                }
            }

            return redirect()->back()->with('success', 'Certification created successfully!');
        });
    }

    public function destroy(Certification $certification) {
        if ($certification->image) {
            Storage::disk('public')->delete($certification->image);
        }

        $certification->delete();
        return redirect()->back()->with('success', 'Certification deleted successfully');
    }

    public function edit(Certification $certification)
    {
        return Inertia::render('Admin/Edit', [
            'certification' => $certification->load('subCertifications')
        ]);
    }

    /**
     * UPDATED: Fixed the Slug issue and added Transactions
     */
    public function update(Request $request, Certification $certification)
    {
        // 1. Validation
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'sub_certs' => 'required|array|min:1',
            'sub_certs.*' => 'required|string|max:255',
        ], [
            'sub_certs.*.required' => 'The track name cannot be empty.',
        ]);

        return DB::transaction(function () use ($request, $certification) {
            // 2. Update Main Certification (and update slug in case name changed)
            $certification->update([
                'name' => $request->name,
                'slug' => Str::slug($request->name),
                'description' => $request->description,
            ]);

            // 3. Sync Sub-Certifications
            // Delete old ones
            $certification->subCertifications()->delete();

            // Re-insert with required SLUG field
            foreach ($request->sub_certs as $subName) {
                if (!empty($subName)) {
                    $certification->subCertifications()->create([
                        'name' => $subName,
                        'slug' => Str::slug($subName), // FIXED: Added slug generation
                    ]);
                }
            }

            return redirect()->route('admin.dashboard')
                ->with('message', 'Certification updated successfully!');
        });
    }






    public function profile_edit(Request $request)
    {
        return Inertia::render('Admin/Profile', [
            'user' => $request->user(),
        ]);
    }

    public function profile_update(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $request->user()->id,
        ]);

        $request->user()->fill($validated);
        $request->user()->save();

        return back()->with('message', 'Profile details updated successfully.');
    }

    public function updatePassword(Request $request)
    {
        $validated = $request->validate([
            'password' => ['required', Password::defaults(), 'confirmed' , 'min:8'],
        ]);

        $request->user()->update([
            'password' => Hash::make($validated['password']),
        ]);

        return back()->with('message', 'Password updated successfully!');
    }


    // public function users()
    // {
    //     // Fetch users (you can add pagination or search logic here later)
    //     $users = User::select('id', 'name', 'email', 'created_at')
    //         ->latest()
    //         ->get();

    //     return Inertia::render('Admin/Users', [
    //         'users' => $users
    //     ]);
    // }


    public function dashboard()
    {
        return Inertia::render('Admin/Overview', [
            'totalUserCount' => User::count(),
            'recentCertifications' => Certification::with('subCertifications')
                ->latest()
                ->take(5)
                ->get(),
            'stats' => [
                [
                    'label' => 'Total Users',
                    'value' => User::count(),
                    'icon' => 'Users',
                    'color' => 'bg-blue-500',
                    'shadow' => 'shadow-blue-200'
                ],
                [
                    'label' => 'Vendors',
                    'value' => Certification::count(),
                    'icon' => 'Briefcase',
                    'color' => 'bg-purple-500',
                    'shadow' => 'shadow-purple-200'
                ],
                [
                    'label' => 'Total Sub-Certs',
                    'value' => SubCertification::count(),
                    'icon' => 'Award',
                    'color' => 'bg-emerald-500',
                    'shadow' => 'shadow-emerald-200'
                ],
            ]
        ]);
    }
}
