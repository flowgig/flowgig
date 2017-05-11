@extends('layouts.master', ['currentBand' => $setlist->gig->band])
@section('title', 'Setlist - ' . $setlist->gig->name)
@section('navbar-title', $setlist->gig->name)
@section('actionbar')
    <div class="action-button">
        <i class="icon fa fa-plus"></i>
    </div>
    <div class="action-menu" id="action-menu">
        <button class="toggle-action-button toggle-modal tooltip" data-type="radio" title="Add song from repertoire"
                value="repertoire-modal">
            <span class="icon fa fa-list">
            </span>
        </button>
        <button class="toggle-action-button toggle-modal tooltip" data-type="radio" title="Add new song"
                value="add-song-modal">
                <span class="icon fa fa-plus">
                </span>
        </button>
        <button class="toggle-action-button toggle-modal tooltip" data-type="radio" title="Export setlist"
                value="export-setlist-modal">
                <span class="icon fa fa-download">
                </span>
        </button>
    </div>
    <div id="repertoire" class="modal repertoire-modal">
        <div class="modal-container">
            <div class="modal-header">
                Repertoire:
                <button class="modal-close toggle-modal"
                        value="repertoire-modal"></button>
            </div>
            <div class="modal-content">

                <ul class="list">
                    <li v-for="song in repertoire">
                        <song v-bind:song="song"></song>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div id="new-song" class="modal add-song-modal">
        <div class="modal-container">
            <div class="modal-header">
                Add new song:
                <button class="modal-close toggle-modal"
                        value="add-song-modal"></button>
            </div>
            <div class="modal-content">
                <div class="input-group">
                    <input id="title" v-model="newSong.title" type="text"/><label for="title">Title</label>
                </div>
                <div class="input-group">
                    <input id="lyrics_by" v-model="newSong.lyrics_by" type="text"/><label for="lyrics_by">Lyrics
                        by</label>
                </div>
                <div class="input-group">
                    <input id="music_by" v-model="newSong.music_by" type="text"/><label for="music_by">Music by</label>
                </div>
                <a class="button button-flat button-primary float-right tooltip" v-on:click="addSong(newSong)"
                   title="Add @{{ newSong.title }} to setlist">Add song</a>
            </div>
        </div>
    </div>
    @include('setlists.export-modal')
@endsection

@section('content')
    <div id="setlist">
        <div class="content">
            <div class="box">
                <div class="content">
                    <breadcrumbs
                            v-bind:breadcrumb-items="[
                        {name: 'Bands', link: '{{ route('bands.index') }}'},
                        {name: '{{ $setlist->gig->band->name  }}', link: '{{ route('bands.show', $setlist->gig->band) }}'},
                        {name: 'Gigs', link: '{{ route('gigs.index', $setlist->gig->band)  }}'},
                        {name: '{{ $setlist->gig->name }}', link: '{{ route('gigs.show', $setlist->gig) }}'},
                        {name: 'Edit setlist', link: '{{ route('setlists.edit', $setlist) }}'}
                        ]">
                    </breadcrumbs>

                    <p style="font-size: x-large">Setlist for</p>
                    <h1>{{ $setlist->gig->name }}</h1>
                    <p style="font-size: large">{{ $setlist->gig->date }}
                        at {{ $setlist->gig->venue }}, {{ $setlist->gig->location }}
                    </p>
                    <div class="block text-right">
                        <a class="button button-flat button-default" href="{{ route('gigs.show', $setlist->gig) }}">
                            Back to gig
                        </a>
                    </div>
                    <small>@{{ setlistSongs.length }} songs</small>
                    <div>
                        <ul v-sortable.li="setlistSongs" class="list sortable-list">
                            <li v-for="setlistSong in setlistSongs" class="setlistsong">
                                <setlistsong v-bind:setlist-song="setlistSong"></setlistsong>
                            </li>
                        </ul>
                    </div>
                    <small>@{{ setlistSongs.length }} songs</small>
                    <div class="block text-right">
                        <a class="button button-flat button-default" href="{{ route('gigs.show', $setlist->gig) }}">
                            Back to gig
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <template id="song">
        <span>
            <span class="list-item-content">
                @{{ song.title }}
                <small>@{{ song.artist }}</small>
            </span>
            <span class="list-item-button">
                <i v-if="isAdded" style="font-size: small; padding: 5px">Added</i>
                <span v-on:click="addToSetlist()"
                      class="button button-icon button-flat button-default modal-hover-add-button tooltip"
                      title="Add @{{ song.title }} to setlist"></span>
            </span>
        </span>
    </template>

    <template id="setlistsong">
        <span class="sortable-handle"></span>
        <span class="list-item-divider"></span>
        <span class="list-item-content single-line">
            @{{ setlistSong.song.title }}
        </span>
        <span class="list-item-buttons">
            <a v-on:click="edit = !edit" class="button button-icon button-flat button-default tooltip"
               v-bind:title="edit ? 'Collapse' : 'Expand to edit'">
                <span class="fa" v-bind:class="edit ? 'fa-chevron-up' : 'fa-chevron-down'"></span>
            </a>
             <a v-on:click="remove" class="button button-icon button-flat button-default tooltip"
                title="Remove @{{setlistSong.song.title}} from the setlist">
                 <span class="fa fa-minus"></span>
             </a>
        </span>
        <div v-show="edit" class="accordion">
            <div>
                <p>By @{{ setlistSong.song.artist }}</p>
            </div>
            <div class="row">
                <div class="input-group col-sm-4">
                    <v-select v-bind:value.sync="setlistSong.key" v-bind:options="keyOptions" v-bind:on-change="save"
                              v-bind:class="setlistSong.key ? 'is-not-empty' : ''"
                              id="key-@{{ setlistSong.number_in_list }}"></v-select>
                    <label for="key-@{{ setlistSong.number_in_list }}">Key</label>
                </div>
                <div class="input-group col-sm-4">
                    <input v-model="setlistSong.bpm" v-on:blur="save" type="number" min="0"
                           id="bpm-@{{ setlistSong.number_in_list }}" placeholder="Beats Per Minute"/>
                    <label for="bpm-@{{ setlistSong.number_in_list }}">BPM</label>
                </div>
                <div class="input-group col-sm-4">
                    <input v-model="setlistSong.duration" v-on:blur="save" type="number" min="0"
                           id="duration-@{{ setlistSong.number_in_list }}" placeholder="Minutes"/>
                    <label for="duration-@{{ setlistSong.number_in_list }}">Duration</label>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="row">
                <div class="input-group col-sm-4">
                    <input v-model="setlistSong.intensity" v-on:blur="save" type="number" min="1" max="10"
                           id="intensity-@{{ setlistSong.number_in_list }}"
                           placeholder="1&ndash;10 (Ballad&ndash;Bebop)"/>
                    <label for="intensity-@{{ setlistSong.number_in_list }}">Intensity</label>
                </div>
                <div class="input-group col-md-8">
                    <input v-model="setlistSong.comment" v-on:blur="save" type="text"
                           id="comment-@{{ setlistSong.number_in_list }}"/>
                    <label for="comment-@{{ setlistSong.number_in_list }}">Comment</label>
                </div>
                <div class="clearfix"></div>
            </div>
            {{--<pre>@{{ setlistSong | json }}</pre>--}}
        </div>
    </template>
@endsection

@section('scripts')
    <script>

        Vue.directive('sortable', {
            twoWay: true,
            deep: true,
            bind: function () {
                var that = this;

                var options = {
                    draggable: Object.keys(this.modifiers)[0],
                    animation: 150,
                    handle: '.sortable-handle'
                };

                this.sortable = Sortable.create(this.el, options);
                console.log('sortable bound!')

                this.sortable.option("onUpdate", function (e) {
                    that.value.splice(e.newIndex, 0, that.value.splice(e.oldIndex, 1)[0]);
                    vm.$emit('reordered', that.value);
                });

                this.onUpdate = function (value) {
                    that.value = value;
                }
            },
            update: function (value) {
                this.onUpdate(value);
            }
        });

        var vm = new Vue({
            el: 'body',
            data: {
                csrfToken: '{{ csrf_token() }}',
                setlist: {!! $setlist !!},
                setlistSongs: '',
                repertoire: {!! $setlist->gig->band->songs !!},
                newSong: {}
            },
            ready: function () {
                this.setlistSongs = this.setlist.setlist_songs.sort(function (a, b) {
                    return a.number_in_list - b.number_in_list;
                });
            },
            components: {
                'song': {
                    template: '#song',
                    props: ['song'],
                    methods: {
                        addToSetlist: function () {

                            var setlistSong = {
                                setlist_id: this.$parent.setlist.id,
                                song: this.song,
                                number_in_list: this.$parent.setlistSongs.length + 1,
                            };

                            var createOnServerAndPushToList = function (createdSetlistSong) {
                                createdSetlistSong.song = this.song;
                                this.$parent.setlistSongs.push(createdSetlistSong);
                            }.bind(this);

                            this.$parent.saveNewSetlistSong(setlistSong, createOnServerAndPushToList);
                        },
                    },
                    computed: {
                        isAdded: function () {
                            var isAdded = false;
                            this.$parent.setlistSongs.forEach(function (setlistSong) {
                                if (setlistSong.song_id === this.song.id)
                                    isAdded = true;
                            }.bind(this));
                            return isAdded;
                        }
                    }
                },
                'setlistsong': {
                    template: '#setlistsong',
                    props: ['setlistSong'],
                    data: function () {
                        return {
                            edit: false,
                            keyOptions: musicalKeys
                        }
                    },
                    methods: {
                        save: function () {
                            this.$parent.saveUpdatedSetlistSong(this.setlistSong);
                        },
                        remove: function () {
                            if (!confirm('This removes "' + this.setlistSong.song.title + '" from the setlist'))
                                return;

                            var payLoad = {
                                body: {
                                    _token: this.$parent.csrfToken
                                }
                            };
                            this.$http.delete('/setlistsongs/' + this.setlistSong.id, payLoad);

                            this.$parent.setlistSongs.$remove(this.setlistSong);
                        }
                    },
                    components: {
                        'v-select': window.VueSelect.VueSelect
                    }
                }
            },
            methods: {
                reOrderSetlistSongs: function (reorderedList) {
                    reorderedList.forEach(function (reorderedSetlistSong) {
                        var setlistSong = this.setlistSongs[this.setlistSongs.indexOf(reorderedSetlistSong)];
                        setlistSong.number_in_list = reorderedList.indexOf(reorderedSetlistSong) + 1;
                        this.saveUpdatedSetlistSong(setlistSong);
                    }.bind(this));
                },
                saveNewSetlistSong: function (setlistSong, afterStore) {
                    var url = '/setlists/' + setlistSong.setlist_id + '/setlistsongs/';
                    var payLoad = {
                        _token: this.csrfToken,
                        song_id: setlistSong.song.id,
                        number_in_list: setlistSong.number_in_list
                    };
                    this.$http.post(url, payLoad).then(function (createdSetlistSong) {
                        afterStore(createdSetlistSong.json())
                    });
                },
                saveUpdatedSetlistSong: function (setlistSong) {
                    var payLoad = {
                        _token: this.csrfToken,
                        setlist_id: setlistSong.setlist_id,
                        song_id: setlistSong.song.id,
                        number_in_list: setlistSong.number_in_list,
                        key: setlistSong.key,
                        bpm: setlistSong.bpm ? setlistSong.bpm : null,
                        intensity: setlistSong.intensity ? setlistSong.intensity : null,
                        duration: setlistSong.duration ? setlistSong.duration : null,
                        comment: setlistSong.comment
                    };
                    this.$http.put('/setlistsongs/' + setlistSong.id, payLoad);
                }
            },
            events: {
                'reordered': function (reorderedList) {
                    this.reOrderSetlistSongs(reorderedList);
                }
            }
        });
        var musicalKeys =
                [
                    'C', 'D', 'E', 'F', 'G', 'A', 'H',
                    'Cm', 'Dm', 'Em', 'Fm', 'Gm', 'Am', 'Hm',
                    'C\u266F', 'D\u266F', 'E\u266F', 'F\u266F', 'G\u266F', 'A\u266F', 'H\u266F',
                    'C\u266Fm', 'D\u266Fm', 'E\u266Fm', 'F\u266Fm', 'G\u266Fm', 'A\u266Fm', 'H\u266Fm',
                    'C\u266D', 'D\u266D', 'E\u266D', 'F\u266D', 'G\u266D', 'A\u266D', 'H\u266D',
                    'C\u266Dm', 'D\u266Dm', 'E\u266Dm', 'F\u266Dm', 'G\u266Dm', 'A\u266Dm', 'H\u266Dm'
                ];
    </script>

@endsection