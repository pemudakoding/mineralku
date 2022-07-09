<?php

use App\Http\Controllers\Auth\Depot\AuthenticatingController;
use App\Http\Controllers\Auth\Depot\LogoutController;
use App\Http\Controllers\Depot\HomeController;
use App\Http\Controllers\Depot\Order\UpdateStatusController;
use Illuminate\Support\Facades\Route;

/**
 * Web Routes for the depots.
 * so determines the routes for the depots.
 * here.
 */

 Route::name('depot.')
    ->prefix('depot')
    ->group(function(){
        Route::middleware('auth:depot')
            ->group(function(){
                Route::get('/', HomeController::class)->name('index');

                Route::prefix('orders')
                    ->name('orders.')
                    ->group(function(){
                        Route::patch('/status', UpdateStatusController::class)->name('status-patch');
                    });


            });

        Route::prefix('auth')
            ->name('auth.')
            ->group(function(){
                Route::middleware('guest:depot')
                    ->group(function(){
                        Route::get('login/token', AuthenticatingController::class)->name('authenticating-token');
                    });

                Route::middleware('auth:depot')
                    ->group(function(){
                        Route::post('logout', LogoutController::class)->name('logout');
                    });
            });
    });
