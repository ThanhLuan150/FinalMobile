<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chats extends Model
{
    use HasFactory;
    protected $fillable=['id_user','id_branch','message','sent_at'];
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user'); 
    }
}
