<?php

use App\Gig;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class GigsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('gigs')->delete();

        Gig::create([
            'created_by' => 2,
            'band_id' => 3,
            'date' => Carbon::now()->addYear(),
            'venue' => 'Tina\'s garden',
            'location' => 'Nashville',
            'event' => 'Tina\'s birthday party',
            'description' => 'Barbecue and Jam! Just bring your instrument :-)',
            'internal_info' => 'John brings stage modules (thank you!)',
            'confirmed' => true,
            'public' => false,
        ]);

        factory(App\Gig::class, 50)->create();
    }
}
