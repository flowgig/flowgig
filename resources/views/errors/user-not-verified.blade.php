@extends('layouts.master')
@section('title', 'Verify account')
@section('navbar-title', 'Verify account')
@section('content')
    <div class="content">
        <div class="box">
            <div class="content">
                <h1>Please verify your account</h1>
                <p>Before you can continue, your user account needs to be verified.</p>
                <p>A verification link is sent to <b>{{ Auth::user()->email }}.</b></p>
                <p>Look for e-mail from flowgig.com and verify your account by clicking the link.</p>
                {{-- Provide user regenerating/resending of verification token --}}
            </div>
        </div>
    </div>
@endsection
