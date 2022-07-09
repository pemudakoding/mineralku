<?php

namespace Tests\Unit\Order;

use App\Models\Depot;
use App\Models\Order;
use App\Models\User;
use App\Src\Actions\Order\StoreOrderAction;
use App\Src\Actions\Order\UpdateOrderStatusAction;
use App\Src\Factory\Order\OrderFactory;
use Tests\TestCase;

class UpdateOrderStatusTest extends TestCase
{

    public function resolveForOrder(): Order
    {
        $depot = Depot::factory()->create();
        $user = User::factory()->create();
        $depotProduct = $depot->products()->create([
            'name' => 'Bio',
            'price' => 5000
        ]);

        $data = [
            'depot_id' => $depot->id,
            'user_id' => $user->id,
            'depot_product_id' => $depotProduct->id,
            'address' => 'Jl Kedondong 2',
            'quantity' => 1,
            'shipping_detail' => 'pickup',
            'is_delivery_now' => false,
            'delivery_time' => '14:00',
            'delivery_date' => '2020-01-01',
        ];

        $factory = new OrderFactory($data);
        $order = (new StoreOrderAction)->execute($factory);

        return $order;
    }

    public function test_can_update_order_status_to_processing()
    {
        $updateStatus = (new UpdateOrderStatusAction)->execute([
            'order_id' => $this->resolveForOrder()->id,
            'status' => 'processing'
        ]);

        $this->assertTrue($updateStatus);
    }

    public function test_can_update_order_status_to_completed()
    {
        $updateStatus = (new UpdateOrderStatusAction)->execute([
            'order_id' => $this->resolveForOrder()->id,
            'status' => 'completed'
        ]);

        $this->assertTrue($updateStatus);
    }

    public function test_can_update_order_status_to_cancelled()
    {
        $updateStatus = (new UpdateOrderStatusAction)->execute([
            'order_id' => $this->resolveForOrder()->id,
            'status' => 'cancelled'
        ]);

        $this->assertTrue($updateStatus);
    }

    public function test_cannot_update_order_status_to_another_status()
    {
        $updateStatus = (new UpdateOrderStatusAction)->execute([
            'order_id' => $this->resolveForOrder()->id,
            'status' => 'wrong_status'
        ]);

        $this->assertFalse($updateStatus);
    }

    public function test_cannot_update_order_status_to_unknow_order()
    {
        $updateStatus = (new UpdateOrderStatusAction)->execute([
            'order_id' => $this->resolveForOrder()->id + 500,
            'status' => 'wrong_status'
        ]);

        $this->assertFalse($updateStatus);
    }
}
