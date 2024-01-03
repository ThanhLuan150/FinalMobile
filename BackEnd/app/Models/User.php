<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
class User extends Model
{
    use HasFactory;
    use HasApiTokens;
    protected $primaryKey = 'id_user';
    protected $fillable = ['username', 'phone', 'email', 'password', 'verify', 'role'];
}

