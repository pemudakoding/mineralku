<?php

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
        Route::get('/', HomeController::class)->name('index');

        Route::prefix('order')
            ->name('order.')
            ->group(function(){
                Route::patch('/status', UpdateStatusController::class)->name('status-patch');
            });
    });
