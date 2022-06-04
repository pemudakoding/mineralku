<?php

namespace App\Src\Actions\Order;

use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Support\Arr;

class StoreOrderAction
{
    protected array $data;

    protected const SELECTED_DATA = [
        'depot_id',
        'user_id',
        'quantity',
        'shipping_detail',
        'is_delivery_now',
        'delivery_time',
        'delivery_date'
    ];

    public function execute(array $data)
    {
        $this->data = Arr::only($data, self::SELECTED_DATA);

        try {
            if(empty($this->data['depot_id'])) {
                throw new \Exception('Depot are required');
            }

            if( empty($this->data['user_id'])) {
                throw new \Exception('User are required');
            }

            return $this->store();
        } catch (\Exception $e) {
            return throw new \Exception($e->getMessage());
        }
    }

    protected function store()
    {

        $data = Arr::except($this->data, ['delivery_time', 'delivery_date']);
        $data['delivery_date'] = $this->resolveForDeliveryDate($data['is_delivery_now']);
        $data['total_price'] = $this->resolveForPrice();

        return Order::create($data);
    }

    protected function resolveForDeliveryDate(bool $isDeliveryNow)
    {
        if($isDeliveryNow){
            return now();
        }

        return now()
            ->parse($this->data['delivery_date'] . $this->data['delivery_time'])
            ->format('Y-m-d H:i:s');
    }

    protected function resolveForPrice()
    {
        return 6600;
    }
}
