<?php

namespace App\Src\Actions\Auth;

use App\Src\Enums\Auth\DriverEnum;
use App\Src\Factory\Auth\AuthFactory;

class LoginAction
{
    public function execute(DriverEnum $driver, array $data): bool
    {
        $factory = new AuthFactory($data);

        return $driver instanceof DriverEnum
            ? $factory->using($driver->value)->resolve()
            : throw new Exception("Login driver must instance", 500);
    }
}
