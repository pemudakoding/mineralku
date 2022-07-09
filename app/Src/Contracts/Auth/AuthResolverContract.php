<?php

namespace App\Src\Contracts\Auth;

interface AuthResolverContract
{
    public function resolve(): array|bool;
}
