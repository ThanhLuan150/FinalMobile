<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fabricsoftener extends Model
{
    use HasFactory;
    protected $fillable=['namewfabricsofteners','id_branch'];
    public function branch()
    {
        return $this->belongsTo(Branches::class, 'id_branch'); 
    }
}
