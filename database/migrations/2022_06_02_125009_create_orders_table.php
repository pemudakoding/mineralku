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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('depot_id')->nullable();
            $table->foreignId('user_id')->nullable();
            $table->integer('quantity');
            $table->enum('shipping_detail', ['pickup', 'delivery']);
            $table->smallInteger('is_delivery_now');
            $table->timestamp('delivery_date');
            $table->float('total_price');
            $table->timestamps();

            $table->foreign('depot_id')
                ->references('id')
                ->on('depots')
                ->onDelete('set null');
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
