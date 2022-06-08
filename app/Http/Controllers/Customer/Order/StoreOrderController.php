<?php

namespace App\Http\Controllers\Customer\Order;

use App\Events\OrderSuccess;
use App\Http\Controllers\Controller;
use App\Http\Requests\Customer\Order\StoreRequest;
use Illuminate\Support\Facades\Redirect;

class StoreOrderController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(StoreRequest $request)
    {
        OrderSuccess::dispatch($request->validated());

        return Redirect::route('customers.index');
    }
}
