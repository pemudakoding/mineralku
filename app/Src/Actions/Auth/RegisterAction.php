<?php

namespace App\Src\Actions\Auth;

use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;

class RegisterAction
{
    public function execute(array $data)
    {
        try {
            $user = $this->store($data);
            $this->storeAddress($user, $data);

            return $user;
        } catch (\Exception $th) {
            return false;
        }
    }

    protected function store(array $data): User
    {
        $data['password'] = Hash::make('D3F4ultP455w0rdF0rM1n3r4lku');
        $data = Arr::only($data, ['name', 'whatsapp_numbers', 'password']);

        return User::create($data);
    }

    protected function storeAddress(User $user, array $data)
    {
        $data = Arr::only($data, ['address']);

        return $user->addresses()->create($data);
    }
}
