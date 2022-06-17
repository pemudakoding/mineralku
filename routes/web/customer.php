<?php

use App\Http\Controllers\Customer\{
    DepotController,
    HomeController,
};
use App\Http\Controllers\Customer\Order\StoreOrderController;
use Illuminate\Support\Facades\Route;

/**
 * Web Routes for the Customers.
 * so determines the routes for the Customers.
 * here.
 */

Route::name('customers.')->group(function () {
    Route::get('/', HomeController::class)->name('index');

    Route::name('order.')
        ->prefix('order')
        ->group(function (){
            Route::post('/', StoreOrderController::class)->name('store');
        });
});
