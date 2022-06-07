<?php

namespace App\Http\Controllers\Customer\Order;

use App\Http\Controllers\Controller;
use App\Http\Requests\Customer\Order\StoreRequest;
use App\Notifications\SendOrderMessageNotification;
use App\Notifications\SendOrderMessageWhatsappButton;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
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
        Notification::route('telegram', '')
            ->notify(new SendOrderMessageNotification($request->validated()));
        Notification::route('telegram', '')
            ->notify(new SendOrderMessageWhatsappButton($request->validated()));

        return Redirect::route('customers.index');
    }
}
