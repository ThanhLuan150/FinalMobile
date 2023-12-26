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
        Schema::create('payments', function (Blueprint $table) {
            $table->integer('id_payment')->unsigned();
            $table->integer('id_order')->unsigned();
            $table->foreign('id_order')->references('id_order')->on('orders')->onDelete('cascade');
            $table->integer('id_user')->unsigned();
            $table->foreign('id_user')->references('id_user')->on('users')->onDelete('cascade');
            $table->string('partnerCode');
            $table->string('orderId');
            $table->string('requestId');
            $table->string('amount');
            $table->string('orderInfo');
            $table->string('orderType');
            $table->string('transId');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
