<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    use HasFactory;
    protected $fillable=['name_voucher','code ','discount_amount','start_date','end_date','id_branch'];
    public function branch()
    {
        return $this->belongsTo(Branches::class, 'id_branch'); 
    }
}
