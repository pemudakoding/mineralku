<?php

namespace App\Http\Controllers\Customer\Order;

use App\Http\Controllers\Controller;
use App\Notifications\SendOrderMessageNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class StoreOrderController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        Notification::sendNow($request, new SendOrderMessageNotification($request));
    }
}
