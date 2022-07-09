<?php

namespace App\Http\Controllers\Auth\Depot;

use App\Src\Actions\Auth\LogoutAction;

class LogoutController
{
    public function __invoke(LogoutAction $action)
    {
        $logouted = $action->execute('depot');

        if($logouted){
            return redirect()->route('customers.index');
        }

        return abort(500);
    }
}
