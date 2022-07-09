<?php

namespace App\Http\Controllers\Auth\Depot;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\Depot\LoginRequest;
use App\Models\User;
use App\Src\Actions\Auth\LoginAction;
use App\Src\Enums\Auth\DriverEnum;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticatingController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(LoginRequest $request, LoginAction $action)
    {
        $authenticated = $action->execute(DriverEnum::Token, [
            'token' => $request->token,
            'guard' => 'depot'
        ]);

        return $authenticated
            ? redirect()->route('depot.index')
            : redirect()->route('customers.index');
    }
}
