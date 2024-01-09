<?php

namespace App\Models;

use App\Events\OrderCreated;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
class Order extends Model
{
    use HasFactory;
    protected $fillable=['id_user','id_branch','id_service','id_typeoflaundries','	id_transports','id_washingliquids ','	id_fabricsofteners','id_extraservices ','	id_voucher','delivery_time','address','note','total_price'];
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user'); 
    }
    public function branch()
    {
        return $this->belongsTo(Branches::class, 'id_branch'); 
    }
    public function service()
    {
        return $this->belongsTo(service::class, 'id_service'); 
    }
    public function typeoflaundries()
    {
        return $this->belongsTo(typeoflaundry::class, 'id_typeoflaundries'); 
    }
    public function transports()
    {
        return $this->belongsTo(transport::class, 'id_transports'); 
    }
    public function washingliquids()
    {
        return $this->belongsTo(Washingliquid::class, 'id_washingliquids'); 
    }
    public function fabricsofteners()
    {
        return $this->belongsTo(Fabricsoftener::class, 'id_fabricsofteners'); 
    }
    public function extraservices ()
    {
        return $this->belongsTo(Extraservice::class, 'id_extraservices '); 
    }
    public function voucher ()
    {
        return $this->belongsTo(Voucher::class, 'id_evoucher '); 
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
        event(new OrderCreated($order));
    
        return response()->json(['message' => 'Order created successfully', 'data' => $order], 201);
    }
}
