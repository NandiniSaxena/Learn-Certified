<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Users', [
            'users' => User::select('id', 'name', 'email')->get(), // only needed fields
        ]);
    }

    public function store(Request $request)
    {
        $validated =$request->validate([
            'first_name' => 'required|string|max:100',
            'last_name'  => 'required|string|max:100',
            'email'      => 'required|string|lowercase|email|max:255|unique:users',
            'password'   => ['required', Password::min(8)],
            //'role'       => 'required|in:user,admin',
        ]);

        // User::create([
        //     'name'     => trim($request->first_name . ' ' . $request->last_name),
        //     'email'    => $request->email,
        //     'password' => Hash::make($request->password),
        //     //'role'     => $request->role, // if you have role column, otherwise remove
        // ]);

        // return back()->with('success', 'User created successfully.');
        User::create([
        'name' => $validated['first_name'] . ' ' . $validated['last_name'],
        'email' => $validated['email'],
        'password' => Hash::make($validated['password']),
    ]);

    return redirect()->back()->with('success', 'User created successfully!');

    }

    public function update(Request $request, User $user)
    {
        $validated =$request->validate([
            'first_name' => 'required|string|max:100',
            'last_name'  => 'required|string|max:100',
            'email'      => 'required|string|lowercase|email|max:255|unique:users,email,' . $user->id,
            'password'   => ['nullable', Password::min(8)],
            //'role'       => 'required|in:user,admin',
        ]);

        $user->update([
            'name'  => trim($request->first_name . ' ' . $request->last_name),
            'email' => $request->email,
            //'role'  => $request->role,
        ]);

        if (!empty($validated['password'])) {
        $user->update(['password' => Hash::make($validated['password'])]);
        }

        return redirect()->back()->with('success', 'User updated successfully!');
    }

    public function destroy(User $user)
    {
        if (auth()->id() === $user->id) {
            return back()->with('error', 'You cannot delete your own account.');
        }

        $user->delete();

        return back()->with('success', 'User deleted successfully.');
    }
}
