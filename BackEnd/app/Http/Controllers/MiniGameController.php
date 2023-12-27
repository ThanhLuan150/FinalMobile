<?php

namespace App\Http\Controllers;

use App\Models\MiniGames;
use Illuminate\Http\Request;

class MiniGameController extends Controller
{
    public function miniGame(){
        $minigame = MiniGames::all();
        return response()->json($minigame);
    }
}
