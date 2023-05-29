import AppLayout from "@/Layouts/AppLayout";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Head, Link } from "@inertiajs/react";
export default function SubscriptionPlan () {
    return (
        <AppLayout>
            <div className="py-20 flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences from movies.
                    </p>

                    <div className="flex justify-center gap-10 mt-[70px]">
                        <SubscriptionCard 
                            name={"Basic"}
                            price={299000}
                            duration={3}
                            features={["Unlock 10 basic movies", "Support 24/7 ready", "Up to 3 users"]}
                        />
                        <SubscriptionCard
                            isPremium
                            name={"For Greates"}
                            price={800000}
                            duration={3}
                            features={["Unlock 200 awards movies", "180 subtitles available", "iOS, Android, TV", "Offline Mode", "Up to 20 users", "Support 24/7 ready"]}
                        />
                    </div>
                </div>
        </AppLayout>
    );
}