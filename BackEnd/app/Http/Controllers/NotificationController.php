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

}
