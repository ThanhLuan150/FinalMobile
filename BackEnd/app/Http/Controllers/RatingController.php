<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Models\Ratings;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    public function index(){
        $rating = Ratings::all();
        return response() ->json($rating);
    }

    public function store(Request $request)
    {
        $rating = new Ratings;
        $rating->id_user = $request->input('id_user');
        $rating->id_branch = $request->input('id_branch');
        $rating->id_order = $request->input('id_order');
        $rating->rating = $request->input('rating');
        $rating->comment = $request->input('comment');
        $rating->save();
        return response()->json(['message' => 'Rating created successfully', 'data' =>   $rating], 201);
    }
    public function getUserRating($id_user)
{
    $ratings = DB::table('ratings')
    ->join('users', 'users.id_user', '=', 'ratings.id_user')
    ->join('branches', 'branches.id_branch', '=', 'ratings.id_user')
    ->join('orders', 'orders.id_order', '=', 'ratings.id_order')
    ->select('users.*','ratings.*','orders.*')
    ->where('users.id_user','=',$id_user)
    ->get();

    return response()->json(['ratings' => $ratings], 200);
}
}
