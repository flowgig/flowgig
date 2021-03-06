@extends('layouts.noauth')

@section('title', 'Reset password')
@section('content')

    @if (session('status'))
        {{ session('status') }}
    @endif
    <div class="content">
        <form method="POST" action="{{ url('/password/email') }}">
            {{ csrf_field() }}
            <div class="login-box-header">
                <p>Reset password</p>
            </div>
            <div class="input-group">
                <input id="email" type="email" name="email" value="{{ old('email') }}" required/>
                <label for="email">E-mail address</label>
                @if ($errors->has('email'))
                    {{ $errors->first('email') }}
                @endif
            </div>
            <div class="input-group">
                <button type="submit" class="button button-flat button-primary float-right">
                    Send password reset link
                </button>
            </div>
        </form>
    </div>
@endsection