@extends('layouts.master', ['currentBand' => $song->band])
@section('title', 'Edit song - ' . $song->title)
@section('content')
    <div class="content">
        <div class="box">
            <p class="content">
                <ol itemscope itemtype="http://schema.org/BreadcrumbList" class="breadcrumbs">
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="{{ route('bands.index') }}">
                            <span itemprop="name">Bands</span>
                        </a>
                        <meta itemprop="position" content="1"/>
                    </li>
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="{{ route('bands.show', $song->band) }}">
                            <span itemprop="name">{{ $song->band->name }}</span>
                        </a>
                        <meta itemprop="position" content="2"/>
                    </li>
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="{{ route('songs.index', $song->band_id) }}">
                            <span itemprop="name">Songs</span>
                        </a>
                        <meta itemprop="position" content="3"/>
                    </li>
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="{{ route('songs.show', $song) }}">
                            <span itemprop="name">{{$song->title}}</span>
                        </a>
                        <meta itemprop="position" content="4"/>
                    </li>
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="{{ route('songs.edit', $song) }}">
                            <span itemprop="name">Edit song</span>
                        </a>
                        <meta itemprop="position" content="5"/>
                    </li>
                </ol>
                <h1>{{ $song->title }}</h1>
                <form action="{{ route('songs.update', $song) }}" method="POST">
                    {{ csrf_field() }}
                    {{ method_field('PUT') }}
                    <div class="row">
                        <div class="input-group col-sm-6">
                            <input type="text" name="title" id="title" value="{{ $song->title }}" placeholder="The song title"/>
                            <label for="title">Title</label>
                        </div>
                        <div class="input-group col-sm-6">
                            <input type="text" name="artist" id="artist" value="{{ $song->artist }}" placeholder="The original artist/band"/>
                            <label for="artist">Artist</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-group col-sm-6">
                            <input type="text" name="lyrics_by" id="lyrics-by" value="{{ $song->lyrics_by }}" placeholder="The lyrics author"/>
                            <label for="lyrics-by">Lyrics by</label>
                        </div>
                        <div class="input-group col-sm-6">
                            <input type="text" name="music_by" id="music-by" value="{{ $song->music_by }}" placeholder="The music composer"/>
                            <label for="music-by">Music by</label>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="row">
                        <div class="input-group col-sm-12">
                            <p>You may set the following values different every time you add this song to a setlist,
                                but values entered here will be used as default</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-group col-sm-6">
                            @include('songs.key-select', ['key' => $song->key])
                            <label for="key">Key</label>
                        </div>
                        <div class="input-group col-sm-6">
                            <input type="number" name="bpm" min="0" value="{{ $song->bpm }}"/>
                            <label for="bpm">BPM</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-group col-sm-6">
                            <input type="number" name="duration" min="0" value="{{ $song->duration }}"/>
                            <label for="duration">Duration</label>
                        </div>
                        <div class="input-group col-sm-6">
                            <input type="number" name="intensity" min="1" max="10" value="{{ $song->intensity }}"/>
                            <label for="intensity">Intensity</label>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="row">
                        <div class="input-group col-sm-4">
                            <button type="submit" class="button button-flat button-primary">Update</button>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </form>
                @include('errors.validation-errors')
                @include('meta.user-timestamps', ['model' => $song])
                <div class="block text-right">
                    <a class="button button-flat button-default" href="{{ route('songs.index', $song->band_id) }}">Back to song list</a>
                </div>
            </div>
        </div>
    </div>
@endsection