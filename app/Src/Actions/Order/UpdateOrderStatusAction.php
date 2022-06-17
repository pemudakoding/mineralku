<?php

namespace App\Src\Actions\Order;

use App\Models\Order;

class UpdateOrderStatusAction
{
    public function execute(array $data)
    {
        try {
            $order = $this->resolveForOrder($data['order_id']);

            if( ! $update = $this->updateStatus($order, $data['status'])) {
                return throw new \Exception('Failed update order status');
            }

            return $update;
        } catch (\Throwable $th) {
            return false;
        }

    }

    protected function resolveForOrder(int $orderId)
    {
        return Order::with('depot','user')
            ->where('id', $orderId)
            ->first();
    }

    protected function updateStatus(Order $order, string $status)
    {
        $order->status = $status;

        return $order->save();
    }
}
