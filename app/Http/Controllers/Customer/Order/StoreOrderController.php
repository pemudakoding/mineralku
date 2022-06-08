<?php

namespace App\Http\Controllers\Customer\Order;

use App\Events\OrderSuccess;
use App\Http\Controllers\Controller;
use App\Http\Requests\Customer\Order\StoreRequest;
use App\Src\Actions\Auth\RegisterAction;
use App\Src\Actions\Order\StoreOrderAction;
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
        $user = (new RegisterAction)->execute($request->validated());
        $order =(new StoreOrderAction)->execute(array_merge($request->validated(), ['user_id' => $user->id]));
        $depotName = $order->load(['depot'])->depot->name;

        OrderSuccess::dispatch(array_merge($request->validated(), ['depot_name' => $depotName]));

        return Redirect::route('customers.index');
    }
}
