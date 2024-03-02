<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\student;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        student::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
                'std_fname' => 'required',
                'std_mname' => 'required',
                'std_lname' => 'required',
                'std_address' => 'required',
                'std_age' => 'required',
                'status' => 'required'
            ]);

        return student::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return student::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $student = student::find($id);
        $student->update($request->all());
        return $student;

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return student::destroy($id);
    }

    public function search($name)
    {
        return student::where('std_fname', 'like', '%'.$name.'%')
        ->orWhere('std_lname', 'like', '%'.$name.'%')
        ->get();
    }
}
