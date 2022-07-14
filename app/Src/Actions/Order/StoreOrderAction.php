<?php

namespace App\Src\Actions\Order;

use App\Models\Order;
use App\Src\Factory\Order\OrderFactory;
use App\Src\ValueObjects\Order\Number;
use Illuminate\Support\Arr;

class StoreOrderAction
{
    protected OrderFactory $factory;

    public function execute(OrderFactory $factory): Order|\Exception
    {
        $this->factory = $factory;

        try {
            if(empty($this->factory->data->get('depot_id'))) {
                throw new \Exception('Depot is required');
            }

            if(empty($this->factory->data->get('user_id'))) {
                throw new \Exception('User is required');
            }

            if(empty($this->factory->data->get('depot_product_id'))) {
                throw new \Exception('Depot Product is required');
            }

            return $this->store();
        } catch (\Throwable $e) {
            return throw new \Exception($e->getMessage());
        }
    }

    protected function store(): Order
    {
        $data = $this->factory->resolveForOrderData()->except(['delivery_date', 'delivery_time']);
        $data['delivery_date'] = $this->factory->resolveForDeliveryDate();
        $data['total_price'] = $this->factory->resolveForTotalPrice();
        $data['order_number'] = Number::make($this->resolveForOrderNumber())->withPrefix;

        return Order::create($data->toArray());
    }

    protected function resolveForOrderNumber()
    {
        $latestOrder = Order::select('order_number')->latest()->first();

        if($latestOrder){
            $separatedOrderNumber = explode('-', $latestOrder->order_number);
            $latestNumber = Arr::last($separatedOrderNumber);
        }

        return $latestOrder
            ? $latestNumber + 1
            : 1;
    }
}
