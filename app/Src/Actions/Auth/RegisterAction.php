<?php

namespace App\Src\Actions\Auth;

use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;

class RegisterAction
{
    protected array $data;

    protected User $user;

    public function execute(array $data): User|bool
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
        $data = Arr::only($this->data, ['name', 'whatsapp_numbers', 'password']);
        $data['password'] = Hash::make('D3F4ultP455w0rdF0rM1n3r4lku');

        $this->user = User::firstOrCreate([
            'whatsapp_numbers' => $data['whatsapp_numbers']
        ],$data);

        return $this;
    }

    protected function withAddress(): User
    {
        $resolvedData = Arr::only($this->data, ['address']);

        $this->user->addresses()->create($resolvedData,$resolvedData);

        return $this->user->with('addresses')->first();
    }
}
