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
            title: "Essentials (Starter)",
            price: "299",
            originalPrice: "999",
            badgeText: "Intro Offer",
            promoText: "Introductory Launch Price – Limited Slots!",
            description: "Perfect for New businesses ready to launch an online presence with core essentials.",
            isPopular: true,
            features: [
                { text: "High-Speed Landing Page", included: true },
                { text: "Basic SEO Optimization (titles, meta, on-page basics)", included: true },
                { text: "Google Business Profile Setup", included: true },
                { text: "Google Search Console Submission", included: true },
                { text: "CMS / Backend Access", included: false },
                { text: "Automation Features", included: false },
            ]
        },
        {
            title: "Dynamic (Professional)",
            price: "3,999",
            description: "Ideal for Businesses that want an editable website and ongoing lead capture tools.",
            features: [
                { text: "Multi-Page Professional Website", included: true },
                { text: "Basic SEO Optimization", included: true },
                { text: "Google Business Profile Setup", included: true },
                { text: "Full Website with CMS (easy content updates)", included: true },
                { text: "WhatsApp Business Integration", included: true },
                { text: "Dynamic Blog / Catalog System", included: true },
                { text: "Priority Monthly Updates (site improvements + tweaks)", included: true },
                { text: "Custom Automation (advanced)", included: false },
            ]
        },
        {
            title: "Strategic (Growth + Automation)",
            price: "Custom",
            description: "Best for Businesses who want processes automated plus stronger online performance.",
            features: [
                { text: "Everything in Dynamic", included: true },
                { text: "Process Automation Setup", included: true },
                { text: "Automated lead routing (e.g., form → WhatsApp/CRM)", included: true },
                { text: "Auto-responses & basic workflows", included: true },
                { text: "CRM / Lead Management Integration", included: true },
                { text: "Performance Tracking Setup (Analytics + KPI dashboard)", included: true },
                { text: "Monthly Support & Optimization", included: true },
            ]
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        "name": "Web Design & Automation Packages",
        "description": "Professional web design and automation solutions for businesses in Dubai and UAE.",
        "itemListElement": tiers.map((tier, index) => ({
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": tier.title,
                "description": tier.description
            },
            "price": tier.price === "Custom" ? "0" : tier.price.replace(/,/g, ""),
            "priceCurrency": "AED"
        }))
    };

    return (
        <div className="bg-white min-h-screen py-10 md:py-20 px-4">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 md:mb-20 animate-in slide-in-from-bottom-4 duration-500">
                    <Badge variant="secondary"><span className="px-2">Flexible Plans</span></Badge>
                    <h1 className="text-3xl md:text-5xl font-bold text-secondary mt-6 mb-6">
                        Web Design & <span className="text-primary">Automation Packages</span>
                    </h1>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        Choose the plan that fits your business needs. No hidden fees.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            // @ts-ignore
                            originalPrice={tier.originalPrice}
                            // @ts-ignore
                            badgeText={tier.badgeText}
                            // @ts-ignore
                            promoText={tier.promoText}
                            className={`animate-in slide-in-from-bottom-8 duration-700 fill-mode-both fade-in ${index === 0 ? 'delay-0' :
                                index === 1 ? 'delay-150' :
                                    'delay-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
