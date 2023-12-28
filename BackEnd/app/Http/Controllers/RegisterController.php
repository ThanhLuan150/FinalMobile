<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
class RegisterController extends Controller
{
    public function getUser(){
        $user= User::all();
        return response() ->json($user);
    }

    public function register(Request $request){
        $user = new User();
        $user-> username = $request->input('username');
        $user-> phone = $request->input('phone');
        $user-> email  = $request->input('email');
        $user-> password = Hash::make($request->input('password'));
        $user->save();
        
        VerifyAccountController::sendEmailConfirmAccount($user, VerifyAccountController::generateOtp());
        return response()->json([
            'message' => 'User created successfully',
            'user' => $user,
            'additional_info' => $this->commonResponse($user, 'sent otp'),
        ], 201);


    }
    
}
