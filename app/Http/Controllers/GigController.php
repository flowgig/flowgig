<?php

namespace App\Http\Controllers;

use App\Band;
use App\Gig;
use Illuminate\Http\Request;

use App\Http\Requests;

class GigController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Band $band
     * @return \Illuminate\Http\Response
     */
    public function index($bandId)
    {
        $band = Band::with('gigs')->find($bandId);

        return view('gigs.index', ['band' => $band]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Band $band
     * @return \Illuminate\Http\Response
     */
    public function create(Band $band)
    {
        return view('gigs.create', ['band' => $band]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Band $band
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Band $band)
    {
        $this->validate($request, [
            'name' => 'required|max:60|not_in:_system_'
        ]);

        $gig = new Gig();
        $gig->band()->associate($band);
        $gig->fill($request->all());
        $gig->save();

        // TODO: Flash setlist stored

        return redirect()->route('gigs.index', $gig->band);
    }

    /**
     * Display the specified resource.
     *
     * @param Gig $gig
     * @return \Illuminate\Http\Response
     */
    public function show(Gig $gig)
    {
        return view('gigs.show', ['gig' => $gig]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Gig $gig
     * @return \Illuminate\Http\Response
     */
    public function edit(Gig $gig)
    {
        return view('gigs.edit', ['gig' => $gig]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Gig $gig
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Gig $gig)
    {
        $this->validate($request, [
            'name' => 'required|max:60|not_in:_system_'
        ]);

        $gig->update($request->all());

        // TODO: Flash gig updated

        return redirect()->route('gigs.index', $gig->band);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Gig $gig
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gig $gig)
    {
        $gig->delete();

        // TODO: Flash gig deleted

        return redirect()->route('gigs.index', $gig->band);
    }
}
