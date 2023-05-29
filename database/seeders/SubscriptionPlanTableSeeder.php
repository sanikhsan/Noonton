<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 299000,
                'active_period_in_months' => 3,
                'featured' => json_encode(['Unlock 10 basic movies', 'Support 24/7 ready', 'Up to 3 users'])
            ],
            [
                'name' => 'Premium',
                'price' => 899000,
                'active_period_in_months' => 3,
                'featured' => json_encode(['Unlock 200 awards movies', '180 subtitles available', 'iOS, Android, TV', 'Offline Mode', 'Up to 20 users', 'Support 24/7 ready'])
            ]
        ];

        SubscriptionPlan::insert($subscriptionPlans);
    }
}
