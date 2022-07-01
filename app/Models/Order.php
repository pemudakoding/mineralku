<?php

namespace App\Models;

use App\Src\Builders\OrderBuilder;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'depot_id',
        'depot_product_id',
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

    public function newEloquentBuilder($query): Builder
    {
        return new OrderBuilder($query);
    }

    public function depot(): BelongsTo
    {
        return $this->belongsTo(Depot::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
