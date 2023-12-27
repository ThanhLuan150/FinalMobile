<?php

namespace App\Http\Controllers;

use App\Models\Branches;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BranchController extends Controller
{
    public function index(){
        $branch = Branches::all();
        return response()->json($branch);
    }
    
    public function DetailsBranch( $id_branch) {
        $branchDetail = DB::table('branches')
            ->join('ratings', function ($join) use ($id_branch) {
                $join->on('branches.id_branch', '=', 'ratings.id_branch')
                    ->where('branches.id_branch', '=', $id_branch);
            })
            ->join('users', 'users.id_user', '=', 'ratings.id_user')
            ->join('orders', function ($join) use ($id_branch) {
                $join->on('orders.id_order', '=', 'ratings.id_order')
                    ->where('branches.id_branch', '=', $id_branch);
            })
            ->select(
                'branches.id_branch', 'branches.name', 'branches.address', 'branches.location', 'branches.machineisempty', 'branches.created_at', 'branches.updated_at',
                'ratings.id_rating', 'ratings.rating', 'ratings.comment',
                'users.id_user', 'users.username', 'users.phone', 'users.email', 'users.password', 'users.verify', 'users.role',
                'orders.id_order', 'orders.id_service', 'orders.id_typeoflaundries', 'orders.id_transports', 'orders.id_washingliquids', 'orders.id_fabricsofteners', 'orders.id_extraservices', 'orders.id_voucher', 'orders.delivery_time', 'orders.note', 'orders.total_price'
            )
            ->where('branches.id_branch', '=', $id_branch)
            ->get();
            
        $formattedData = $branchDetail->map(function ($item) {
            return [
                'id_branch' => $item->id_branch,
                'name' => $item->name,
                'address' => $item->address,
                'location' => $item->location,
                'machineisempty' => $item->machineisempty,
                'created_at' => $item->created_at,
                'updated_at' => $item->updated_at,
                'rating' => [
                    'id_rating' => $item->id_rating,
                    'rating' => $item->rating,
                    'comment' => $item->comment,
                    'user' => [
                        'id_user' => $item->id_user,
                        'username' => $item->username,
                        'phone' => $item->phone,
                        'email' => $item->email,
                        'password' => $item->password,
                        'verify' => $item->verify,
                        'role' => $item->role,
                    ],
                    'order' => [
                        'id_order' => $item->id_order,
                        'service' => DB::table('service')->where('id_service', $item->id_service)->first(),
                        'typeoflaundries' => DB::table('typeoflaundries')->where('id_typeoflaundries', $item->id_typeoflaundries)->first(),
                        'transports' => DB::table('transports')->where('id_transports', $item->id_transports)->first(),
                        'washingliquids' => DB::table('washingliquids')->where('id_washingliquids', $item->id_washingliquids)->first(),
                        'fabricsofteners' => DB::table('fabricsofteners')->where('id_fabricsofteners', $item->id_fabricsofteners)->first(),
                        'extraservices' => DB::table('extraservices')->where('id_extraservices', $item->id_extraservices)->first(),
                        'voucher' => DB::table('vouchers')->where('id_voucher', $item->id_voucher)->first(),
                        'delivery_time' => $item->delivery_time,
                        'note' => $item->note,
                        'total_price' => $item->total_price,
                    ],
                ],
            ];
        });
    
        return response()->json(['detailBranch' => $formattedData], 200);
    }
    
}