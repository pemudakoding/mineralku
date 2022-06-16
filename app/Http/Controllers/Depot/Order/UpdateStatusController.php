<?php

namespace App\Http\Controllers\Depot\Order;

use App\Http\Controllers\Controller;
use App\Http\Requests\Depot\Order\UpdateStatusRequest;
use App\Models\Order;
use Illuminate\Http\Request;

class UpdateStatusController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(UpdateStatusRequest $request)
    {
        $order = Order::with('user', 'depot')
            ->where('id', $request->order_id)
            ->first();
    }
}
