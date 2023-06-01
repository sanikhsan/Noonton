<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SubscriptionPlanController extends Controller
{
    public function plan() {
        return Inertia::render('Customer/SubscriptionPlan', [
            'subscriptionPlans' => SubscriptionPlan::all(),
        ]);
    }

    public function selectPlan(Request $request, SubscriptionPlan $subscriptionPlan)
    {
        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonth($subscriptionPlan->active_period_in_months),
            'payment_status' => 'paid',
            'snapToken' => 'testing'
        ];

        UserSubscription::create($data);

        return redirect(route('customer.dashboard.index'))->with('success', "Berhasil Berlangganan Package $subscriptionPlan->name");
    }
}
