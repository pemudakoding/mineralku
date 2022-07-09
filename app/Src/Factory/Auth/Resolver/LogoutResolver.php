<?php

namespace App\Src\Factory\Auth\Resolver;

use App\Src\Contracts\Auth\AuthResolverContract;
use Illuminate\Support\Facades\Auth;

class LogoutResolver implements AuthResolverContract
{

    public function __construct(public array $data)
    {

    }

    public function resolve(): bool
    {
        Auth::guard($this->data['guard'])->logout();

        return ! Auth::guard($this->data['guard'])->check()
            ? true
            : false;
    }

}
