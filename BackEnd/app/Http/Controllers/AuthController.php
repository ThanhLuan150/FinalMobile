<?php
namespace App\Http\Controllers;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $registerRequest)
    {
        $registerRequest->validate([
            'username' => 'required|string|username|max:100',
            'phone' => 'required|string|min:10|max:255',
            'email' => 'required|string|email|min:10|max:255|unique:users',
            'password' => 'required|string|min:10|max:255',    
        ], [
            'username.required' => 'The username field is required.',
            'username.string' => 'The username must be a string.',
            'username.username' => 'Please enter a valid username.',
            'username.max' => 'The username may not be greater than 100 characters.',
            'username.unique' => 'The username has already been taken.',
            'phone.required' => 'The phone field is required.',
            'phone.string' => 'The phone must be a string.',
            'phone.min' => 'The phone must be at least 10 characters.',
            'phone.max' => 'The phone may not be greater than 255 characters.',
            'email.required' => 'The email field is required.',
            'email.string' => 'The email must be a string.',
            'email.email' => 'Please enter a valid email address.',
            'email.min' => 'The email must be at least 10 characters.',
            'email.max' => 'The email may not be greater than 255 characters.',
            'email.unique' => 'The email address is already taken.',
            'password.required' => 'The password field is required.',
            'password.string' => 'The password must be a string.',
            'password.min' => 'The password must be at least 10 characters.',
            'password.max' => 'The password may not be greater than 255 characters.',
        ]);
        $user = new User([
            'username'=> $registerRequest-> username,
            'phone'=>$registerRequest ->phone,
            'email'=>$registerRequest ->email,
            'password'=> Hash::make($registerRequest->password),

        ]);

        $user->save();
        // Gửi email xác nhận và tạo OTP tại đây
        VerifyAccountController::sendEmailConfirmAccount($user, VerifyAccountController::generateOtp()); 
        return response()->json([
            'message' => 'User created successfully',
            'user' => $user,
            'additional_info' => $this->commonResponse($user, 'sent otp'),
        ], 201);
    }
}
