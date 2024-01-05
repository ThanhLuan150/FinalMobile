<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Exception;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\JWTException;
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
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = JWTAuth::fromUser($user);
            $role = $user->role; // Lấy vai trò của người dùng

            return response()->json([
                'message' => 'Login successful',
                'token' => $token,
                'user' => $user,
                'role' => $role // Trả về vai trò trong phản hồi
            ]);
        }

        return response()->json([
            'message' => 'Invalid email or password',
        ], 401);
    }
    public function getCurrentUserId()
    {
        try {
            $token = JWTAuth::parseToken();
            $user = $token->authenticate();
            
            if ($user) {
                return response()->json([
                    'user' => $user
                ]);
            }
            return response()->json([
                'error' => 'User not found'
            ], 404);
        } catch (TokenExpiredException $e) {
            return response()->json([
                'error' => 'Token expired'
            ], 401);
        } catch (TokenInvalidException $e) {
            return response()->json([
                'error' => 'Invalid token'
            ], 401);
        } catch (JWTException $e) {
            return response()->json([
                'error' => 'JWT exception'
            ], 500);
        }
    }

    public function checkEmail(Request $request)
    {
        $email = $request->input('email');

        $user = User::where('email', $email)->first();

        return response()->json([
            'exists' => $user ? true : false,
        ]);
    }

    public function logout(Request $request)
    {
        $user = $request->user(); // Lấy thông tin người dùng từ request
        $user->tokens()->delete(); // Xóa tất cả token của người dùng
        return response()->json([
            'message' => 'Logged out successfully',
        ], 200);
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
