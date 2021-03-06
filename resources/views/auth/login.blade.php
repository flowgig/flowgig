@extends('layouts.noauth')

@section('title', 'Log in')
@section('content')
    <div class="content">
        <form method="POST" action="{{ url('/login') }}">
            {{ csrf_field() }}
            <div class="login-box-header">
                <p>Log in</p>
            </div>
            <div class="input-group">
                <input id="email" type="email" name="email" value="{{ old('email') }}" required autofocus/>
                <label for="email">E-mail address</label>
                @if ($errors->has('email'))
                    {{ $errors->first('email') }}
                @endif
            </div>
            <div class="input-group">
                <input id="password" type="password" name="password" required/>
                <label for="password">Password</label>
                @if ($errors->has('password'))
                    {{ $errors->first('password') }}
                @endif
            </div>
            <div class="input-group">
                <input type="checkbox" name="remember" id="remember">
                <label for="remember">Remember me</label>
                <button type="submit" class="button button-flat button-primary float-right">Login</button>
            </div>
            <div class="input-group text-center">
                <a href="{{ url('/password/reset') }}">Forgot your password?</a>
            </div>
        </form>
    </div>
@endsection