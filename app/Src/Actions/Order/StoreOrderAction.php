<?php

namespace App\Src\Actions\Order;

use App\Models\Order;
use App\Src\Factory\Order\OrderFactory;
use Illuminate\Support\Arr;

class StoreOrderAction
{
    protected OrderFactory $factory;

    public function execute(array $data)
    {
        $this->factory = new OrderFactory($data);

        try {
            if(empty($this->factory->data->get('depot_id'))) {
                throw new \Exception('Depot are required');
            }

            if(empty($this->factory->data->get('user_id'))) {
                throw new \Exception('User are required');
            }

            return $this->store();
        } catch (\Exception $e) {
            return throw new \Exception($e->getMessage());
        }
    }

    protected function store()
    {
        $data = $this->factory->data->except(['delivery_date', 'delivery_time']);
        $data['delivery_date'] = $this->factory->resolveForDeliveryDate();
        $data['total_price'] = $this->factory->resolveForPrice();

        return Order::create($data->toArray());
    }
}
