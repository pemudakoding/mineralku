<?php

namespace Tests\Feature\Http\Controllers\Depot;

use App\Models\Order;
use App\Models\User;
use Tests\TestCase;

class AuthenticatingControllerTest extends TestCase
{
    public function test_user_will_authenticated_with_valid_token()
    {

        $user = User::factory()->create();

        $response = $this
            ->get('/depot/auth/login/token?token=' . $user->token);

        $response->assertRedirect('/depot');
    }

    public function test_user_will_redirected_to_home_if_invalid_token()
    {
        $response = $this
            ->get('/depot/auth/login/token?token=invalid');

        $response->assertRedirect('/');
    }

    public function test_user_will_redirected_to_depot_dashboard_if_authenticated()
    {

        $user = User::factory()->create();

        $response = $this
            ->actingAs($user,'depot')
            ->get('/depot/auth/login/token');

        $response->assertRedirect('/depot');
    }

    public function test_user_will_redirected_to_home_if_token_not_filled()
    {
        $response = $this
            ->get('/depot/auth/login/token');

        $response->assertRedirect('/');
    }

}
