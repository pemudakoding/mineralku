<?php

namespace App\Src\Enums\Orders;

enum Status: String
{
  case All = 'all';
  case Processing = 'processing';
  case Pending = 'pending';
  case Completed = 'completed';
  case Cancelled = 'cancelled';
}
