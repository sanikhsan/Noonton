<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'The Flash',
                'slug' => 'the-flash',
                'category' => 'Action, Fantasy, Sci-Fi',
                'video_url' => 'https://www.imdb.com/video/vi1314702361/?playlistId=tt0439572&ref_=tt_pr_ov_vi',
                'thumbnail' => 'https://www.imdb.com/title/tt0439572/mediaviewer/rm3802082561/?ref_=tt_ov_i',
                'rating' => '9.0'
            ],
            [
                'name' => 'Transformers: Rise of the Beasts',
                'slug' => 'transformers-rise-of-the-beasts',
                'category' => 'Action, Adventure, Sci-Fi',
                'video_url' => 'https://www.imdb.com/title/tt0439572/mediaviewer/rm3802082561/?ref_=tt_ov_i',
                'thumbnail' => 'https://www.imdb.com/title/tt5090568/mediaviewer/rm1191194369/?ref_=tt_ov_i',
                'rating' => '9.3',
                'is_featured' => true
            ],
            [
                'name' => 'Spider-Man: Across the Spider-Verse',
                'slug' => 'spider-man-across-the-spider-verse',
                'category' => 'Animation, Action, Adventure',
                'video_url' => 'https://www.imdb.com/title/tt5090568/mediaviewer/rm1191194369/?ref_=tt_ov_i',
                'thumbnail' => 'https://www.imdb.com/title/tt9362722/mediaviewer/rm3979292417/?ref_=tt_ov_i',
                'rating' => '8.8'
            ],
            [
                'name' => 'Indiana Jones and the Dial of Destiny',
                'slug' => 'indiana-jones-and-the-dial-of-destiny',
                'category' => 'Action, Adventure',
                'video_url' => 'https://www.imdb.com/title/tt9362722/mediaviewer/rm3979292417/?ref_=tt_ov_i',
                'thumbnail' => 'https://www.imdb.com/title/tt9362722/mediaviewer/rm3979292417/?ref_=tt_ov_i',
                'rating' => '9.5',
                'is_featured' => true
            ]
        ];

        foreach($movies as $movie) {
            Movie::create($movie);
        }
    }
}
