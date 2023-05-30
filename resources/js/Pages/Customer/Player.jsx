import ReactPlayer from "react-player";
import { Link } from "@inertiajs/react";

export default function Player({movie}) {
    return (
        <section className="mx-auto w-screen h-screen relative watching-page font-poppins pt-20 bg-form-bg" id="stream">

            <ReactPlayer
                className="overflow-hidden h-screen w-screen"
                url={movie.video_url} 
                controls
                width={"100%"}
                height={"850px"}
            />

            {/* <!-- Button back to dashboard --> */}
            <div className="absolute top-5 left-5 z-20">
                <Link href={route('customer.dashboard.index')}>
                    <img src="/icons/ic_arrow-left.svg" className="transition-all btn-back w-[46px] border border-double border-black rounded-full" alt="stream" />
                </Link>
            </div>

            {/* <!-- Video Title --> */}
            <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                <span className="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
                    {movie.name}
                </span>
            </div>
        </section>
    );
}