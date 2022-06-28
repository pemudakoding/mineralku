<?php

namespace App\Http\Controllers\Depot\Order;

use App\Http\Controllers\Controller;
use App\Http\Requests\Depot\Order\UpdateStatusRequest;
use App\Models\Order;
use App\Src\Actions\Order\UpdateOrderStatusAction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class UpdateStatusController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(UpdateStatusRequest $request, UpdateOrderStatusAction $action)
    {
       try {
            $action = $action->execute($request->validated());

            if(! $action) {
                throw new \Exception('Failed updating order status');
            }

            return Redirect::back()->with([
                'message' => 'Successfully updated order status'
            ]);
       } catch (\Throwable $th) {
            return Redirect::back()->with([
                'message' => 'Failed updating order status'
            ]);
       }
    }
}
