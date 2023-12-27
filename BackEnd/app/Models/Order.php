<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
