<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Faker\Guesser\Name;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    private function activePlan()
    {
        $activePlan = Auth::user() ? Auth::user()->LastActiveCustomerSubscription : null;

        if (!$activePlan) {
            return false;
        }

        $lastDay = Carbon::parse($activePlan->expired_date);
        $activeDays = Carbon::parse($activePlan->updated_at)->diffInDays($lastDay);
        $remainingActiveDays = Carbon::parse($activePlan->expired_date)->diffInDays(Carbon::now());

        return [
            'name' => $activePlan->subscriptionPlan->name,
            'activeDays' => $activeDays,
            'remainingActiveDays' => $remainingActiveDays
        ];
    }


    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
                'activePlan' => $this->activePlan(),
            ],
            'flash' => [
                'message' => $request->session()->get('message'),
                'color' => $request->session()->get('color'),
            ],
            'env' => [
                'MIDTRANS_CLIENTKEY' => env("MIDTRANS_CLIENTKEY"),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
