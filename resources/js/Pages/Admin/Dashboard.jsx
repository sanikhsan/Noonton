import AppLayout from "@/Layouts/Admin/AppLayout";
import { Head } from "@inertiajs/react";

export default function AdminDashboard ({
    auth,
    userSubscriptions
}) {
    // Format toLocaleDateString
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <AppLayout auth={auth}> 
            <Head title="Admin Dashboard"/>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nama Pelanggan
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Subscription Package
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Active Until
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Payment Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        userSubscriptions.length !== 0
                        ?
                        userSubscriptions.map((userSubscription, number) =>
                            <tr className="bg-white border-b" key={userSubscription.id}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {number+1}
                                </th>
                                <td className="px-6 py-4">
                                    {userSubscription.user.name}
                                </td>
                                <td className="px-6 py-4">
                                    {userSubscription.subscription_plan.name}
                                </td>
                                <td className="px-6 py-4">
                                    Rp {userSubscription.price.toLocaleString()}
                                </td>
                                <td className="px-6 py-4">
                                    {new Date(userSubscription.expired_date).toLocaleDateString(undefined, options)}
                                </td>
                                <td className="px-6 py-4">
                                    {userSubscription.payment_status}
                                </td>
                            </tr>
                        )
                        :
                        <tr className="bg-white border-b text-center">
                            <td colSpan="6">
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