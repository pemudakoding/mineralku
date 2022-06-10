<?php

namespace App\Src\ValueObjects\Order;

class CurrencyFormat
{
    public function __construct(protected int|float $amount)
    {
        //
    }

    public static function make(int $amount)
    {
        if(! is_integer($amount)) {
            return throw new \Exception('Invalid amount type');
        }

        return new self($amount);
    }

    public function toRupiah()
    {
        return number_format(
            num: $this->amount,
            decimal_separator: ',',
            thousands_separator: '.'
        );
    }
}
