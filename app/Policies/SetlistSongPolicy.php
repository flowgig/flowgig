<?php

namespace App\Policies;

use App\SetlistSong;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class SetlistSongPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can create setlistSongs.
     *
     * @param User $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the setlistSong.
     *
     * @param User $user
     * @param SetlistSong $setlistSong
     * @return mixed
     */
    public function update(User $user, SetlistSong $setlistSong)
    {
        return $setlistSong->setlist->gig->band->hasUser($user);
    }

    /**
     * Determine whether the user can delete the setlistSong.
     *
     * @param User $user
     * @param SetlistSong $setlistSong
     * @return mixed
     */
    public function delete(User $user, SetlistSong $setlistSong)
    {
        return $setlistSong->setlist->gig->band->hasUser($user);
    }
}
