<?php

namespace App\Http\Controllers;

use App\Models\Voucher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class VoucherController extends Controller
{
    public function Vouchers($id_branch){
        $vouchers = DB::table('vouchers')
            ->join('branches', 'vouchers.id_branch', '=', 'branches.id_branch')
            ->select('branches.*','vouchers.*')
            ->where('branches.id_branch', $id_branch)
            ->get();
            return response()->json(['vouchers' => $vouchers], 200);
    }
    public function Voucher(){
        $voucher =Voucher::all();
        return response() ->json($voucher,200);
    }

}
