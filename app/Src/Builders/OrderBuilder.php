<?php

namespace App\Src\Builders;

use App\Src\Enums\Orders\Status;
use Illuminate\Database\Eloquent\Builder;

class OrderBuilder extends Builder
{
    public function resolveForAMonth()
    {
        return $this->whereBetween(
            'created_at',
            [now()->startOfMonth(), now()->endOfMonth()]
        );
    }

    public function resolveForRevenueAMonth()
    {
        return $this->whereBetween(
            'created_at',
            [now()->startOfMonth(), now()->endOfMonth()]
        )->sum('total_price');
    }

    public function resolveForLimit(int $limit)
    {
        return $this->limit($limit);
    }

    public function whereDepot(int $depotId)
    {
        return $this->where('depot_id', $depotId);
    }

    public function whereStatus(Status $status)
    {
        return $this->where('status', $status);
    }
}
