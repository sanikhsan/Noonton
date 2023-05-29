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

export default function Dashboard () {
    return (
        <AppLayout>
            <Head title="Dashboard">
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            </Head>
            {/* Featured Movies */}
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                <Flickity className="gap-[30px]" options={flickityOptions} reloadOnUpdate>

                    {/* <!-- Movie Thumbnail --> */}
                    {[1,2,3,4].map(i => (
                        <FeaturedMovie
                            key={i}
                            slug={`despicable-me-${i}`}
                            name={`Despicable Me ${i}`}
                            category={'Comedy'}
                            thumbnail={'/images/featured-2.png'}
                            rating={i+1}
                        />
                    ))}
                </Flickity>
            </div>
            {/* Featured Movies */}

            {/* Browse Movie */}
            <div>
                <div className="font-semibold text-[22px] text-black mb-4 mt-6">Browse</div>
                <Flickity options={flickityOptions} reloadOnUpdate>
                    {[1,2,3,4,5,6].map(i => (
                        <MovieCard
                            key={i}
                            slug={`meong-golden-${i}`}
                            name={`Meong Golden ${i}`}
                            category={'Mystery'}
                            thumbnail={'/images/browse-1.png'}

                        />
                    ))}
                </Flickity>
            </div>
            {/* Browse Movie */}
        </AppLayout>
    );
}