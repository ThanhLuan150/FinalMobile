<?php

namespace App\Http\Controllers;

use App\Models\service;
use App\Models\Washingliquid;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class ServiceController extends Controller
{   
    public function index(){
        $service = service::all();
        return response()->json($service);
    }
    public function Service($id_branch){
        $services = DB::table('service')
            ->join('branches', 'service.id_branch', '=', 'branches.id_branch')
            ->select('branches.*','service.*')
            ->where('branches.id_branch', $id_branch)
            ->get();
        
            return response()->json(['services' =>   $services], 200);
    }

    public function Typeoflaundries($id_branch){
        $typeoflaundries = DB::table('typeoflaundries')
            ->join('branches', 'typeoflaundries.id_branch', '=', 'branches.id_branch')
            ->select('branches.*','typeoflaundries.*')
            ->where('branches.id_branch', $id_branch)
            ->get();
            return response()->json(['typeoflaundries' => $typeoflaundries ], 200);
    }

    public function Washingliquids($id_branch){
        $washingliquids = DB::table('washingliquids')
            ->join('branches', 'washingliquids.id_branch', '=', 'branches.id_branch')
            ->select('branches.*','washingliquids.*')
            ->where('branches.id_branch', $id_branch)
            ->get();
            return response()->json(['washingliquids' =>  $washingliquids], 200);
    }

    public function Fabricsofteners($id_branch){
        $fabricsofteners = DB::table('fabricsofteners')
            ->join('branches', 'fabricsofteners.id_branch', '=', 'branches.id_branch')
            ->select('branches.*','fabricsofteners.*')
            ->where('branches.id_branch', $id_branch)
            ->get();
            return response()->json(['fabricsofteners' =>   $fabricsofteners], 200);
    }
    public function Extraservices($id_branch){
        $extraservices = DB::table('extraservices')
            ->join('branches', 'extraservices.id_branch', '=', 'branches.id_branch')
            ->select('branches.*','extraservices.*')
            ->where('branches.id_branch', $id_branch)
            ->get();
            return response()->json(['extraservices' =>  $extraservices], 200);
    }

}
