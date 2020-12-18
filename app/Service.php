<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $table = 'service';
    protected $guarded = [];
    public function service_details()
    {
        return $this->hasMany('App\ServiceDetail', 'service_id');
    }
}
