import PrimaryButton from "@/Components/Customer/PrimaryButton";
import AppLayout from "@/Layouts/Admin/AppLayout";
import Alert from "@/Components/Admin/Alert";
import {  Head, Link } from "@inertiajs/react";

export default function MovieIndex({
    auth,
    movies,
    flash,
}) {
    return (
        <AppLayout auth={auth}>
            <Head title="Admin Movie"/>
            <div className="mt-5 mb-5">
                <Link href={route('admin.movie.create') }>
                    <button
                        className="rounded-lg p-2 bg-alerange hover:bg-orange-700 text-white w-40 float-right"
                    >
                        Add New Movie
                    </button>
                </Link>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Movie List</h2>
                <hr className="h-px my-2 bg-gray-200 border-0"/>
                {flash.message && (
                    <Alert color={flash.color} message={flash.message} />
                )}
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 border">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Movie Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Thumbnail
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rating
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Featured Movie
                            </th>
                            <th colSpan="2" scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        movies !== null
                        ?
                        movies.map(movie => 
                            <tr className="bg-white border-b" key={movie.id}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {movie.name}
                                </th>
                                <td className="px-6 py-4">
                                    {movie.category}
                                </td>
                                <td className="px-6 py-4">
                                    <img src={`/storage/${movie.thumbnail}`} alt={movie.name} />
                                </td>
                                <td className="px-6 py-4">
                                    {movie.rating}
                                </td>
                                <td className="px-6 py-4">
                                    {movie.is_featured === 1 ? "YES" : "NO"}
                                </td>
                                <td>
                                    <Link href={route('admin.movie.edit', movie)}>
                                        <PrimaryButton
                                            type="button"
                                            className="bg-gray-500 hover:bg-gray-700 text-white px-[22px]"
                                        >
                                            Edit
                                        </PrimaryButton>
                                    </Link>
                                </td>
                                <td className="pr-4">
                                    {
                                        movie.deleted_at
                                        ?
                                        <Link href={route('admin.movie.restore', movie.id)} method="put">
                                            <PrimaryButton
                                                className="bg-cyan-500 hover:bg-cyan-700 text-white px-[13px]"
                                            >
                                                Restore
                                            </PrimaryButton>
                                        </Link>
                                        :
                                        <Link href={route('admin.movie.destroy', movie)} method="delete">
                                            <PrimaryButton
                                                className="bg-red-500 hover:bg-red-700 text-white px-[13px]"
                                            >
                                                Hapus
                                            </PrimaryButton>
                                        </Link>
                                    }
                                </td>
                            </tr>
                        )
                        :
                        <tr className="bg-white border-b text-center">
                            <td colSpan="7">
                                <p className="text-2xl m-5">Tidak Ada Data untuk Ditampilkan</p>
                            </td>
                        </tr>
                        }
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}