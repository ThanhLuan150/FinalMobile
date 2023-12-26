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
        Schema::create('fabricsofteners', function (Blueprint $table) {
            $table->increments('id_fabricsofteners');
            $table->string('namewfabricsofteners');
            $table->integer('id_branch')->unsigned();
            $table->foreign('id_branch')->references('id_branch')->on('branches')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fabricsofteners');
    }
};
