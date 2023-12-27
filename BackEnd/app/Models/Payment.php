<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $fillable=['id_order','id_user','partnerCode','orderId','requestId','amount','orderInfo','orderType','transId'];
    public function order()
    {
        return $this->belongsTo(Order::class, 'id_order'); 
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user'); 
    }
}
