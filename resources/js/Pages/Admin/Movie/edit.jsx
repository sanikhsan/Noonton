import AppLayout from "@/Layouts/Admin/AppLayout";
import InputError from "@/Components/Customer/InputError";
import PrimaryButton from "@/Components/Customer/PrimaryButton";
import TextInputFloating from "@/Components/Admin/TextInputFloating";
import InputFloatingLabel from "@/Components/Admin/InputFloatingLabel";
import { useForm, Head } from "@inertiajs/react";

export default function MovieEdit ({
    auth,
    movie
}) {
    const { data, setData, patch, processing, errors} = useForm({
        ...movie
    });

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        patch(route('admin.movie.update', movie));
    }

    return (
        <AppLayout auth={auth}>
            <Head title="Edit Movie">
                <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"  rel="stylesheet" />
            </Head>
            <div className="mt-5 mb-5">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Editing Movie : {movie.name}</h2>
                <hr className="h-px my-2 bg-gray-200 border-0"/>
                <InputError errors={errors}/>
            </div>
            <form onSubmit={submit}>
                <div className="relative w-full mb-6">
                    <TextInputFloating
                        id="movie_name"
                        text="text"
                        name="name"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                    />
                    <InputFloatingLabel htmlFor="movie_name" value="Movie Name"/>
                </div>
                <div className="relative w-full mb-6">
                    <TextInputFloating
                        id="movie_category"
                        text="text"
                        name="category"
                        value={data.category}
                        onChange={e => setData('category', e.target.value)}
                    />
                    <InputFloatingLabel htmlFor="movie_category" value="Category"/>
                </div>
                <div className="relative w-full mb-6">
                    <TextInputFloating
                        id="video_url"
                        text="text"
                        name="video_url"
                        value={data.video_url}
                        onChange={e => setData('video_url', e.target.value)}
                    />
                    <InputFloatingLabel htmlFor="video_url" value="Video URL"/>
                </div>
                <div className="relative w-full mb-6">
                    <TextInputFloating
                        id="movie_rating"
                        text="text"
                        name="rating"
                        value={data.rating}
                        onChange={e => setData('rating', e.target.value)}
                    />
                    <InputFloatingLabel htmlFor="movie_rating" value="Movie Rating"/>
                </div>
                <div className="relative w-full mb-6">
                <select 
                    id="is_featured"
                    className="block w-full px-2.5 pb-2.5 pt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    name="is_featured"
                    // value={data.is_featured}
                    defaultValue={data.is_featured}
                    onChange={e => setData('is_featured', e.target.value)}
                    required
                >
                    {/* <option value="" disabled>Is Featured Movie?</option> */}
                    <option value="0">NO</option>
                    <option value="1">YES</option>
                </select>
                <InputFloatingLabel htmlFor="is_featured" value="Featured Movie"/>
                </div>
                <label className="block mb-1 text-sm font-medium text-orange-500">Thumbnail :</label>
                <div className="relative w-full mb-6">
                    <img src={`/storage/${data.thumbnail}`} alt="" className="h-44" />
                </div>
                <div className="relative w-full mb-6">
                    <label className="block mb-1 text-sm font-medium text-orange-500" htmlFor="thumbnail">Upload file</label>
                    <input
                        id="thumbnail"
                        type="file"
                        name="thumbnail"
                        // value={data.thumbnail}
                        onChange={e => setData('thumbnail', e.target.files[0])}
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    />
                    <p className="mt-1 text-sm text-gray-500" id="thumbnail">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
                <PrimaryButton
                    type="submit"
                    className="bg-alerange hover:bg-orange-700 text-white mb-5"
                    disabled={processing}
                >
                    <span className="text-base font-semibold">
                        Save Movie
                    </span>
                </PrimaryButton>
            </form>
        </AppLayout>
    );
}