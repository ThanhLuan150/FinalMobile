<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Models\Notifications;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function notification(){
        $notification = Notifications::all();
        return response() ->json($notification);
    }
    public function getUserNotification($id_user)
{
    $notification = DB::table('notifications')
    ->join('users', 'users.id_user', '=', 'notifications.id_user')
    ->join('orders', 'orders.id_order', '=', 'notifications.id_order')
    ->select('users.*','notifications.*','orders.*')
    ->where('users.id_user','=',$id_user)
    ->get();

    return response()->json(['notification' =>  $notification], 200);
}

}
