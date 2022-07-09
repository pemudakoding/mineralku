<?php

namespace Database\Factories;

use App\Models\District;
use App\Models\Province;
use App\Models\SubDistrict;
use App\Models\UrbanVillage;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Depot>
 */
class DepotFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $urbanVillage = UrbanVillage::select('id')
            ->where('name','Talise')
            ->first()
            ->id;

        $subDistrict = SubDistrict::select('id')
            ->where('name', 'Mantikulore')
            ->first()
            ->id;

        $disctrict = District::select('id')
            ->where('name', 'Kota Palu')
            ->first()
            ->id;

        $province = Province::select('id')
            ->where('name', 'Sulawesi Tengah')
            ->first()
            ->id;

        return [
            'name' => $this->faker->name(),
            'address' => 'BTN Lagarutu CPI 2, Jl. Dayodara No.10, RW.008',
            'urban_village_id' => $urbanVillage,
            'sub_district_id' => $subDistrict,
            'district_id' => $disctrict,
            'province_id' => $province,
            'lat' => '-0.8837565',
            'long' => '119.894005'
        ];
    }
}
