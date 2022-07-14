<?php

namespace App\Src\ValueObjects\Order;

class Number
{
    public readonly string $withPrefix;

    public function __construct(public int $number)
    {
        $this->resolveForPrefix($this->number);
    }

    public static function make(int $number): self
    {
        return new self($number);
    }

    protected function resolveForPrefix(int $number): void
    {
        $prefix = config('app.order_prefix');

        $this->withPrefix = $prefix . '-' . now()->timestamp . '-' . str_pad($number, 5, 0, STR_PAD_LEFT);
    }
}
