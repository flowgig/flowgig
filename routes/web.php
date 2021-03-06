<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->middleware('guest');

Auth::routes();

Route::post('email-verification/send-token', [
    'as' => 'email-verification.send-token',
    'uses' => 'Auth\VerifyController@sendVerificationToken'
]);

Route::get('email-verification/info', [
    'as' => 'email-verification.info',
    'uses' => 'Auth\VerifyController@getVerificationInfo'
]);

Route::get('email-verification/check/{token}', [
    'as' => 'email-verification.check',
    'uses' => 'Auth\VerifyController@getVerification'
]);

Route::get('email-verification/error', [
    'as' => 'email-verification.error',
    'uses' => 'Auth\VerifyController@getVerificationError'
]);

// Dashboard

Route::get('dashboard', [
    'as' => 'dashboard',
    'uses' => 'DashboardController@index'
]);

// Account

Route::get('account', [
    'as' => 'account.show',
    'uses' => 'AccountController@show'
]);

Route::get('account/edit', [
    'as' => 'account.edit',
    'uses' => 'AccountController@edit'
]);

Route::put('account/update', [
    'as' => 'account.update',
    'uses' => 'AccountController@update'
]);

Route::singularResourceParameters();

// Bands

Route::resource('bands', 'BandController');

// BandMemberships

Route::get('bands/{band}/band-memberships', [
    'as' => 'band-memberships.index',
    'uses' => 'BandMembershipController@index'
]);

Route::resource('band-memberships', 'BandMembershipController', ['only' => ['destroy']]);

// Songs

Route::get('bands/{band}/songs', [
    'as' => 'songs.index',
    'uses' => 'SongController@index'
]);

Route::get('bands/{band}/songs/create', [
    'as' => 'songs.create',
    'uses' => 'SongController@create'
]);

Route::post('bands/{band}/songs', [
    'as' => 'songs.store',
    'uses' => 'SongController@store'
]);

Route::resource('songs', 'SongController', ['except' => ['index', 'create', 'store']]);

// Gigs

Route::get('bands/{band}/gigs', [
    'as' => 'gigs.index',
    'uses' => 'GigController@index'
]);

Route::get('bands/{band}/gigs/create', [
    'as' => 'gigs.create',
    'uses' => 'GigController@create'
]);

Route::post('bands/{band}/gigs', [
    'as' => 'gigs.store',
    'uses' => 'GigController@store'
]);

Route::resource('gigs', 'GigController', ['except' => ['index', 'create', 'store']]);

// Setlists

Route::post('gigs/{gig}/setlists', [
    'as' => 'setlists.store',
    'uses' => 'SetlistController@store'
]);

Route::get('setlists/{setlist}/export', [
    'as' => 'setlists.export',
    'uses' => 'SetlistController@export'
]);

Route::resource('setlists', 'SetlistController', ['except' => ['index', 'create', 'store']]);

// SetlistSongs

Route::post('setlists/{setlist}/setlistsongs', [
    'as' => 'setlistsongs.store',
    'uses' => 'SetlistSongController@store'
]);

Route::resource('setlistsongs', 'SetlistSongController', ['only' => ['update', 'destroy']]);

// Band invitations

Route::get('bands/{band}/invitations/create', [
    'as' => 'band-invitations.create',
    'uses' => 'BandInvitationController@create'
]);

Route::post('bands/{band}/invitations', [
    'as' => 'band-invitations.store',
    'uses' => 'BandInvitationController@store'
]);

Route::put('band-invitations/{band_invitation}/accept', [
    'as' => 'band-invitations.accept',
    'uses' => 'BandInvitationController@accept'
]);

Route::put('band-invitations/{band_invitation}/decline', [
    'as' => 'band-invitations.decline',
    'uses' => 'BandInvitationController@decline'
]);

Route::put('band-invitations/{band_invitation}/set-expired', [
    'as' => 'band-invitations.set-expired',
    'uses' => 'BandInvitationController@setExpired'
]);

// Song links

Route::get('songs/{song}/links/create', [
    'as' => 'song-links.create',
    'uses' => 'SongLinkController@create'
]);

Route::post('songs/{song}/links', [
    'as' => 'song-links.store',
    'uses' => 'SongLinkController@store'
]);

Route::resource('song-links', 'SongLinkController', ['only' => ['edit', 'update', 'destroy']]);
