@extends('layouts.master')
@section('title', 'Songs')
@section('navbar-title', 'Songs')
@section('content')
    <div class="content">
        <div class="box">
            <div class="content">
                <h1>Songs</h1>
                <div class="block text-right">
                    <a class="button button-flat button-primary" href="{{ route('song.create') }}">Create new</a>
                </div>
                <ul class="list">
                    @foreach($songs as $song)
                        <li itemscope itemtype="http://schema.org/MusicGroup">
                            <span class="list-item-content">
                                <span itemprop="tracks" itemscope itemtype="http://schema.org/MusicRecording">
                                    <span itemprop="name">{{ $song->title }}</span>
                                </span>
                                <small>(
                                    <span itemprop="name">{{ $song->music_by }}</span> /
                                    {{ $song->lyrics_by }}
                                    )
                                </small>
                            </span>
                            <span class="list-item-buttons">
                                <a class="button button-icon button-flat tooltip" title="Show {{$song->title}}" href="{{ route('song.show', $song) }}">
                                    <span class="fa fa-eye"></span>
                                </a>
                                <a class="button button-icon button-flat tooltip" title="Edit {{$song->title}}" href="{{ route('song.edit', $song) }}">
                                    <span class="fa fa-pencil"></span>
                                </a>
                            </span>
                        </li>
                    @endforeach
                </ul>
            </div>
            <div class="block text-right">
                <a class="button button-flat button-primary" href="{{ route('song.create') }}">Create new</a>
            </div>
        </div>
    </div>
@endsection