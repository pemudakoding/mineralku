<?php

namespace App\Src\Enums\Auth;

use App\Src\Factory\Auth\Resolver\AuthWithTokenResolver;

enum DriverEnum: string
{
    case Token = AuthWithTokenResolver::class;

    case GeneralCredentials = '';
}
