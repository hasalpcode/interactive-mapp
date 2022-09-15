<?php

namespace App\Http\Controllers;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Pays;
use App\Models\Questionnaire;
use DB;
use Redirect,Response;
class mapping extends Controller
{
    public function index()

    {
        //$pays = DB::table('pays')->where('pays.cluster',1)->get();
        
        $pays = DB::table('pays')->get();
        return view('mapp.index',compact('pays'));
    }

    public function questions()
    {
        $pays = DB::table('pays')->get();
        $datesys = Carbon::now()->format('d/m/Y');
        return view('mapp.questionnaire',compact('pays','datesys'));
    }
    public function store(Request $request)
    {
         
        $newData = new Questionnaire();
        $newData->q1 = $request->q1;
        $newData->q2 = $request->q2;
        $newData->q3 = $request->q3;
        $newData->q4 = $request->q4;
        $newData->q5 = $request->q5;
        $newData->q6 = $request->q6;
        $newData->q7 = $request->q7;
        $newData->q8 = $request->q8;
        $newData->q9 = $request->q9;
        $newData->q10 = $request->q10;
        $newData->q11 = $request->q11;
        $newData->q12 = $request->q12;
        $newData->q13 = $request->q13;
        $newData->q14 = $request->q14;
        $newData->q15 = $request->q15;
        $newData->q16 = $request->intervention;
        $newData->id_pays = $request->pays;
        $newData->programme = $request->programme;
        $newData->repondant = $request->repondant;
        $newData->date = $request->date;

       $newData->save();
       return redirect()->route('index')->with('success',' enregistrement succes');
    }

    public function show()

    {
        //$pays = DB::table('pays')->where('pays.cluster',1)->get();
        
        $pays = DB::table('questionnaires')->get();
       // return view('mapp.index',compact('pays'));
        //return response()->json($pays);
        return Response::json($pays);
    }
}
