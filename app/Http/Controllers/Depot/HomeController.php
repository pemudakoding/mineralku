<?php

namespace App\Http\Controllers\Depot;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class HomeController
{
    public function __invoke()
    {
        return Inertia::render('Depot/Home');
    }
}
