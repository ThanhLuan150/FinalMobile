<?php

namespace App\Http\Controllers;

use App\Http\Requests\OtpRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;
class VerifyAccountController extends Controller
{
    const OTP_PREFIX = 'OTP_CODE_';
    public static  function sendEmailConfirmAccount(User $user, int $otp)
    {
        $expiredAt = Carbon::now()->addMinutes(5);
        Cache::put(self::OTP_PREFIX. $user->id, $otp, $expiredAt);

        $otpMail = new OTPMail($user,$otp);
        Mail::to($user->phone)->send($otpMail);

    }

    public static function generateOtp(): int{
        return rand(100000,999999);
    }

    public  function verifyOtp(OtpRequest $otpRequest){
        $user = User::firstWhere('phone', $otpRequest->email);
        if($user['verify']){
            return $this->commonResponse($user,'User existed','500');
        }

        if (Cache::get(self::OTP_PREFIX. $user->id_user) == $otpRequest->otp){
            User::where('phone', $otpRequest->phone)
                ->update([
                    'verify'=>1
                ]);
            Cache::forever(self::OTP_PREFIX,$user->id);
            return $this->commonResponse($user,'verify successfully','200');
        }

        return $this->commonResponse([],'Your otp is wrong or  has been expired',401);
    }
}
