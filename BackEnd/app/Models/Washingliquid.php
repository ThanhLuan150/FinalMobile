<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Washingliquid extends Model
{
    use HasFactory;
    protected $fillable=['namewashingliquids','id_branch'];
    public function branch()
    {
        return $this->belongsTo(Branches::class, 'id_branch'); 
    }
}
