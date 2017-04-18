<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PortfolioController extends Controller
{

    function index(Request $request) {

        return view('template', [
            'gallery' => \App\Gallery::orderBy('id_cat')->get()
        ]);
    }
}
