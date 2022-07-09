<?php

namespace Tests\Unit\Order;

use App\Models\Depot;
use App\Models\User;
use App\Src\Actions\Order\RetrieveOrdersAction;
use Illuminate\Database\Eloquent\Collection;
use Tests\TestCase;

class RetrieveOrdersTest extends TestCase
{

    public function test_get_orders_with_all_status()
    {
        $depot = $this->resolveDepotOrder();

        $data = [
            'depot_id' => $depot->id,
            'status' => 'all'
        ];

        $action = (new RetrieveOrdersAction)->execute($data);

        $this->assertInstanceOf(Collection::class, $action);
        $this->assertEquals(4,count($action));
    }

    public function test_get_orders_with_valid_status()
    {
        $depot = $this->resolveDepotOrder();

        $dataPending = [
            'depot_id' => $depot->id,
            'status' => 'pending',
        ];

        $dataProcessing = [
            'depot_id' => $depot->id,
            'status' => 'processing',
        ];

        $dataCompleted = [
            'depot_id' => $depot->id,
            'status' => 'completed',
        ];

        $dataCancelled = [
            'depot_id' => $depot->id,
            'status' => 'cancelled',
        ];

        $pending = (new RetrieveOrdersAction)->execute($dataPending);
        $processing = (new RetrieveOrdersAction)->execute($dataProcessing);
        $completed = (new RetrieveOrdersAction)->execute($dataCompleted);
        $cancelled = (new RetrieveOrdersAction)->execute($dataCancelled);

        $this->assertInstanceOf(Collection::class, $pending);
        $this->assertEquals(1,count($pending));

        $this->assertInstanceOf(Collection::class, $processing);
        $this->assertEquals(1,count($processing));

        $this->assertInstanceOf(Collection::class, $completed);
        $this->assertEquals(1,count($completed));

        $this->assertInstanceOf(Collection::class, $cancelled);
        $this->assertEquals(1,count($cancelled));
    }

    public function test_get_orders_will_throw_exception_if_given_invalid_status()
    {
        $this->expectException(\Exception::class);
        $this->expectExceptionMessage('Given status is invalid');
        $this->expectExceptionCode(400);

        $depot = $this->resolveDepotOrder();

        $data = [
            'depot_id' => $depot->id,
            'status' => 'anjay'
        ];

        $action = (new RetrieveOrdersAction)->execute($data);
    }

    protected function resolveDepotOrder()
    {
        $depot = Depot::factory()->create();
        $user = User::factory()->create();

        $data = [
            [
                'depot_id' => $depot->id,
                'user_id' => $user->id,
                'quantity' => 1,
                'shipping_detail' => 'pickup',
                'delivery_date' => '2020-01-01',
                'total_price' => 6000,
                'is_delivery_now' => true,
            ],
            [
                'depot_id' => $depot->id,
                'user_id' => $user->id,
                'quantity' => 5,
                'shipping_detail' => 'pickup',
                'is_delivery_now' => true,
                'delivery_date' => '2020-01-01',
                'total_price' => 6000,
                'status' => 'processing'
            ],
            [
                'depot_id' => $depot->id,
                'user_id' => $user->id,
                'quantity' => 5,
                'shipping_detail' => 'pickup',
                'is_delivery_now' => true,
                'status' => 'completed',
                'delivery_date' => '2020-01-01',
                'total_price' => 6000,
            ],
            [
                'depot_id' => $depot->id,
                'user_id' => $user->id,
                'quantity' => 5,
                'shipping_detail' => 'pickup',
                'is_delivery_now' => true,
                'status' => 'cancelled',
                'delivery_date' => '2020-01-01',
                'total_price' => 6000,
            ]
        ];

        $depot->orders()->createMany($data);

        return $depot;
    }
}
