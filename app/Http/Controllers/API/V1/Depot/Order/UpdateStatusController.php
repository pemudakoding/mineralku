<?php

namespace App\Http\Controllers\API\V1\Depot\Order;

use App\Http\Controllers\Controller;
use App\Http\Requests\Depot\Order\UpdateStatusRequest;
use App\Src\Actions\Order\UpdateOrderStatusAction;
use Illuminate\Http\Request;

class UpdateStatusController extends Controller
{
    public function __invoke(UpdateStatusRequest $request, UpdateOrderStatusAction $action)
    {
        try {
            $action->execute($request->toArray());

            return response()->json([
                'success' => true,
                'message' => 'Success update order status to ' . $request->status,
                'code' => 200
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Failed update order status to ' . $request->status,
                'code' => 500
            ]);
        }
    }
}
