@extends('layouts.master', ['currentBand' => $band])
@section('title', 'Gigs')
@section('navbar-title', 'Gigs')
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
                        <a itemprop="item" href="{{ route('bands.show', $band) }}">
                            <span itemprop="name">{{ $band->name }}</span>
                        </a>
                        <meta itemprop="position" content="2"/>
                    </li>
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="{{ route('gigs.index', $band) }}">
                            <span itemprop="name">Gigs</span>
                        </a>
                        <meta itemprop="position" content="3"/>
                    </li>
                </ol>
                <h1>Gigs</h1>
                <div class="block text-right">
                    <a class="button button-flat button-default" href="{{ route('bands.show', $band) }}">Back to band</a>
                    <a class="button button-flat button-primary" href="{{ route('gigs.create', $band) }}">New gig</a>
                </div>
                <ul class="list menu-list">
                    @foreach($band->gigs->sortByDesc('date') as $gig)
                        <li>
                            <span class="list-item-content">
                                @if($gig->status == 'Proposed')
                                    <span class="fa fa-question-circle-o" title="Status: Proposed">&nbsp;</span>
                                @endif
                                @if($gig->status == 'Settled')
                                    <span class="fa fa-check-circle-o " title="Status: Settled">&nbsp;</span>
                                @endif
                                @if($gig->status == 'Public')
                                    <span class="fa fa-globe" title="Status: Public">&nbsp;</span>
                                @endif
                                {{ $gig->name }}
                                <small>{{ $gig->date() }}</small>
                            </span>
                            <span class="list-item-buttons">
                                <a class="button button-icon button-flat button-default tooltip"
                                   title="Show {{ $gig->name }}" href="{{ route('gigs.show', $gig) }}">
                                    <span class="fa fa-eye"></span>
                                </a>
                                <a class="button button-icon button-flat button-default tooltip"
                                   title="Edit {{ $gig->name }}" href="{{ route('gigs.edit', $gig) }}">
                                    <span class="fa fa-pencil"></span>
                                </a>
                                <form action="{{ route('gigs.destroy', $gig) }}" method="POST">
                                    {{ csrf_field() }}
                                    {{ method_field('DELETE') }}
                                    <button type="submit"
                                            onclick="return confirm('This deletes the gig {{ $gig->name }}')"
                                            class="button button-icon button-flat button-default tooltip"
                                            title="Delete {{ $gig->name }}">
                                         <span class="fa fa-trash"></span>
                                    </button>
                                 </form>
                            </span>
                        </li>
                    @endforeach
                </ul>
                <div class="block text-right">
                    <a class="button button-flat button-default" href="{{ route('bands.show', $band) }}">Back to band</a>
                    <a class="button button-flat button-primary" href="{{ route('gigs.create', $band) }}">New gig</a>
                </div>
            </div>
        </div>
    </div>
@endsection