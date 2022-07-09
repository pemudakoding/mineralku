<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('depots', function (Blueprint $table) {
            $table->string('address')
                ->after('name');

            $table->foreignId('urban_village_id')
                ->after('address')
                ->nullable();

            $table->foreignId('sub_district_id')
                ->after('urban_village_id')
                ->nullable();

            $table->foreignId('district_id')
                ->after('sub_district_id')
                ->nullable();

            $table->foreignId('province_id')
                ->after('district_id')
                ->nullable();

            $table->foreign('urban_village_id')
                ->references('id')
                ->on('urban_villages')
                ->onDelete('set null');

            $table->foreign('sub_district_id')
                ->references('id')
                ->on('sub_districts')
                ->onDelete('set null');

            $table->foreign('district_id')
                ->references('id')
                ->on('districts')
                ->onDelete('set null');

            $table->foreign('province_id')
                ->references('id')
                ->on('provinces')
                ->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('depots', function (Blueprint $table) {
            //
        });
    }
};
