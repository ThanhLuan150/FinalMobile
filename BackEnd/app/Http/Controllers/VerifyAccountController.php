<?php

namespace App\Http\Controllers;

use App\Http\Requests\OtpRequest;
use App\Mail\OTPMail;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;
class VerifyAccountController extends Controller
{
    const OTP_PREFIX = 'OTP_CODE_';
    private function commonResponse($data, $message, $statusCode)
    {
        return response()->json([
            'data' => $data,
            'message' => $message,
        ], $statusCode);
    }
    public static  function sendEmailConfirmAccount(User $user, int $otp)
    {
        $expiredAt = Carbon::now()->addMinutes(5);
        Cache::put(self::OTP_PREFIX. $user->id_user, $otp, $expiredAt);

        $otpMail = new OTPMail($user,$otp);
        Mail::to($user->email)->send($otpMail);

    }

    public static function generateOtp(): int{
        return rand(100000,999999);
    }

    public function verifyOtp(OtpRequest $otpRequest)
    {
        $user = User::firstWhere('email', $otpRequest->email);
    
        if (!$user) {
            return $this->commonResponse([], 'User not found', 404);
        }
    
        if ($user->verify) {
            return $this->commonResponse($user, 'User already existed', 500);
        }
    
        if (Cache::get(self::OTP_PREFIX . $user->id_user) == $otpRequest->otp) {
            $user->verify = 1; // Update the verify status
            $user->save(); // Save the updated user
    
            Cache::forget(self::OTP_PREFIX . $user->id_user);
    
            return $this->commonResponse($user, 'Verification successful', 200);
        }
    
        return $this->commonResponse([], 'Your OTP is incorrect or has expired', 401);
    }
}
