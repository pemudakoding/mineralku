<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'depot_id',
        'user_id',
        'quantity',
        'shipping_detail',
        'is_delivery_now',
        'delivery_date',
        'total_price',
    ];

    protected $cast = [
        'delivery_date' => 'datetime',
    ];
}
