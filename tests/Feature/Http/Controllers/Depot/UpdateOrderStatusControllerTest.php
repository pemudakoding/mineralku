<?php

namespace Tests\Feature\Http\Controllers\Depot;

use App\Models\Order;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UpdateOrderStatusControllerTest extends TestCase
{

    public function test_update_order_valid_status_controller()
    {
        $order = Order::first();

        $response = $this->patch('/depot/order/status',[
            'order_id' => $order->id,
            'status' => 'processing'
        ]);

        $response1 = $this->patch('/depot/order/status',[
            'order_id' => $order->id,
            'status' => 'completed'
        ]);

        $response2 = $this->patch('/depot/order/status',[
            'order_id' => $order->id,
            'status' => 'cancelled'
        ]);

        $response->assertStatus(200);
        $response1->assertStatus(200);
        $response2->assertStatus(200);

        $response->assertSeeText('1');
        $response1->assertSeeText('1');
        $response2->assertSeeText('1');
    }

    public function test_invalid_status_failing_when_update_order_status_controller()
    {
        $order = Order::first();

        $response = $this->patch('/depot/order/status',[
            'order_id' => $order->id,
            'status' => 'invalid'
        ]);

        $response->assertInvalid();
    }

    public function test_invalid_order_id_failing_when_update_order_status_controller()
    {
        $response = $this->patch('/depot/order/status',[
            'order_id' => 99999,
            'status' => 'invalid'
        ]);

        $response->assertInvalid();
    }

}
