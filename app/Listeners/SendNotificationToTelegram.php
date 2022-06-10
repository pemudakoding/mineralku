<?php

namespace App\Listeners;

use App\Events\OrderSuccess;
use App\Notifications\SendOrderMessageNotification;
use App\Notifications\SendOrderMessageWhatsappButton;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;

class SendNotificationToTelegram implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(OrderSuccess $event)
    {
        Notification::route('telegram', '')
            ->notify(new SendOrderMessageNotification($event->data));
        Notification::route('telegram', '')
            ->notify(new SendOrderMessageWhatsappButton($event->data));
    }

    /**
     * Handle a job failure.
     *
     * @param  \App\Events\OrderShipped  $event
     * @param  \Throwable  $exception
     * @return void
     */
    public function failed(OrderSuccess $event, $exception)
    {
        Log::error('ERROR HANDLING TELEGRAM NOTIFICATION : '. $exception->getMessage());
    }
}
