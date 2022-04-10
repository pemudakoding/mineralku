<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Src\Foundation\Inertia\DelegatesRender;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    use DelegatesRender;

    protected string $pageDirectory = 'Customers';

    public function index()
    {
        return $this->setFallbackPage('Home')
            ->render();
    }
}
