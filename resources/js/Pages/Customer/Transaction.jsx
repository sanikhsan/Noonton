import PrimaryButton from "@/Components/Customer/PrimaryButton";
import AppLayout from "@/Layouts/Customer/AppLayout";
import { Head } from "@inertiajs/react";
import { router } from '@inertiajs/react'

export default function CustomerTransaction ({
    env,
    auth,
    userSubscriptions
}) {
    // Format toLocaleDateString
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    // Midtrans Snap
    const onSnapMidtrans = (userSubscription) => {
        snap.pay(userSubscription.snap_token, {
          // Optional
          onSuccess: function(result){
            router.visit(route('customer.dashboard.index'));
          },
          // Optional
          onPending: function(result){
            console.log({result});
          },
          // Optional
          onError: function(result){
            console.log({result});
          },
        });
    };

    return (
        <AppLayout auth={auth}>
            <Head title="History Transaction">
                <script
                    src="https://app.sandbox.midtrans.com/snap/snap.js"
                    data-client-key={env.MIDTRANS_CLIENTKEY}>
                </script>
            </Head>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tipe Paket
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Harga
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tanggal Aktif
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Aktif Hingga
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status Pembayaran
                            </th>
                            <th colSpan="2" scope="col" className="px-6 py-3 text-center">
                                AKSI
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
                                    {userSubscription.subscription_plan.name}
                                </td>
                                <td className="px-6 py-4">
                                    Rp {userSubscription.price.toLocaleString()}
                                </td>
                                <td className="px-6 py-4">
                                    {
                                    new Date(userSubscription.expired_date) <= currentDate
                                    ?
                                    "Paket Belum Aktif"
                                    :
                                    new Date(userSubscription.created_at).toLocaleDateString(undefined, options)
                                    }
                                </td>
                                <td className="px-6 py-4">
                                    {
                                    new Date(userSubscription.expired_date) <= currentDate
                                    ?
                                    "Paket Belum Aktif"
                                    :
                                    new Date(userSubscription.expired_date).toLocaleDateString(undefined, options)
                                    }
                                </td>
                                <td className="px-6 py-4">
                                    {userSubscription.payment_status}
                                </td>
                                <td className="px-3 py-2">
                                    <PrimaryButton
                                        type="button"
                                        className="bg-blue-500 hover:bg-blue-700 text-white px-[22px]"
                                        onClick={() => onSnapMidtrans(userSubscription)}
                                    >
                                        Bayar
                                    </PrimaryButton>
                                </td>
                                <td className="pr-4">
                                    <PrimaryButton
                                        type="button"
                                        className="bg-red-500 hover:bg-red-700 text-white px-[12px]"
                                    >
                                        Batalkan
                                    </PrimaryButton>
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