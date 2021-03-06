@extends('layouts.master')
@section('title', 'Dashboard')
@section('content')
    <div class="content">
        <div class="box">
            <div class="content">
                <ol itemscope itemtype="http://schema.org/BreadcrumbList" class="breadcrumbs">
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="{{ route('dashboard') }}">
                            <span itemprop="name">Dashboard</span>
                        </a>
                        <meta itemprop="position" content="1"/>
                    </li>
                </ol>
                <h1>My FlowGig</h1>
                <p>Name: {{ $user->name }}</p>
                <p>{{ $user->email }}</p>
                <br>
                <h2>Upcoming gigs</h2>
                <div class="row">
                    <ul class="list menu-list">
                        @foreach($user->upcomingGigs()->sortBy('date') as $gig)
                            <li>
                                <span class="list-item-content">
                                <a class="block tooltip" title="Show gig" href="{{ route('gigs.show', $gig) }}">
                                    {{ $gig->composedTitle() }}
                                </a>
                                    <small class="inline">{{ $gig->event }}
                                         <a class="tooltip" title="Show {{ $gig->band->name }}"
                                           href="{{ route('bands.show', $gig->band) }}">{{ $gig->band->name }}</a>
                                    </small>
                                        @if($gig->public)
                                            <span class="label tooltip" title="The gig is made public">public</span>
                                        @endif
                                        @if(!$gig->confirmed)
                                            <span class="label tooltip"
                                                  title="The gig is not confirmed">unconfirmed</span>
                                        @endif
                                </span>
                            </li>
                        @endforeach
                    </ul>
                    <div class="clearfix"></div>
                </div>
                <h2>Bands</h2>
                <div class="block text-right">
                    <a class="button button-flat button-default" href="{{ route('bands.index') }}">Manage bands</a>
                </div>
                <div class="content">
                    <div class="row">
                        @foreach($user->bands as $band)
                            <div class='col-xs-12 col-sm-6 col-md-4'>
                                <div class="box primary z-1">
                                    <div class="box-header">
                                        <div class="content">
                                            <h3 class="box-title">
                                                <a class="tooltip" href="{{ route('bands.show', $band) }}" title="Show {{$band->name}}">{{ $band->name }}</a>
                                            </h3>
                                        </div>
                                    </div>
                                    <div class='content'>
                                        <ul class="list hover-list box-list">
                                            <li>
                                                <a href="{{ route('songs.index', $band) }}"
                                                   class="list-item-content tooltip" title="Show songs">
                                                    <span class="fa fa-music"></span> Songs:
                                                    <span class="float-right">{{ count($band->songs)}}</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="{{ route('gigs.index', $band) }}"
                                                   class="list-item-content tooltip" title="Show gigs">
                                                    <span class="fa fa-calendar"></span> Gigs:
                                                    <span class="float-right">{{ count($band->gigs)}}</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="{{ route('band-memberships.index', $band) }}"
                                                   class="list-item-content tooltip" title="Show members">
                                                    <span class="fa fa-group"></span> Members:
                                                    <span class="float-right">{{ count($band->members)}}</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="float-right">
                                            <a class="button button-flat button-default tooltip" href="{{ route('bands.show', $band) }}" title="Show {{$band->name}}">Show band</a>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection