<?php

namespace App\Src\Actions\Auth;

use App\Src\Enums\Auth\DriverEnum;
use App\Src\Factory\Auth\AuthFactory;

class LoginAction
{
    public function execute(DriverEnum $driver, array $data): bool
    {
        $factory = new AuthFactory($data);

        return match($driver) {
            DriverEnum::Token => $factory->using($driver->value)->resolve()
        };
    }
}
