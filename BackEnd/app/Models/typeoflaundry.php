<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class typeoflaundry extends Model
{
    use HasFactory;
    protected $fillable=['name_typeoflaundries','price','quatity','id_branch','id_service '];
    public function branch()
    {
        return $this->belongsTo(Branches::class, 'id_branch'); 
    }
    public function service()
    {
        return $this->belongsTo(service::class, 'id_service'); 
    }
}
