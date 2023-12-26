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
        Schema::create('typeoflaundries', function (Blueprint $table) {
            $table->increments('id_typeoflaundries');
            $table->string('name_typeoflaundries');
            $table->string('price');
            $table->decimal('quatity');
            $table->integer('id_branch')->unsigned();
            $table->foreign('id_branch')->references('id_branch')->on('branches')->onDelete('cascade');
            $table->integer('id_service')->unsigned();
            $table->foreign('id_service')->references('id_service')->on('service')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('typeoflaundries');
    }
};
