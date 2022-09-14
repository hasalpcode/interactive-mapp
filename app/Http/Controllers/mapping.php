<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pays;

class mapping extends Controller
{
    public function index()

    {
        //$pays = DB::table('pays')->where('pays.cluster',1)->get();
        
        return view('mapp.index');
    }

    public function questions()
    {
        return view('mapp.questionnaire');
    }
}
