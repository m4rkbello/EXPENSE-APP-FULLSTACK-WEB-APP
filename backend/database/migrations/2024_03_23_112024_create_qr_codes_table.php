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
        Schema::create('qr_codes', function (Blueprint $table) {
            $table->id();
            $table->string('qrc_uuid');
            $table->unsignedBigInteger('qrc_user_id')->nullable();
            $table->foreign('qrc_user_id')->references('id')->on('users');
            $table->unsignedBigInteger('qrc_student_id')->nullable();
            $table->foreign('qrc_student_id')->references('id')->on('students');
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('qr_codes');
    }
};
