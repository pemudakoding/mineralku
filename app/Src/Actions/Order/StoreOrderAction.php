<?php

namespace App\Src\Actions\Order;

use App\Models\Order;
use App\Src\Factory\Order\OrderFactory;

class StoreOrderAction
{
    protected OrderFactory $factory;

    public function execute(OrderFactory $factory): Order|\Exception
    {
        $this->factory = $factory;

        try {
            if(empty($this->factory->data->get('depot_id'))) {
                throw new \Exception('Depot are required');
            }

            if(empty($this->factory->data->get('user_id'))) {
                throw new \Exception('User are required');
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

        return Order::create($data->toArray());
    }
}
