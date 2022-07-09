<?php

use App\Http\Controllers\API\V1\Depot\Order\UpdateStatusController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('depot')
    ->name('depot.')
    ->group(function(){

        Route::prefix('orders')
            ->name('orders.')
            ->group(function(){
                Route::patch('status', UpdateStatusController::class);
            });

    });
