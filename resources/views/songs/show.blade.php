@extends('layouts.master')
@section('title', 'Song - ' . $song->title)
@section('navbar-title', $song->title)
@section('content')
    <div class="content">
        <div class="box">
            <div class="content">
                <ol itemscope itemtype="http://schema.org/BreadcrumbList" class="breadcrumbs">
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="{{ route('songs.index', $song->band) }}">
                            <span itemprop="name">Songs</span>
                        </a>
                        <meta itemprop="position" content="1"/>
                    </li>
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="{{ route('songs.show', $song) }}">
                            <span itemprop="name">{{$song->title}}</span>
                        </a>
                        <meta itemprop="position" content="2"/>
                    </li>
                </ol>
                <h1>{{ $song->title }}</h1>
                <p>by <a href="{{ route('bands.show', $song->band) }}">{{ $song->band->name }}</a></p>
                <div class="block text-right">
                    <a class="button button-flat button-default" href="{{ route('songs.index', $song->band) }}">Back to list</a>
                </div>
            </div>
        </div>
    </div>
@endsection