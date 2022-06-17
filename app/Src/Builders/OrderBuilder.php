<?php

namespace App\Src\Builders;

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
}
