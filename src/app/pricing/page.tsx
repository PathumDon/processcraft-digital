'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { PricingCard } from '@/components/features/PricingCard';
import { Badge } from '@/components/ui/Badge';

export default function PricingPage() {
    const router = useRouter();

    const handlePlanSelect = (plan: string) => {
        router.push(`/contact?plan=${encodeURIComponent(plan)}`);
    };

    const tiers = [
        {
            title: "Starter",
            price: "999",
            description: "Perfect for small businesses just getting started.",
            features: [
                { text: "Five Basic Process Flows", included: true },
                { text: "Standard Support", included: true },
                { text: "Basic Analytics", included: true },
                { text: "Custom Integrations", included: false },
                { text: "Dedicated Account Manager", included: false },
            ]
        },
        {
            title: "Professional",
            price: "2,499",
            description: "Ideal for growing companies with more complex needs.",
            isPopular: true,
            features: [
                { text: "Unlimited Process Flows", included: true },
                { text: "Priority Support (24/7)", included: true },
                { text: "Advanced Analytics & Reporting", included: true },
                { text: "Custom API Integrations", included: true },
                { text: "Dedicated Account Manager", included: false },
            ]
        },
        {
            title: "Enterprise",
            price: "4,999",
            description: "Full-scale solutions for large organizations.",
            features: [
                { text: "Unlimited Process Flows", included: true },
                { text: "Dedicated Support Team", included: true },
                { text: "Enterprise Analytics", included: true },
                { text: "Fully Custom Integrations", included: true },
                { text: "Dedicated Account Manager", included: true },
            ]
        }
    ];

    return (
        <div className="bg-white min-h-screen py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-20 animate-in slide-in-from-bottom-4 duration-500">
                    <Badge variant="secondary"><span className="px-2">Flexible Plans</span></Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary mt-6 mb-6">
                        Simple, transparent <span className="text-primary">pricing</span>.
                    </h1>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        Choose the plan that fits your business needs. No hidden fees.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom-8 duration-700">
                    {tiers.map((tier, index) => (
                        <PricingCard
                            key={index}
                            title={tier.title}
                            price={tier.price}
                            description={tier.description}
                            features={tier.features}
                            isPopular={tier.isPopular}
                            buttonText={tier.isPopular ? "Get Started" : "Contact Sales"}
                            onButtonClick={() => handlePlanSelect(tier.title)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
