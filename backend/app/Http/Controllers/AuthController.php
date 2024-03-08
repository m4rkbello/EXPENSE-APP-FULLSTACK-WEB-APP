<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed'
        ]);

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        $token = $user->createToken('m4rkbellofullstack')->plainTextToken;
        $response = [
            'success' => true,
            'message' => 'User has new token!',
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $data['email'])->first();

        if(!$user || !Hash::check($data['password'], $user->password))
        {
            return response([
                'success' => false,
                'status' => '401',
                'message' => 'email or password is incorrect!'
            ], 401);
        };

        $token = $user->createToken('m4rkbellofullstack')->plainTextToken;

        $response = [
            'success' => true,
            'message' => 'Email and Password is correct!',
            'user' => $user,
            'token' => $token
        ];

        return response($response, 200);
    }

    // public function logout(Request $request)
    // {
    //     auth()->user()->token()->delete();
    //     return [
    //         "message" => 'Logout successfully!'
    //     ];
    // }

    public function logout(Request $request)
{
    Auth::user()->currentAccessToken()->delete();
    return [
        "success" => true,
        "message" => 'Logout successfully!'
    ];
}

public function ResetPassword(Request $request){
    $request->validate([
        'email' => 'require|email'
    ]);

    $user = User::where('email', $request->email)->first();

    if(!$user){
        return response()->json([
            'success' => false,
            'message' => 'User not found!'
        ], 404);

    $token = Str::random(60);

    DB::table('password_resets')->updateOrInsert(
        ['email' => $user->email],
        ['email' => $user->email, 'token' => Hash::make($token), 'created_at' => now()]
    );

    Mail::to($user->email)->send(new ResetPasswordMail($token));

    return response()->json([
        'success' => true,
        'message' => 'Password reset link sent to your email'
    ]);

    
    }
}
   
}
