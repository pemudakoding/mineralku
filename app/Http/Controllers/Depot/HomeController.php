<?php

namespace App\Http\Controllers\Depot;

use App\Http\Controllers\Controller;
use App\Models\Depot;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController
{
    public function __invoke(Request $request)
    {
        $depot = User::with('depot')
            ->where('id', auth('depot')->user()->id)
            ->first()
            ->depot()
            ->with([
                'orders',
                'urbanVillage',
                'subDistrict',
                'district',
                'province',
                'province'
            ])
            ->first();

        $limit = $request->limit ?? 5;

        return Inertia::render('Depot/Home', [
            'depot' => $depot,
            'order_total' => $depot->orders()->resolveForAMonth()->count(),
            'revenue_total' => $depot->orders()->resolveForRevenueAMonth(),
            'orders' => $depot->orders()->with('user','product')->resolveForLimit($limit)->get(),
            'limit' => $limit,
        ]);
    }
}
