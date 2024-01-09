<?php

namespace App\Http\Controllers;

use App\Events\OrderCreated;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class OrderController extends Controller
{
    public function order(){
        $order = Order::all();
        return response()->json($order);
    }
    public function createOrder(Request $request)
    {
        $order = new Order;
        $order->id_user = $request->input('id_user');
        $order->id_branch = $request->input('id_branch');
        $order->id_service = $request->input('id_service');
        $order->id_typeoflaundries = $request->input('id_typeoflaundries');
        $order->id_transports = $request->input('id_transports');
        $order->id_washingliquids = $request->input('id_washingliquids');
        $order->id_fabricsofteners = $request->input('id_fabricsofteners');
        $order->id_extraservices = $request->input('id_extraservices');
        $order->id_voucher = $request->input('id_voucher');
        $order->delivery_time = $request->input('delivery_time');
        $order->address = $request->input('address');
        $order->note = $request->input('note');
        $order->total_price = $request->input('total_price');
        $order->save();
        event(new OrderCreated($order->id_order));
    
        return response()->json(['message' => 'Order created successfully', 'data' => $order], 201);
    }
    public function viewOrderDetails($id_order)
    {
        $orderDetail = DB::table('orders')
            ->join('users', 'users.id_user', '=', 'orders.id_user')
            ->join('service', 'service.id_service', '=', 'orders.id_service')
            ->join('typeoflaundries', 'typeoflaundries.id_typeoflaundries', '=', 'orders.id_typeoflaundries')
            ->join('transports', 'transports.id_transports', '=', 'orders.id_transports')
            ->join('washingliquids', 'washingliquids.id_washingliquids', '=', 'orders.id_washingliquids')
            ->join('fabricsofteners', 'fabricsofteners.id_fabricsofteners', '=', 'orders.id_fabricsofteners')
            ->join('extraservices', 'extraservices.id_extraservices', '=', 'orders.id_extraservices')
            ->join('vouchers', 'vouchers.id_voucher', '=', 'orders.id_voucher')
            ->join('branches', 'branches.id_branch', '=', 'orders.id_branch')
            ->select(
                'orders.*', 'users.*', 'service.*', 'typeoflaundries.*', 'transports.*', 'washingliquids.*', 'fabricsofteners.*', 'extraservices.*', 'vouchers.*', 'branches.*'
            )
            ->where('orders.id_order', '=', $id_order)
            ->first();
    
        $formattedData = [
            'id_order' => $orderDetail->id_order,
            'user' => [
                'id_user' => $orderDetail->id_user,
                'username' => $orderDetail->username,
                'phone' => $orderDetail->phone,
                'email' => $orderDetail->email,
                'password' => $orderDetail->password,
                'verify' => $orderDetail->verify,
                'role' => $orderDetail->role,
            ],
            'service' => [
                'id_service' => $orderDetail->id_service,
                'image_service' => $orderDetail->image_service,
                'name_service' => $orderDetail->name_service,   
            ],
            'typeoflaundries' => [
                'id_typeoflaundries' => $orderDetail->id_typeoflaundries,
                'name_typeoflaundries' => $orderDetail->name_typeoflaundries,
                'price' => $orderDetail->price,
                'quatity' => $orderDetail->quatity,
            ],
            'transports' => [
                'id_transports' => $orderDetail->id_transports,
                'nametransport' => $orderDetail->nametransport,
            ],
            'washingliquids' => [
                'id_washingliquids' => $orderDetail->id_washingliquids,
                'namewashingliquids' => $orderDetail->namewashingliquids,
            ],
            'fabricsofteners' => [
                'id_fabricsofteners' => $orderDetail->id_fabricsofteners,
                'namewfabricsofteners	' => $orderDetail->namewfabricsofteners	,
            ],
            'extraservices' => [
                'id_extraservices' => $orderDetail->id_extraservices,
                'nameextraservices' => $orderDetail->nameextraservices,
                'quatity' => $orderDetail->quatity,
            ],
            'vouchers' => [
                'id_voucher' => $orderDetail->id_voucher,
                'name_voucher' => $orderDetail->name_voucher,
                'code' => $orderDetail->code,
                'discount_amount' => $orderDetail->discount_amount,
                'start_date' => $orderDetail->start_date,
                'end_date' => $orderDetail->end_date,
            ],
            'branch' => [
                'id_branch' => $orderDetail->id_branch,
                'name' => $orderDetail->name,
                'address' =>$orderDetail->address,
                'location' =>$orderDetail->location,
                'machineisempty' =>$orderDetail->machineisempty,
                'created_at' =>$orderDetail->created_at,
                'updated_at' => $orderDetail->updated_at,
            ],
        ];
    
        return response()->json($formattedData, 200);
    }
}
