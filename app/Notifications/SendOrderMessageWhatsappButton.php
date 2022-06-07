<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use NotificationChannels\Telegram\TelegramMessage;
use Illuminate\Support\Str;

class SendOrderMessageWhatsappButton extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(protected array $data)
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['telegram'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toTelegram($notifiable)
    {
        return TelegramMessage::create()
            ->to(config('services.telegram-bot-api.order_channel'))
            ->content("Buat CS silahkan copy pesan diatas lalu tekan tombol dibawah pesan ini!")
            ->button('Whatsapp', $this->resolveForWhatsappUrl());
    }

    public function resolveForWhatsappNumber()
    {
        return Str::replaceFirst('0','62',$this->data['whatsapp_numbers']);
    }

    public function resolveForWhatsappUrl()
    {
        return 'wa.me/' . $this->resolveForWhatsappNumber();
    }
}
