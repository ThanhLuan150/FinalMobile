<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id_order');
            $table->integer('id_user')->unsigned();
            $table->foreign('id_user')->references('id_user')->on('users')->onDelete('cascade');
            $table->integer('id_branch')->unsigned();
            $table->foreign('id_branch')->references('id_branch')->on('branches')->onDelete('cascade');
            $table->integer('id_service')->unsigned();
            $table->foreign('id_service')->references('id_service')->on('service')->onDelete('cascade');
            $table->integer('id_typeoflaundries')->unsigned();
            $table->foreign('id_typeoflaundries')->references('id_typeoflaundries')->on('typeoflaundries')->onDelete('cascade');
            $table->integer('id_transports')->unsigned();
            $table->foreign('id_transports')->references('id_transports')->on('transports')->onDelete('cascade');
            $table->integer('id_washingliquids')->unsigned();
            $table->foreign('id_washingliquids')->references('id_washingliquids')->on('washingliquids')->onDelete('cascade');
            $table->integer('id_fabricsofteners')->unsigned();
            $table->foreign('id_fabricsofteners')->references('id_fabricsofteners')->on('fabricsofteners')->onDelete('cascade');
            $table->integer('id_extraservices')->unsigned();
            $table->foreign('id_extraservices')->references('id_extraservices')->on('extraservices')->onDelete('cascade');
            $table->integer('id_voucher')->unsigned();
            $table->foreign('id_voucher')->references('id_voucher')->on('vouchers')->onDelete('cascade');
            $table->dateTime('delivery_time')->nullable();
            $table->string('address');
            $table->string('note');
            $table->decimal('total_price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
