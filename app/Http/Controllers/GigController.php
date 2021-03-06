<?php

namespace App\Http\Controllers;

use App\Band;
use App\Gig;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Http\Requests;

class GigController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'isVerified']);
    }

    /**
     * Display a listing of the resource.
     *
     * @param Band $band
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function index($bandId)
    {
        $band = Band::with('gigs')->find($bandId);

        $this->authorize('view', $band);

        return view('gigs.index', ['band' => $band]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Band $band
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function create(Band $band)
    {
        $this->authorize('createGigs', $band);

        return view('gigs.create', ['band' => $band]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Band $band
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function store(Request $request, Band $band)
    {
        $this->authorize('createGigs', $band);

        $this->validate($request, [
            'date' => 'required|date_format:Y-m-d',
            'venue' => 'nullable|string|max:80',
            'location' => 'nullable|string|max:80',
            'event' => 'nullable|string|max:80',
            'description' => 'nullable|string',
            'internal_info' => 'nullable|string',
        ]);

        $gig = new Gig();
        $gig->creator()->associate(Auth::user());
        $gig->band()->associate($band);
        $gig->fill($request->all());
        $gig->confirmed = $request->confirmed ? true : false;
        $gig->public = $request->public ? true : false;
        $gig->save();

        // TODO: Flash gig stored

        return redirect()->route('gigs.show', $gig);
    }

    /**
     * Display the specified resource.
     *
     * @param Gig $gig
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show(Gig $gig)
    {
        $this->authorize('view', $gig);

        return view('gigs.show', ['gig' => $gig]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Gig $gig
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function edit(Gig $gig)
    {
        $this->authorize('update', $gig);

        return view('gigs.edit', ['gig' => $gig]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Gig $gig
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(Request $request, Gig $gig)
    {
        $this->authorize('update', $gig);

        $this->validate($request, [
            'date' => 'required|date_format:Y-m-d',
            'venue' => 'nullable|string|max:80',
            'location' => 'nullable|string|max:80',
            'event' => 'nullable|string|max:80',
            'description' => 'nullable|string',
            'internal_info' => 'nullable|string',
        ]);

        $gig->fill($request->all());
        $gig->confirmed = $request->confirmed ? true : false;
        $gig->public = $request->public ? true : false;

        if ($gig->isDirty())
            $gig->updater()->associate(Auth::user());
        $gig->save();

        // TODO: Flash gig updated

        return redirect()->route('gigs.show', $gig);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Gig $gig
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Exception
     */
    public function destroy(Gig $gig)
    {
        $this->authorize('delete', $gig);

        $gig->delete();

        // TODO: Flash gig deleted

        return redirect()->route('gigs.index', $gig->band);
    }
}
