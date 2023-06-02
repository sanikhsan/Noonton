import AppLayout from "@/Layouts/Admin/AppLayout";
import { Head } from "@inertiajs/react";

export default function AdminDashboard ({
    auth,
    userSubscriptions
}) {
    return (
        <AppLayout auth={auth}> 
            <Head title="Admin Dashboard"/>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
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
                        userSubscriptions !== null
                        ?
                        userSubscriptions.map(userSubscription =>
                            <tr className="bg-white border-b" key={userSubscription.id}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {userSubscription.user_id}
                                </th>
                                <td className="px-6 py-4">
                                    {userSubscription.subscription_plan_id}
                                </td>
                                <td className="px-6 py-4">
                                    Rp {userSubscription.price.toLocaleString()}
                                </td>
                                <td className="px-6 py-4">
                                    {userSubscription.expired_date}
                                </td>
                                <td className="px-6 py-4">
                                    {userSubscription.payment_status}
                                </td>
                            </tr>
                        )
                        :
                        <tr className="bg-white border-b text-center">
                            <td colSpan="5">
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