<?php

namespace Database\Seeders;

use App\Models\Depot;
use App\Models\District;
use App\Models\Province;
use App\Models\SubDistrict;
use App\Models\UrbanVillage;
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

        $depot = Depot::firstOrCreate(
            [
                'name' => 'Depot Air Minum Isi Ulang Afiqah'
            ],
            [
                'name' => 'Depot Air Minum Isi Ulang Afiqah',
                'address' => 'BTN Lagarutu CPI 2, Jl. Dayodara No.10, RW.008',
                'urban_village_id' => $urbanVillage,
                'sub_district_id' => $subDistrict,
                'district_id' => $disctrict,
                'province_id' => $province,
                'lat' => '-0.8837565',
                'long' => '119.894005'
            ]
        );

        $depot->products()->createMany(
            [
                ['name' => 'Bio', 'price' => 5000],
            ]
        );
    }
}
