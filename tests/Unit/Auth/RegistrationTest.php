<?php

namespace Tests\Unit;

use App\Models\User;
use App\Src\Actions\Auth\RegisterAction;
use Tests\TestCase;

class RegistrationTest extends TestCase
{
    /**
     * Test user can added to database.
     *
     * @return void
     */
    public function test_can_added_user(): void
    {
        $data = [
            'name' => 'John Doe',
            'whatsapp_numbers' => '085155429967',
            'address' => 'Jl. Kedondong 2',
        ];

        $registerAction = (new RegisterAction())->execute($data);

        $this->assertInstanceOf(User::class, $registerAction);
    }

    public function test_cannot_added_user_when_some_fields_is_empty():void
    {
        $data = [
            'name' => null,
            'whatsapp_numbers' => null,
            'address' => null,
        ];

        $registerAction = (new RegisterAction())->execute($data);

        $this->assertFalse($registerAction);
    }

}
