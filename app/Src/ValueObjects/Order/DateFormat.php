<?php

namespace App\Src\ValueObjects\Order;

use Illuminate\Support\Carbon;

class DateFormat
{
    public function __construct(public string $datetime)
    {
        //code
    }

    public static function make(string $datetime)
    {
        return new static($datetime);
    }

    public function toHumanDateTime(): Carbon|string
    {
        return now()->parse($this->datetime)->format('Y-m-d H:i:s');
    }

}
