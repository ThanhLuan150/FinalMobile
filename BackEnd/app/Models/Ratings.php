<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ratings extends Model
{
    use HasFactory;
    protected $fillable=['id_user','id_branch' ,'id_order','rating','comment'];
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user'); 
    }
    public function branch()
    {
        return $this->belongsTo(Branches::class, 'id_branch'); 
    }
    public function order()
    {
        return $this->belongsTo(User::class, 'id_order'); 
    }
}
