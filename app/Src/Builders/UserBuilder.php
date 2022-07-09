<?php

namespace App\Src\Builders;

use Illuminate\Database\Eloquent\Builder;

class UserBuilder extends Builder
{
    public function whereToken($token)
    {
        return $this->where('token', $token);
    }

    public function depotExists()
    {
        return $this->model->depot()->exists();
    }
}
