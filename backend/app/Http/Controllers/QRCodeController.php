<?php

namespace App\Http\Controllers;
use App\Models\qr_code;

use Illuminate\Http\Request;

class QRCodeController extends Controller
{
    public function index()
    {
        return qr_code::all();
    }
}
