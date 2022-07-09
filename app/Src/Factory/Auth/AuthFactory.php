<?php

namespace App\Src\Factory\Auth;

use App\Src\Contracts\Auth\AuthFactoryContract;
use App\Src\Contracts\Auth\AuthResolverContract;

class AuthFactory implements AuthFactoryContract
{
    public function __construct(public array $data)
    {

    }

    public function using(string $resolverClass): AuthResolverContract {
        return (new $resolverClass($this->data));
    }
}
