import React from 'react';
import { LeadForm } from '@/components/features/LeadForm';
import { Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-500">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                        Let's Build Your <span className="text-primary">Roadmap</span>.
                    </h1>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        Tell us about your project or business goals, and we'll help you find the right digital solution. No obligation, just clear next steps.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* Contact Info Side */}
                    <div className="lg:col-span-1 space-y-8 animate-in slide-in-from-left-4 duration-700">
                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-4">Direct Contact</h3>
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-white rounded-lg shadow-sm text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="font-medium text-secondary">Email</p>
                                    <a href="mailto:hello@processcraftdigital.com" className="text-muted hover:text-primary transition-colors">hello@processcraftdigital.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-sm text-primary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="font-medium text-secondary">Office</p>
                                    <p className="text-muted">Dubai Silicon Oasis<br />Dubai, UAE</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-900/20">
                            <h4 className="font-bold text-lg mb-2">Did you know?</h4>
                            <p className="text-blue-100 text-sm leading-relaxed">
                                Companies that automate their lead qualification save an average of 15 hours per week on sales calls.
                            </p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-2">
                        <LeadForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
