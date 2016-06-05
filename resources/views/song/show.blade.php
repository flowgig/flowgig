@extends('layouts.master')
@section('title', 'Song - ' . $song->title)
@section('content')
    <div class="content">
        <div class="box z-1">
            <div class="content">
                <p>show the song <i>{{ $song->title }}</i> ...</p>
                <div class="block text-right">
                    <a class="button button-flat button-primary" href="{{ route('song.index') }}">Back to list</a>
                </div>
            </div>
        </div>
    </div>
@endsection