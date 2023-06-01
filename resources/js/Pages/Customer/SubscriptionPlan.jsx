import AppLayout from "@/Layouts/AppLayout";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Head, router } from "@inertiajs/react";

export default function SubscriptionPlan ({auth, subscriptionPlans}) {
    const selectSubscription = (id) => {
        router.post(route('customer.dashboard.subscribePlan', {subscriptionPlan: id}));
    }

    return (
        <AppLayout auth={auth}>
            <Head title="Subscription Plans"/>
            <div className="py-20 flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences from movies.
                    </p>

                    <div className="flex justify-center gap-10 mt-[70px]">
                        {subscriptionPlans.map(subscriptionPlan => (
                            <SubscriptionCard 
                            key={subscriptionPlan.id}
                            name={subscriptionPlan.name}
                            price={subscriptionPlan.price}
                            duration={subscriptionPlan.active_period_in_months}
                            features={JSON.parse(subscriptionPlan.featured)}
                            isPremium={subscriptionPlan.name === "Premium"}
                            onSelectSubscription={() => selectSubscription(subscriptionPlan.id)}
                            />
                        ))}
                    </div>
                </div>
        </AppLayout>
    );
}