@extends('layouts.master', ['currentBand' => $gig->band])
@section('title', $gig->name . ' - Edit')
@section('navbar-title', $gig->name)
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
                        <a itemprop="item" href="{{ route('bands.show', $gig->band) }}">
                            <span itemprop="name">{{ $gig->band->name }}</span>
                        </a>
                        <meta itemprop="position" content="2"/>
                    </li>
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="{{ route('gigs.index', $gig->band) }}">
                            <span itemprop="name">Gigs</span>
                        </a>
                        <meta itemprop="position" content="3"/>
                    </li>
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="{{ route('gigs.show', $gig) }}">
                            <span itemprop="name">{{$gig->name}}</span>
                        </a>
                        <meta itemprop="position" content="4"/>
                    </li>
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="{{ route('gigs.edit', $gig) }}">
                            <span itemprop="name">Edit gig</span>
                        </a>
                        <meta itemprop="position" content="5"/>
                    </li>
                </ol>
                <h1>{{ $gig->name }}</h1>
                <form action="{{ route('gigs.update', $gig) }}" method="POST">
                    {{ csrf_field() }}
                    {{ method_field('PUT') }}
                    <div class="row">
                        <div class="input-group col-sm-4">
                            <input type="text" name="name" id="name" value="{{ $gig->name }}"/>
                            <label for="name">Name</label>
                        </div>

                        <div class="input-group col-sm-4">
                            <input type="text" name="date" id="date" value="{{ $gig->date() }}" />
                            <label for="date">Date</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-group col-sm-4">
                            <input type="text" name="venue" id="venue" value="{{ $gig->venue }}"/>
                            <label for="venue">Venue</label>
                        </div>
                        <div class="input-group col-sm-4">
                            <input type="text" name="location" id="location" value="{{ $gig->location }}"/>
                            <label for="location">Location</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-group col-sm-12">
                            <label for="description" class="textarea-label">Description:</label>
                            <textarea name="description" id="description">{{ $gig->description }}</textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-group col-sm-12">
                            <label for="internal-info" class="textarea-label">Internal information:</label>
                            <textarea name="internal_info" id="internal-info">{{ $gig->internal_info }}</textarea>
                        </div>
                    </div>
                    <div class="input-group">
                        <input name="confirmed" id="confirmed" type="checkbox"
                           @if(old('confirmed', $gig->confirmed)) checked @endif/>
                        <label for="confirmed" class="input-field-height">Confirmed</label>
                    </div>
                    <div class="row">
                        <div class="input-group col-sm-4">
                            <input name="public" id="public" type="checkbox"
                               @if(old('public', $gig->public)) checked @endif/>
                            <label for="public" class="input-field-height">Public</label>
                        </div>
                        <div class="input-group col-sm-4">
                            <div id="publicInfo">
                                <small>
                                    <b>NB!</b> Setting the gig to <i>Public</i> means that the
                                    information entered on this page, except <i>Internal information</i>, is made available to anyone.
                                    <a id="api-info" title="In a future version og FlowGig, public gigs might be exposed
                                    through an open API i.e. to be shown as a concert list on a web page.">More ...</a>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-group col-sm-4">
                            <button type="submit" class="button button-flat button-primary">Update</button>
                        </div>
                    </div>
                </form>
                @include('errors.validation-errors')
                @include('meta.user-timestamps', ['model' => $gig])
                <div class="block text-right">
                    <a class="button button-flat button-default" href="{{ route('gigs.index', $gig->band) }}">
                        Back to gig list
                    </a>
                </div>
            </div>
        </div>
    </div>

    {{-- TODO: Remove temporary date-picker --}}
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script>
        $(function () {
            $("#date").datepicker({
                dateFormat: "yy-mm-dd"
            });
            $("#api-info").tooltip();

            togglePublicFields($("#public").is(':checked'));
        });

        function showPublicFields() {
            $("#publicInfo").show();
        }

        function hidePublicFields() {
            $("#publicInfo").hide();
        }

        function togglePublicFields(show) {
            show ? showPublicFields() : hidePublicFields();
        }

        $("#public").change(function () {
            togglePublicFields(this.checked);
        });
    </script>

    <script src="/js/autosize.min.js"></script>
    <script>
        autosize(document.getElementById('description'));
    </script>
@endsection