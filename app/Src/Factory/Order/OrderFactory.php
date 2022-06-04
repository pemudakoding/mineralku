<?php

namespace App\Src\Factory\Order;

use App\Src\ValueObjects\Order\DateFormat;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;

class OrderFactory
{
    public Collection $data;

    protected const SELECTED_DATA = [
        'depot_id',
        'user_id',
        'quantity',
        'shipping_detail',
        'is_delivery_now',
        'delivery_time',
        'delivery_date'
    ];

    public function __construct(array $data)
    {
        $this->data = collect($data)->only(self::SELECTED_DATA);
    }

    public function resolveForDeliveryDate(): Carbon|string
    {
        if($this->data->get('is_delivery_now')) {
            return now();
        }

        $datetime = $this->data->get('delivery_date') . ' ' . $this->data->get('delivery_time');

        return DateFormat::make($datetime)->toHumanDateTime();
    }

    public function resolveForPrice(): int|float
    {
        return 6600;
    }
}
