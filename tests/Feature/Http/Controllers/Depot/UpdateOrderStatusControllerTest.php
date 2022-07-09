<?php

namespace Tests\Feature\Http\Controllers\Depot;

use App\Models\Order;
use App\Models\User;
use Tests\TestCase;

class UpdateOrderStatusControllerTest extends TestCase
{

    public function test_update_order_valid_status_controller()
    {
        $order = Order::first();

        $response = $this->patch('/depot/orders/status',[
            'order_id' => $order->id,
            'status' => 'processing'
        ]);

        $response1 = $this->patch('/depot/orders/status',[
            'order_id' => $order->id,
            'status' => 'completed'
        ]);

        $response2 = $this->patch('/depot/orders/status',[
            'order_id' => $order->id,
            'status' => 'cancelled'
        ]);

        $response->assertStatus(302);
        $response1->assertStatus(302);
        $response2->assertStatus(302);
    }

    public function test_invalid_status_failing_when_update_order_status_controller()
    {
        $order = Order::first();

        $user = User::factory()->create();

        $response = $this
            ->actingAs($user,'depot')
            ->patch('/depot/orders/status',[
                'order_id' => $order->id,
                'status' => 'invalid'
            ]);

        $response->assertInvalid();
    }

    public function test_invalid_order_id_failing_when_update_order_status_controller()
    {
        $user = User::factory()->create();

        $response = $this
            ->actingAs($user,'depot')
            ->patch('/depot/orders/status',[
                'order_id' => 99999,
                'status' => 'invalid'
            ]);

        $response->assertInvalid();
    }

}
