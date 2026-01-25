import React from 'react';
import Link from 'next/link';
import { ServiceCard } from '@/components/features/ServiceCard';
import { Badge } from '@/components/ui/Badge';
import { Globe, Bot, Smartphone, Database } from 'lucide-react';

export default function ServicesPage() {
    const services = [
        {
            title: "Web Presence",
            description: "High-performance, SEO-optimized websites that convert visitors into leads. Built with Next.js for speed and scalability.",
            icon: Globe,
            features: ["Custom Design System", "SEO & Performance Optimization", "CMS Integration", "Analytics Setup"],
            href: "/contact?service=web"
        },
        {
            title: "Process Automation",
            description: "Stop wasting human talent on robot work. We build invisible workflows that connect your apps and automate repetitive tasks.",
            icon: Bot,
            features: ["n8n & Zapier Workflows", "API Integrations", "Data Synchronization", "Automated Reporting"],
            href: "/contact?service=automation"
        },
        {
            title: "WhatsApp Solutions",
            description: "Meet your customers where they are. Automated chatbots, broadcast campaigns, and CRM integration for WhatsApp Business.",
            icon: Smartphone,
            features: ["Business API Setup", "Chatbot Logic Flows", "CRM Integration (HubSpot)", "Broadcast Campaigns"],
            href: "/contact?service=whatsapp"
        }
    ];

    return (
        <div className="bg-white min-h-screen py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-20 animate-in slide-in-from-bottom-4 duration-500">
                    <Badge variant="secondary"><span className="px-2">Our Expertise</span></Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary mt-6 mb-6">
                        Digital Solutions for the <span className="text-primary">Modern Business</span>.
                    </h1>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        We don't just build websites. We build digital ecosystems that save time, reduce costs, and drive revenue.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom-8 duration-700">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} delay={index * 100} />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-32 p-12 bg-secondary rounded-3xl text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Ready to automate your growth?</h2>
                        <p className="text-blue-100 mb-8">
                            Book a free 30-minute strategy call to discuss your bottlenecks and how we can solve them.
                        </p>
                        <Link
                            href="/contact"
                            className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/50 inline-block"
                        >
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
