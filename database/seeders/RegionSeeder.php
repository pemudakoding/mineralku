<?php

namespace Database\Seeders;

use App\Models\District;
use App\Models\Province;
use App\Models\SubDistrict;
use App\Models\UrbanVillage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class RegionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $provinces = $this->resolveForProvinces();
        $districts = $this->resolveForDistricts($provinces);
        $subDistricts = $this->resolveForSubDistricts($districts);
        $this->resolveForUrbanVillage($subDistricts);
    }

    protected function resolveForProvinces(): array
    {
        $response = $this->client()->get('provinsi');

        $provinces = $response->json('provinsi');

        $tempProvinces = [];
        foreach($provinces as $province){
            if(Str::contains($province['nama'], 'Sulawesi')){
                $tempProvinces[] = [
                    'id' => $province['id'],
                    'name' => $province['nama'],
                    'created_at' => now(),
                    'updated_at' => now()
                ];
            }
        }

        Province::insert($tempProvinces);

        return $tempProvinces;
    }

    protected function resolveForDistricts(array $provinces): array
    {

        $tempDistrict = [];
        foreach($provinces as $province){
            $response = $this->client()->get('kota', [
                'id_provinsi' => $province['id']
            ]);

            $districts = $response->json('kota_kabupaten');

            foreach($districts as $district){
                $tempDistrict[] = [
                    'id' => $district['id'],
                    'name' => $district['nama'],
                    'province_id' => $district['id_provinsi'],
                    'created_at' => now(),
                    'updated_at' => now()
                ];
            }
        }

        District::insert($tempDistrict);

        return $tempDistrict;
    }

    protected function resolveForSubDistricts(array $districts): array
    {
        $tempSubDistrict = [];
        foreach($districts as $district){
            $response = $this->client()->get('kecamatan', [
                'id_kota' => $district['id'],
            ]);

            $subDistricts = $response->json('kecamatan');

            foreach($subDistricts as $subDistrict){
                $tempSubDistrict[] = [
                    'id' => $subDistrict['id'],
                    'name' => $subDistrict['nama'],
                    'district_id' => $subDistrict['id_kota'],
                    'created_at' => now(),
                    'updated_at' => now()
                ];
            }
        }

        SubDistrict::insert($tempSubDistrict);

        return $tempSubDistrict;
    }

    protected function resolveForUrbanVillage(array $subDistricts): array
    {
        $tempUrbanVillages = [];
        foreach($subDistricts as $subDistrict){

            $response = $this->client()->get('kelurahan', [
                'id_kecamatan' => $subDistrict['id'],
            ]);

            $urbanVillages = $response->json('kelurahan');

            foreach($urbanVillages as $urbanVilage){
                $tempUrbanVillages[] = [
                    'id' => $urbanVilage['id'],
                    'name' => $urbanVilage['nama'],
                    'sub_district_id' => $urbanVilage['id_kecamatan'],
                    'created_at' => now(),
                    'updated_at' => now()
                ];
            }
        }

        UrbanVillage::insert($tempUrbanVillages);

        return $tempUrbanVillages;
    }

    protected function client()
    {
        return Http::timeout(5)
            ->retry(5)
            ->baseUrl('http://dev.farizdotid.com/api/daerahindonesia');
    }

    protected function apiKey()
    {
        return 'ecd69dfae8fe11a4efe671e1db1c8b121bdd31bab6242072628dad57158ecfd4';
    }
}
