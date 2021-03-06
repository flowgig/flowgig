@extends('layouts.master', ['currentBand' => $setlist->gig->band])
@section('title', 'Setlist - ' . $setlist->gig->composedTitle())
@section('actionbar')
    @include('setlists.export-modal')
@endsection
@section('content')
    <div class="content">
        <div class="box">
            <div class="content">
                <ol itemscope itemtype="http://schema.org/BreadcrumbList" class="breadcrumbs">
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="{{ route('bands.index') }}">
                            <span itemprop="name">Bands</span>
                        </a>
                        <meta itemprop="position" content="1"/>
                    </li>
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="{{ route('bands.show', $setlist->gig->band) }}">
                            <span itemprop="name">{{ $setlist->gig->band->name }}</span>
                        </a>
                        <meta itemprop="position" content="2"/>
                    </li>
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="{{ route('gigs.index', $setlist->gig->band) }}">
                            <span itemprop="name">Gigs</span>
                        </a>
                        <meta itemprop="position" content="3"/>
                    </li>
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="{{ route('gigs.show', $setlist->gig) }}">
                            <span itemprop="name">{{ $setlist->gig->composedTitle() }}</span>
                        </a>
                        <meta itemprop="position" content="4"/>
                    </li>
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="{{ route('setlists.show', $setlist) }}">
                            <span itemprop="name">Setlist</span>
                        </a>
                        <meta itemprop="position" content="4"/>
                    </li>
                </ol>
                @if($setlist->gig->event)
                    <p class="pre-heading">Setlist for {{ $setlist->gig->band->name }} at </p>
                    <h1>{{ $setlist->gig->event }}</h1>
                @else
                    <p class="pre-heading">Setlist for</p>
                    <h1>{{ $setlist->gig->band->name }}</h1>
                @endif
                <p class="post-heading">{{ $setlist->gig->composedTitle() }}</p>
                <div class="block text-right">
                    <a class="button button-flat button-default" href="{{ route('gigs.show', $setlist->gig) }}">
                        Back to gig
                    </a>
                    <a class="button button-icon button-flat button-default tooltip" title="Edit setlist for the gig"
                       href="{{ route('setlists.edit', $setlist) }}"><span class="fa fa-pencil"></span>
                    </a>
                </div>
                <small>{{ $setlist->setlistSongs->count() }} songs</small>
                <div>
                <ul class="list">
                    @foreach($setlist->setlistSongs->sortBy('number_in_list') as $setlistSong)
                    <li>
                        <span class="list-item-content single-line">
                            <span>{{ $setlistSong->song->title }}</span>
                            @if($setlistSong->key)
                                <span style="margin-left: 10px; font-size: .8em">{{ $setlistSong->key }}</span>
                            @endif
                            @if($setlistSong->comment)
                                <i style="margin: 0 5px 0 10px; font-size: .8em">{{ $setlistSong->comment }}</i>
                            @endif
                        </span>
                        <span class="list-item-buttons">
                            @if(count($setlistSong->song->links) > 0)
                                <button class="toggle-elements button button-icon button-flat button-default tooltip"
                                        title="{{ $setlistSong->song->title }} links"
                                        value="song-links-modal-{{ $setlistSong->id }}">
                                    <span class="fa fa-link"></span>
                                </button>
                            @endif
                            <a class="button button-icon button-flat button-default tooltip"
                               title="Show {{ $setlistSong->song->title }} in repertoire"
                               href="{{ route('songs.show', $setlistSong->song) }}">
                                <i class="fa fa-list" aria-hidden="true"></i>
                            </a>
                        </span>
                    </li>
                        <div class="modal song-links-modal-{{ $setlistSong->id }}">
                            <div class="modal-container">
                                <div class="modal-header">
                                    Links - {{ $setlistSong->song->title }}:
                                    <button class="modal-close toggle-elements"
                                            value="song-links-modal-{{ $setlistSong->id }}">
                                    </button>
                                </div>
                                <div class="modal-content">
                                    <ul class="list">
                                        @foreach($setlistSong->song->links as $link)
                                            <li>
                                                <span class="list-item-content single-line">
                                                    <a class="tooltip" href="{{ $link->url }}" target="_blank"
                                                       title="{{ $link->url }}">{{ $link->text ?? $link->url }}</a>
                                                </span>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </ul>
                </div>
                <small>{{ $setlist->setlistSongs->count() }} songs</small>
                <div class="float-right">
                    @if($setlist->setlistSongs->count() > 0)
                    <button onclick="showExportSetlistModal()" class="tooltip button button-flat button-default"
                            title="Create PDF from setlist">
                                <span class="icon fa fa-file-pdf-o">
                                </span>
                        Create PDF
                    </button>
                    @endif
                </div>
                <div style="margin-top: 10px; visibility: hidden; ">dirty spacer</div>
                @include('meta.user-timestamps', ['model' => $setlist])
                <div class="block text-right">
                    <a class="button button-flat button-default" href="{{ route('gigs.show', $setlist->gig) }}">
                        Back to gig
                    </a>
                    <a class="button button-icon button-flat button-default tooltip" title="Edit setlist for the gig"
                       href="{{ route('setlists.edit', $setlist) }}"><span class="fa fa-pencil"></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
@endsection
