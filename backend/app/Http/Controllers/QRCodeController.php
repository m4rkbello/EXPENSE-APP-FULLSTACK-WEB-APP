<?php

namespace App\Http\Controllers;
use App\Models\qrcode;

use Illuminate\Http\Request;

class QRCodeController extends Controller
{
    public function index()
    {
        return qrcode::all();
    }
}
