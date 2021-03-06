<?php

namespace App\Http\Controllers;

use App\Band;
use App\Services\SongService;
use App\Song;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Auth;

class SongController extends Controller
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
     * @param $bandId
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function index($bandId)
    {
        $band = Band::with('songs')->find($bandId);

        $this->authorize('view', $band);

        return view('songs.index', ['band' => $band]);
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
        $this->authorize('createSongs', $band);

        return view('songs.create', ['band' => $band]);
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
        $this->authorize('createSongs', $band);

        $this->validate($request, [
            'title' => 'required|string|max:80',
            'artist' => 'nullable|string|max:80',
            'music_by' => 'nullable|string|max:80',
            'lyrics_by' => 'nullable|string|max:80',
            'key' => 'nullable|string|max:3',
            'bpm' => 'nullable|numeric|min:0',
            'duration' => 'nullable|numeric|min:0',
            'intensity' => 'nullable|numeric|min:0|max:10',
        ]);

        $song = SongService::create($request->all(), $band, Auth::user());

        // TODO: Flash song stored

        return redirect()->route('songs.show', $song);
    }

    /**
     * Display the specified resource.
     *
     * @param Song $song
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show(Song $song)
    {
        $this->authorize('view', $song);

        return view('songs.show', ['song' => $song]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Song $song
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function edit(Song $song)
    {
        $this->authorize('update', $song);

        return view('songs.edit', ['song' => $song]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Song $song
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(Request $request, Song $song)
    {
        $this->authorize('update', $song);

        $this->validate($request, [
            'title' => 'required|string|max:80',
            'artist' => 'nullable|string|max:80',
            'music_by' => 'nullable|string|max:80',
            'lyrics_by' => 'nullable|string|max:80',
            'key' => 'nullable|string|max:3',
            'bpm' => 'nullable|numeric|min:0',
            'duration' => 'nullable|numeric|min:0',
            'intensity' => 'nullable|numeric|min:0|max:10',
        ]);

        $song->fill($request->all());
        if ($song->isDirty())
            $song->updater()->associate(Auth::user());
        $song->save();

        // TODO: Flash song updated

        return redirect()->route('songs.show', $song);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Song $song
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Exception
     */
    public function destroy(Song $song)
    {
        $this->authorize('delete', $song);

        $song->updater()->associate(Auth::user());
        $song->save();
        $song->delete();

        // TODO: Flash song deleted

        return redirect()->route('songs.index', $song->band);
    }
}
