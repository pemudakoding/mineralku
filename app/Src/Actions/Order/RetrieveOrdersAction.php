<?php

namespace App\Src\Actions\Order;

use App\Models\Order;
use App\Src\Enums\Orders\Status;
use Illuminate\Database\Eloquent\Collection;

class RetrieveOrdersAction
{
    public function execute(array $data)
    {
        try {
            $status = $this->resolveForStatus($data['status']);

            if( ! $status) {
                throw new \Exception('Given status is invalid', 400);
            }

            return $this->resolveForOrders($data['depot_id'], $status);
        } catch (\Throwable $th) {
            throw new \Exception(
                $th->getMessage(),
                $th->getCode() ? $th->getCode() : 500
            );
        }

    }

    protected function resolveForOrders(int $depotId, Status $status): Collection
    {
        $orders = Order::query()
            ->with('user')
            ->whereDepot($depotId);

        if($status->value !== Status::All->value) {
            $orders->whereStatus($status);
        }

        return $orders->latest()->get();
    }

    protected function resolveForStatus(string $status): Status|null
    {
        try {
            return match($status) {
                'all' => Status::All,
                'processing' => Status::Processing,
                'pending' => Status::Pending,
                'completed' => Status::Completed,
                'cancelled' => Status::Cancelled
            };
        } catch (\Throwable $th) {
            return null;
        }
    }
}
