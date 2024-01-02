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

    public  function verifyOtp(OtpRequest $otpRequest){
        $user = User::firstWhere('email', $otpRequest->email);
        if($user['verify']){
            return $this->commonResponse($user,'User existed','500');
        }

        if (Cache::get(self::OTP_PREFIX. $user->id) == $otpRequest->otp){
            User::where('email', $otpRequest->email)
                ->update([
                    'verify'=>1
                ]);
            Cache::forever(self::OTP_PREFIX,$user->id);
            return $this->commonResponse($user,'verify successfully','200');
        }

        return $this->commonResponse([],'Your otp is wrong or  has been expired',401);
    }
}
