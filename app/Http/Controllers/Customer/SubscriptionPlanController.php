<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Midtrans;
use Illuminate\Support\Str;
class SubscriptionPlanController extends Controller
{
    // Midtrans Environment
    public function __construct()
    {
        // Set your Merchant Server Key
        Midtrans\Config::$serverKey = env("MIDTRANS_SERVERKEY");
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        Midtrans\Config::$isProduction = env("MIDTRANS_IS_PRODUCTION");
        // Set sanitization on (default)
        Midtrans\Config::$isSanitized = env("MIDTRANS_IS_SANITIZED");
        // Set 3DS transaction for credit card to true
        Midtrans\Config::$is3ds = env("MIDTRANS_IS_3DS");
    }

    public function plan() {
        return Inertia::render('Customer/SubscriptionPlan', [
            'subscriptionPlans' => SubscriptionPlan::all(),
        ]);
    }

    public function selectPlan(Request $request, SubscriptionPlan $subscriptionPlan)
    {

        $params = [
            'transaction_details' => [
                'order_id' => $subscriptionPlan->id.'-'.Str::random(5),
                'gross_amount' => $subscriptionPlan->price
            ],
        ];

        $snapToken = Midtrans\Snap::getSnapToken($params);

        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now(),
            'payment_status' => 'pending',
            'snap_token' => $snapToken
        ];

        UserSubscription::create($data);

        return redirect(route('customer.dashboard.transaction'));
    }

    public function midtransCallback(Request $request)
    {
        $notif = new Midtrans\Notification();

        $transaction_status = $notif->transaction_status;
        $fraud = $notif->fraud_status;

        $transaction_id = explode('-', $notif->order_id)[0];
        $userSubscription = UserSubscription::find($transaction_id);

        if ($transaction_status == 'capture') {
            if ($fraud == 'challenge') {
                // TODO Set payment status in merchant's database to 'challenge'
                $userSubscription->payment_status = 'pending';
            }
            else if ($fraud == 'accept') {
                // TODO Set payment status in merchant's database to 'success'
                $userSubscription->payment_status = 'paid';
                $userSubscription->expired_date = Carbon::now()->addMonths((int) $userSubscription->subscriptionPlan->active_period_in_months);
            }
        }
        else if ($transaction_status == 'cancel') {
            if ($fraud == 'challenge') {
                // TODO Set payment status in merchant's database to 'failure'
                $userSubscription->payment_status = 'failed';
            }
            else if ($fraud == 'accept') {
                // TODO Set payment status in merchant's database to 'failure'
                $userSubscription->payment_status = 'failed';
            }
        }
        else if ($transaction_status == 'deny') {
            // TODO Set payment status in merchant's database to 'failure'
            $userSubscription->payment_status = 'failed';
        }
        else if ($transaction_status == 'settlement') {
            // TODO set payment status in merchant's database to 'Settlement'
            $userSubscription->payment_status = 'paid';
            $userSubscription->expired_date = Carbon::now()->addMonths((int) $userSubscription->subscriptionPlan->active_period_in_months);
        }
        else if ($transaction_status == 'pending') {
            // TODO set payment status in merchant's database to 'Pending'
            $userSubscription->payment_status = 'pending';
        }
        else if ($transaction_status == 'expire') {
            // TODO set payment status in merchant's database to 'expire'
            $userSubscription->payment_status = 'failed';
        }

        $userSubscription->save();
        return response()->json([
            'status' => 'success',
            'message' => 'Payment success'
        ]);
    }
}
