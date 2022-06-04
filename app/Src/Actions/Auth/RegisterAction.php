<?php

namespace App\Src\Actions\Auth;

use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;

class RegisterAction
{
    protected array $data;

    protected User $user;

    public function execute(array $data)
    {
        $this->data = $data;

        try {
            $user = $this->store()->withAddress();

            return $user;
        } catch (\Exception $th) {
            return false;
        }
    }

    protected function store(): self
    {
        $data = $this->data;
        $data['password'] = Hash::make('D3F4ultP455w0rdF0rM1n3r4lku');
        $data = Arr::only($data, ['name', 'whatsapp_numbers', 'password']);

        $this->user = User::create($data);

        return $this;
    }

    protected function withAddress(): User
    {
        $data = $this->data;
        $resolvedData = Arr::only($data, ['address']);

        $this->user->addresses()->create($resolvedData);

        return $this->user->with('addresses')->first();
    }
}
