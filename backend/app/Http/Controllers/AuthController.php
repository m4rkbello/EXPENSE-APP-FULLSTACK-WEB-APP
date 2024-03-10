<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use App\Mail\ForgotPasswordMail;
use App\Models\User;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;


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

        if (!$user || !Hash::check($data['password'], $user->password)) {
            return response([
                'success' => false,
                'status' => '401',
                'message' => 'email or password is incorrect!'
            ], 401);
        }
        ;

        $token = $user->createToken('m4rkbellofullstack')->plainTextToken;

        $response = [
            'success' => true,
            'message' => 'Email and Password is correct!',
            'user' => $user,
            'token' => $token
        ];

        return response($response, 200);
    }


    public function logout(Request $request)
    {
        Auth::user()->currentAccessToken()->delete();
        return [
            "success" => true,
            "message" => 'Logout successfully!'
        ];
    }

    public function resetPassword(Request $request)
    {
        $request->validate(['email' => 'required|email']);
    
        $user = User::where('email', $request->email)->first();
    
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
    
        $token = Str::random(60);
    
        DB::table('password_reset_tokens')->updateOrInsert(
            ['email' => $user->email],
            ['token' => $token, 'created_at' => Carbon::now()]
        );

        // Send the email with the reset password link
        $mailSent = Mail::to($user->email)->send(new ForgotPasswordMail($token));
    
        if ($mailSent) {
            return response()->json(['message' => 'Reset password email sent'], 200);
        } else {
            return response()->json(['message' => 'Failed to send reset password email'], 500);
        }
    }

    public function index(){

        $users = User::all();
        $personal_access_token = DB::table('personal_access_tokens')->get();

        $response = [
            "success" => true,
            "message" => 'All data of users and personal_access_token',
            "users" => $users,
            "personal_access_token" => $personal_access_token
        ];

        return response($response, 200);

    }
    
}
