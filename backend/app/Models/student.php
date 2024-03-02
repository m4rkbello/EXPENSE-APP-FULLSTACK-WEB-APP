<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class student extends Model
{
    use HasFactory;

    protected $fillable = [
        'std_fname',
        'std_mname',
        'std_lname',
        'std_address',
        'std_age',
        'status'
    ];
}
