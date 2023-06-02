<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Storage::disk('public')->put('movies/the-flash.webp', file_get_contents("https://media.sukabumiupdate.com/media/2023/04/28/1682670301_644b82dd5d649_iNtpSBDOSSBOJqHAyQgj.webp"));
        Storage::disk('public')->put('movies/spiderman.jpg', file_get_contents("https://cdn-2.tstatic.net/bangka/foto/bank/images/20230529-Spider-Man-Across-the-Spider-Verse-2023.jpg"));
        Storage::disk('public')->put('movies/transformer.jpg', file_get_contents("https://cdn-2.tstatic.net/bangka/foto/bank/images/20230522-Transformers-Rise-of-the-Beasts-2023.jpg"));
        Storage::disk('public')->put('movies/indiana.jpg', file_get_contents("https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/04/indiana-jones-and-the-dial-of-destiny-poster.jpg"));

        $movies = [
            [
                'name' => 'The Flash',
                'slug' => 'the-flash',
                'category' => 'Action, Fantasy, Sci-Fi',
                'video_url' => 'https://www.youtube.com/watch?v=05x29otNhtI&ab_channel=ScreenCulture',
                'thumbnail' => 'movies/the-flash.webp',
                'rating' => '9.0'
            ],
            [
                'name' => 'Transformers: Rise of the Beasts',
                'slug' => 'transformers-rise-of-the-beasts',
                'category' => 'Action, Adventure, Sci-Fi',
                'video_url' => 'https://www.youtube.com/watch?v=itnqEauWQZM&ab_channel=ParamountPictures',
                'thumbnail' => 'movies/transformer.jpg',
                'rating' => '9.3',
                'is_featured' => true
            ],
            [
                'name' => 'Spider-Man: Across the Spider-Verse',
                'slug' => 'spider-man-across-the-spider-verse',
                'category' => 'Animation, Action, Adventure',
                'video_url' => 'https://www.youtube.com/watch?v=shW9i6k8cB0&pp=ygUrdHJhaWxlciBTcGlkZXItTWFuOiBBY3Jvc3MgdGhlIFNwaWRlci1WZXJzZQ%3D%3D&ab_channel=SonyPicturesEntertainment',
                'thumbnail' => 'movies/spiderman.jpg',
                'rating' => '8.8'
            ],
            [
                'name' => 'Indiana Jones and the Dial of Destiny',
                'slug' => 'indiana-jones-and-the-dial-of-destiny',
                'category' => 'Action, Adventure',
                'video_url' => 'https://www.youtube.com/watch?v=eQfMbSe7F2g&ab_channel=Lucasfilm',
                'thumbnail' => 'movies/indiana.jpg',
                'rating' => '9.5',
                'is_featured' => true
            ]
        ];

        foreach($movies as $movie) {
            Movie::create($movie);
        }
    }
}
