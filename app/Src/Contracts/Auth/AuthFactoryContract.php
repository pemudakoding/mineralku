<?php

namespace App\Src\Contracts\Auth;

interface AuthFactoryContract
{
    public function using(string $resolverClass): AuthResolverContract;
}
