<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\MiniGameController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\VerifyAccountController;
use App\Http\Controllers\VoucherController;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//Api Branch
Route::get('/branch', [BranchController::class,'index']);
//API DetailBranch
Route::get('/detailBranch/{id_branch}',[BranchController::class,'DetailsBranch']);
//API Service 
Route::get('/service',[ServiceController::class,'index']);
//API Service trong Branch đó.
Route::get('/Service/{id_branch}',[ServiceController::class,'Service']);
//API  Typeoflaundries trong Branch đó.
Route::get('/Typeoflaundries/{id_branch}',[ServiceController::class,'Typeoflaundries']);
//API  Washingliquids trong Branch đó.
Route::get('/washingliquids/{id_branch}',[ServiceController::class,'Washingliquids']);
//API   Fabricsoftener trong Branch đó.
Route::get('/Fabricsofteners/{id_branch}',[ServiceController::class,'Fabricsofteners']);
//API  Extraservices trong Branch đó.
Route::get('/Extraservices/{id_branch}',[ServiceController::class,'Extraservices']);
//API  Vouchers trong Branch đó.
Route::get('/Vouchers/{id_branch}',[VoucherController::class,'Vouchers']);
//API Voucher 
Route::get('/Voucher',[VoucherController::class,'Voucher']);
//API MiniGame 
Route::get('/minigame',[MiniGameController::class,'miniGame']);
//API User
Route::get('/user',[RegisterController::class,'getUser']);
Route::post('/Register',[RegisterController::class,'register']);
//API Post Verify Account
Route::post('/Verify',[VerifyAccountController::class,'verifyOtp']);
//API Login
Route::post('/Login',[RegisterController::class,'login']);
//API checkmail có tồn tại hay chưa
Route::get('/check-email',[RegisterController::class,'checkEmail']);
//api check token để get id_user
Route::get('/userprofile', [RegisterController::class, 'getCurrentUserId']);
//API sửa user 
Route::put('/userr/{id_user}', [RegisterController::class, 'updateUser']);
//API xóa user
Route::delete('/userss/{id_user}', [RegisterController::class, 'deleteUser']);
//API show danh sách order
Route::get('/order',[OrderController::class,'order']);
Route::post('/orders',[Order::class,'createOrder']);
Route::get('/OrderDetails/{id_order}',[OrderController::class,'viewOrderDetails']);
//API Notification 
Route::get('/Notification',[NotificationController::class,'notification']);
Route::get('/notification/{id_user}',[NotificationController::class,'getUserNotification']);
//API Rating
Route::get('/rating',[RatingController::class,'index']);
Route::post('/ratings',[RatingController::class,'store']);
Route::get('ratingss/{id_user}',[RatingController::class,'getUserRating']);
