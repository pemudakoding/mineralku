<?php

namespace App\Src\Actions\Auth;

use App\Src\Factory\Auth\AuthFactory;
use App\Src\Factory\Auth\Resolver\LogoutResolver;

class LogoutAction
{
    public function execute(string $guard)
    {
        $factory = new AuthFactory(['guard' => $guard]);

        return $factory->using(LogoutResolver::class)->resolve();
    }
}
