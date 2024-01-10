<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notifications extends Model
{
    use HasFactory;
    protected $fillable=['id_user','content','id_order'];
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user'); 
    }
    public function order()
    {
        return $this->belongsTo(Order::class, 'id_order'); 
    }
}
