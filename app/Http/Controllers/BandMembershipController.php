<?php

namespace App\Http\Controllers;

use App\Band;
use App\BandMembership;
use App\Http\Requests;
use Illuminate\Http\Request;

class BandMembershipController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param $bandId
     * @return \Illuminate\Http\Response
     */
    public function index($bandId)
    {
        $band = Band::with('members')->find($bandId);

        return view('band-memberships.index', ['band' => $band]);
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
        $bandMembership = new BandMembership();
        $bandMembership->band()->associate($band);
        $bandMembership->fill($request->all());
        $bandMembership->save();

        // TODO: Flash band membership created

        return redirect()->route('band-memberships.index', $band);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param BandMembership $bandMembership
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BandMembership $bandMembership)
    {
        $bandMembership->update($request->all());

        // TODO: Flash band membership updated

        return redirect()->route('band-memberships.index', $bandMembership->band);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param BandMembership $bandMembership
     * @return \Illuminate\Http\Response
     */
    public function destroy(BandMembership $bandMembership)
    {
        $bandMembership->delete();

        // TODO: Flash band membership deleted

        return redirect()->route('band-memberships.index', $bandMembership->band);
    }
}
