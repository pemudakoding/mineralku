<?php

namespace App\Src\Factory\Order;

use App\Models\Depot;
use App\Models\User;
use App\Src\ValueObjects\Order\CurrencyFormat;
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
        $this->data = collect($data);
    }

    public function resolveForNotificationData()
    {
        return [
            'depot_name' => $this->resolveForDepotName(),
            'name' => $this->resolveForCustomerName(),
            'whatsapp_numbers' => $this->data->get('whatsapp_numbers'),
            'address' => $this->data->get('address'),
            'quantity' => $this->data->get('quantity'),
            'shipping_detail' => $this->data->get('shipping_detail'),
            'is_delivery_now' => $this->data->get('is_delivery_now'),
            'delivery_time' => $this->data->get('delivery_time'),
            'delivery_date' => $this->data->get('delivery_date'),
            'price' => CurrencyFormat::make($this->resolveForPrice())->toRupiah(),
            'total_price' => CurrencyFormat::make($this->resolveForTotalPrice())->toRupiah(),
            'shipping_fee' => CurrencyFormat::make($this->resolveForShippingFee())->toRupiah(),
            'service_fee' => CurrencyFormat::make($this->resolveForServiceFee())->toRupiah(),
        ];
    }

    public function resolveForOrderData()
    {
        return $this->data->only(self::SELECTED_DATA);
    }

    public function resolveForDeliveryDate(): Carbon|string
    {
        if($this->data->get('is_delivery_now')) {
            return now();
        }

        $datetime = $this->data->get('delivery_date') . ' ' . $this->data->get('delivery_time');

        return DateFormat::make($datetime)->toHumanDateTime();
    }

    public function resolveForTotalPrice(): int|float
    {
        $qty = intval($this->data->get('quantity'));
        $price = $this->resolveForPrice();
        $shippingFee = $this->resolveForShippingFee();
        $serviceFee = $this->resolveForServiceFee();
        $totalPrice = ($price * $qty) + $shippingFee + $serviceFee;

        return $totalPrice;
    }

    public function resolveForPrice()
    {
        return config('temp-price.price');
    }

    public function resolveForServiceFee()
    {
        return config('temp-price.serviceFee');
    }

    public function resolveForShippingFee()
    {
        return $this->data->get('shipping_detail') == 'delivery'
            ? (config('temp-price.shippingFee') * intval($this->data->get('quantity')))
            : 0;
    }

    public function resolveForDepotName()
    {
        return Depot::find($this->data->get('depot_id'))->name;
    }

    public function resolveForCustomerName()
    {
        return User::find($this->data->get('user_id'))->name;
    }
}
