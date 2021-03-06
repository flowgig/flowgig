@extends('layouts.master')
@section('title', 'Account - ' . $user->name)
@section('content')
    <div class="content">
        <div class="box">
            <div class="content">
                <ol itemscope itemtype="http://schema.org/BreadcrumbList" class="breadcrumbs">
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="{{ route('account.show', $user) }}">
                            <span itemprop="name">{{ $user->name }}</span>
                        </a>
                        <meta itemprop="position" content="1"/>
                    </li>
                </ol>
                <h1>My account</h1>
                <div class="text-right">
                    <a class="button button-icon button-flat button-default tooltip" title="Edit account"
                       href="{{ route('account.edit') }}"><span class="fa fa-pencil"></span>
                    </a>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <ul class="list">
                            <li><b>Name: </b> {{ $user->name }}</li>
                            <li><b>E-mail: </b> {{ $user->email }}</li>
                            <li><b>Account created: </b> {{ $user->created_at->toDateString() }}</li>
                        </ul>
                    </div>
                </div>
                @if($user->invitations()->count() > 0)
                <h2>Invitations</h2>
                <div class="row">
                    <div class="col-sm-12">
                        <ul class="list menu-list">
                            @foreach($user->invitations()->for(['band'])->get() as $invitation)
                                <li>
                                    <span class="list-item-content">You've been invited to
                                        be a member of the band <b>{{ $invitation->invitational->name }}</b>.
                                        <br/>
                                        <small>The invitation was made by
                                            {{ $invitation->creator->name }} {{ $invitation->created_at->diffForHumans() }}
                                                <p><i>&nbsp;{{ $invitation->message }}</i></p>
                                        </small>
                                    </span>
                                    <span class="list-item-buttons">
                                        @if($invitation->isPending())
                                            <form action="{{ route('band-invitations.accept', $invitation) }}" method="POST">
                                                {{ csrf_field() }}
                                                {{ method_field('PUT') }}
                                                <button onclick="return confirm('This accepts the invitation')"
                                                        class="button button-icon button-flat button-default tooltip"
                                                        title="Accept invitation" style="margin-top: 17px">Accept
                                                </button>
                                            </form>
                                            <form action="{{ route('band-invitations.decline', $invitation) }}" method="POST">
                                                {{ csrf_field() }}
                                                {{ method_field('PUT') }}
                                                <button type="submit"
                                                        onclick="return confirm('This declines the invitation')"
                                                        class="button button-icon button-flat button-default tooltip"
                                                        title="Decline invitation">Decline
                                                </button>
                                          </form>
                                        @else
                                            <p style="font-size: 0.7em; text-align:right"><i>{{ ucfirst($invitation->status) }}<br>
                                                    <span style="font-size: 0.7em">
                                                        {{ $invitation->status_set_at->diffForHumans() }}
                                                    </span>
                                                </i>
                                            </p>
                                        @endif
                                    </span>
                                    <div style="clear:both"></div>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                </div>
                @endif
                <div>
                    <i><small>Updated {{ $user->updated_at->diffForHumans() }}</small></i>
                </div>
                <div class="block text-right">
                    <a class="button button-flat button-default" href="{{ route('dashboard') }}">Back to dashboard</a>
                </div>
            </div>
        </div>
    </div>
@endsection
