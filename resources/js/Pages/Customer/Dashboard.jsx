import AppLayout from "@/Layouts/AppLayout";
import Flickity from "react-flickity-component";
import FeaturedMovie from "@/Components/FeaturedMovie";
import { Head } from "@inertiajs/react";
import MovieCard from "@/Components/MovieCard";

const flickityOptions = {
    "cellAlign": "left",
    "contain": true,
    "groupCells": 1,
    "wrapAround": false,
    "pageDots": false,
    "prevNextButtons": false,
    "draggable": ">1",
};

export default function Dashboard ({auth, featuredMovies, movies}) {
    return (
        <AppLayout auth={auth}>
            <Head title="Dashboard">
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            </Head>
            {/* Featured Movies */}
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                <Flickity className="gap-[30px]" options={flickityOptions} reloadOnUpdate>

                    {/* <!-- Movie Thumbnail --> */}
                    {featuredMovies.map((featuredMovie) => (
                        <FeaturedMovie
                            key={featuredMovie.id}
                            slug={featuredMovie.slug}
                            name={featuredMovie.name}
                            category={featuredMovie.category}
                            thumbnail={featuredMovie.thumbnail}
                            rating={featuredMovie.rating}
                        />
                    ))}
                </Flickity>
            </div>
            {/* Featured Movies */}

            {/* Browse Movie */}
            <div>
                <div className="font-semibold text-[22px] text-black mb-4 mt-6">Browse</div>
                <Flickity options={flickityOptions} reloadOnUpdate>
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            slug={movie.slug}
                            name={movie.name}
                            category={movie.category}
                            thumbnail={movie.thumbnail}
                        />
                    ))}
                </Flickity>
            </div>
            {/* Browse Movie */}
        </AppLayout>
    );
}