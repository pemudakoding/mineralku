<?php

namespace App\Src\Factory\Auth\Resolver;

use App\Models\User;
use App\Src\Contracts\Auth\AuthResolverContract;
use Illuminate\Support\Facades\Auth;

class AuthWithTokenResolver implements AuthResolverContract
{
    public function __construct(public array $data)
    {

    }

    public function resolve() {
        $user = User::whereToken($this->data['token'])->first();

        Auth::guard($this->data['guard'] ?? 'web')->login($user);

        return Auth::guard($this->data['guard'] ?? 'web')
            ? true
            : false;
    }
}
