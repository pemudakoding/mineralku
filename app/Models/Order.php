<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
        'status',
    ];

    protected $cast = [
        'delivery_date' => 'datetime',
    ];

    public function depot(): BelongsTo
    {
        return $this->belongsTo(Depot::class);
    }
}
