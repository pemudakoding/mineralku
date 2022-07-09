<?php

namespace Tests\Unit\Auth;

use App\Src\Actions\Auth\LoginAction;
use App\Src\Enums\Auth\DriverEnum;
use Tests\TestCase;

class LoginTest extends TestCase
{

    public function test_authenticating_only_with_token()
    {
        $token = 'testing';

        $action = (new LoginAction)->execute(DriverEnum::Token,[
            'token' => $token,
        ]);

        $this->assertTrue($action);
    }
}
