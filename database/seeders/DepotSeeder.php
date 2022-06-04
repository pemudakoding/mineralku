<?php

namespace Database\Seeders;

use App\Models\Depot;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Depot::create([
            'name' => 'Affifa Depot'
        ]);
    }
}
