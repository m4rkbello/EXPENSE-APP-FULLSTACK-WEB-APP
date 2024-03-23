<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class qr_code extends Model
{
    use HasFactory;

    protected $fillable = [
        'qrc_uuid',
        'qrc_user_id',
        'qrc_student_id',
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function student()
    {
        return $this->belongsTo(student::class);
    }



}
