@extends('layouts.master')
@section('title', 'Setlist - ' . $setlist->title)
@section('content')
    <div class="content">
        <div class="box z-1">
            <div class="content">
                <p>edit the setlist <i>{{ $setlist->title }}</i> ...</p>
                <div class="row">
                    <div class="col-sm-6">
                        @include('setlist._repertoire', $repertoire)
                    </div>
                    <div class="col-sm-6">
                        @include('setlist._setlistsongs', ['setlistSongs' => $setlist->setlistSongs])
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="block text-right">
                    <a class="button button-flat button-primary" href="{{ route('setlist.index') }}">Back to list</a>
                </div>
            </div>
        </div>
    </div>
@endsection