<?php

namespace Tests\Unit;

use App\Models\Depot;
use App\Models\Order;
use App\Models\User;
use App\Src\Actions\Auth\RegisterAction;
use App\Src\Actions\Order\StoreOrderAction;
use Tests\TestCase;

class StoreOrderTest extends TestCase
{
    /**
     * Test store order that shoud delivery now
     *
     * @return void
     */
    public function test_can_store_order_delivery_now()
    {
        $depot = Depot::factory()->create();
        $user = User::factory()->create();

        $data = [
            'depot_id' => $depot->id,
            'user_id' => $user->id,
            'quantity' => 1,
            'shipping_detail' => 'pickup',
            'is_delivery_now' => true,
        ];

        $order = (new StoreOrderAction)->execute($data);
        $deliveryDate = now()->format('Y-m-d H:i:s');

        $this->assertInstanceOf(Order::class, $order);
        $this->assertEquals($deliveryDate, $order->delivery_date);
    }

    public function test_can_store_order_delivery_based_on_date()
    {
        $depot = Depot::factory()->create();
        $user = User::factory()->create();

        $data = [
            'depot_id' => $depot->id,
            'user_id' => $user->id,
            'quantity' => 1,
            'shipping_detail' => 'pickup',
            'is_delivery_now' => false,
            'delivery_time' => '14:00',
            'delivery_date' => '2020-01-01',
        ];

        $order = (new StoreOrderAction)->execute($data);

        $this->assertInstanceOf(Order::class, $order);
        $this->assertEquals('2020-01-01 14:00:00', $order->delivery_date);
    }

    public function test_cannot_store_order_when_depot_doesnt_exists()
    {
        $this->expectException(\Exception::class);
        $this->expectExceptionMessage('Depot are required');

        $user = User::factory()->create();

        $data = [
            'depot_id' => null,
            'user_id' => $user->id,
            'quantity' => 1,
            'shipping_detail' => 'pickup',
            'is_delivery_now' => false,
            'delivery_time' => '14:00',
            'delivery_date' => '2020-01-01',
        ];

        $order = (new StoreOrderAction)->execute($data);
    }

    public function test_cannot_store_order_when_user_doesnt_exists()
    {
        $this->expectException(\Exception::class);
        $this->expectExceptionMessage('User are required');

        $depot = Depot::factory()->create();

        $data = [
            'depot_id' => $depot->id,
            'user_id' => null,
            'quantity' => 1,
            'shipping_detail' => 'pickup',
            'is_delivery_now' => false,
            'delivery_time' => '14:00',
            'delivery_date' => '2020-01-01',
        ];

        $order = (new StoreOrderAction)->execute($data);
    }
}
