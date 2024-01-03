<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{

    public function getUser()
    {
        $user = User::all();
        return response()->json($user);
    }
    private function commonResponse($user, $message)
    {
        return [
            'user_id' => $user->id,
            'message' => $message,
        ];
    }
    public function register(Request $request)
    {
        $user = new User();
        $user->username = $request->input('username');
        $user->phone = $request->input('phone');
        $user->email  = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();

        VerifyAccountController::sendEmailConfirmAccount($user, VerifyAccountController::generateOtp());
        return response()->json([
            'message' => 'User created successfully',
            'user' => $user,
            'additional_info' => $this->commonResponse($user, 'sent otp'),
        ], 201);
    }
    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');
        $user = User::where('email', $email)->first();
        if (!$user || !Hash::check($password, $user->password)) {
            return response()->json([
                'message' => 'Invalid email or password',
                'user' => $user
            ], 401);
        }
        $token = $user->createToken('API Token')->plainTextToken;
        $user_id = $user;
        if ($user->role) {
            return response()->json([
                'message' => 'Login user successfully',
                'token' => $token,
                'id_user' => $user_id,
                'role' => 1
            ]);
        }

        return response()->json([
            'message' => 'Login branch successfully',
            'token' => $token,
            'id_user' => $user_id,
            'role' => 0
        ]);
    }
    public function checkEmail(Request $request)
    {
        $email = $request->input('email');

        $user = User::where('email', $email)->first();

        return response()->json([
            'exists' => $user ? true : false,
        ]);
    }
    public function updateUser(Request $request, $id_user)
    {
        $user = User::find($id_user);
        if (!$user) {
            return response()->json([
                'message' => 'User not found',
            ], 404);
        }
        $user = User::find($id_user);
        $user->username = $request->input('username');
        $user->phone = $request->input('phone');
        $user->email = $request->input('email');
        $password = $request->input('password');
        if ($password) {
            // Hash the password before saving
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            $user->password = $hashedPassword;
        }
        $user->save();

        return response()->json([
            'message' => 'User updated successfully',
            'user' => $user,
        ], 200);
    }

    public function deleteUser($id_user)
    {
        $user = User::find($id_user);
        if (!$user) {
            return response()->json([
                'message' => 'User not found',
            ], 404);
        }

        $user->delete();

        return response()->json([
            'message' => 'User deleted successfully',
        ], 200);
    }
}
