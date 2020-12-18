<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServiceDetail extends Model
{
    protected $guarded = [];
    protected $table = 'service_details';
    public function customer_service()
    {
        return $this->belongsTo('\App\CustomerService')->withDefault();
    }
}
