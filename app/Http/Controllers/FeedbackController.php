<?php

namespace App\Http\Controllers;

use App\Http\Resources\FeedbackCollection;
use App\Models\Feedback;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $feedback = new FeedbackCollection(Feedback::orderBy('created_at','desc')->get());
        return Inertia::render("Dashboard", [
            "feedback" => $feedback,
            "myFeedback" => false
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $feedback = new Feedback();
        $feedback->email = auth()->user()->email;
        $feedback->name = $request->name;
        $feedback->feedback = $request->feedback;
        $feedback->rate = $request->rating;
        $feedback->save();
        return redirect()->back()->with('message', 'feedback saved');
    }

    /**
     * Display the specified resource.
     */
    public function show(Feedback $feedback, string $email)
    {
        $feedback = new FeedbackCollection(Feedback::where("email", $email)->get());
        return Inertia::render("Dashboard", [
            "feedback" => $feedback,
            "myFeedback" => true
    ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, Feedback $feedback, string $id)
    {
        $feedback->where('id', $id)->update([
            'name' => $request->name,
            'feedback' => $request->feedback,
            'rate' => $request->rate,
        ]);

        return redirect()->back()->with('message', 'Feedback Updated Succesfully');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update( Feedback $feedback, string $id)
    {   
       $data =  $feedback->where('id', $id)->first();
        return response()->json(array('response' => $data), 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feedback $feedback)
    {
        //
    }
}
