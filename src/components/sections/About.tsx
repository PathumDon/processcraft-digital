import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Users, Target, Shield, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Link from 'next/link';

export function About() {
    return (
        <section id="about" className="bg-white py-20">
            {/* Header */}
            <div className="container mx-auto px-4 mb-20">
                <div className="text-center max-w-4xl mx-auto">
                    <Badge variant="secondary" className="mb-6">About ProcessCraft Digital</Badge>
                    <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-8 leading-tight">
                        We Build Digital Systems That <span className="text-primary">Actually Make Life Easier</span>.
                    </h2>
                    <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                        Small and growing businesses deserve the same smart systems as big companies—without the complexity or cost.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-12 mb-20 animate-in slide-in-from-bottom-8 duration-1000 delay-100">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-secondary mb-4">Our Origin Story</h3>
                            <p className="text-muted mb-4 leading-relaxed">
                                Our founder saw firsthand how many businesses struggle with outdated processes, manual work, and underused digital tools. So we started ProcessCraft Digital to help businesses use the internet, automation, and smart systems to save time, reduce stress, and drive real revenue growth.
                            </p>
                            <p className="text-muted leading-relaxed">
                                We’re a startup agency, but we bring big experience. Our team has over 7 years of hands-on industry experience helping businesses streamline operations, improve processes, boost productivity, and increase efficiency through automation.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-6 rounded-xl text-center">
                                <div className="text-3xl font-bold text-primary mb-1">7+</div>
                                <div className="text-sm text-secondary font-medium">Years Experience</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl text-center">
                                <div className="text-3xl font-bold text-secondary mb-1">10X</div>
                                <div className="text-sm text-secondary font-medium">Efficiency Boost</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl text-center col-span-2">
                                <div className="text-3xl font-bold text-secondary mb-1">100%</div>
                                <div className="text-sm text-secondary font-medium">Transparency</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="max-w-6xl mx-auto mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-secondary">What We Believe In</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Accessibility", icon: Users, desc: "Digital tools should be simple, affordable, and easy to use." },
                            { title: "Transparency", icon: Shield, desc: "Clear communication, honest pricing, no hidden surprises." },
                            { title: "Results-Driven", icon: Target, desc: "If it doesn’t save time or grow revenue, it’s not worth doing." }
                        ].map((value, i) => (
                            <Card key={i} className="text-center p-6 border-none shadow-lg shadow-gray-100 hover:shadow-xl transition-shadow">
                                <CardContent>
                                    <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-primary mb-4">
                                        <value.icon size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold text-secondary mb-3">{value.title}</h4>
                                    <p className="text-muted">{value.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Approach */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-secondary mb-4">Our Approach</h3>
                        <p className="text-muted">We keep things simple and collaborative.</p>
                    </div>
                    <div className="space-y-4">
                        {[
                            { step: "01", title: "Consultation", desc: "We understand your business, challenges, and goals." },
                            { step: "02", title: "Strategy", desc: "We design the right digital or automation solution for you." },
                            { step: "03", title: "Implementation", desc: "We build, integrate, and launch." },
                            { step: "04", title: "Support", desc: "We stay with you to optimize, improve, and scale." }
                        ].map((phase, i) => (
                            <div key={i} className="flex items-start md:items-center gap-6 p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-100 transition-colors">
                                <span className="text-3xl font-bold text-gray-100">{phase.step}</span>
                                <div>
                                    <h4 className="text-lg font-bold text-secondary">{phase.title}</h4>
                                    <p className="text-muted">{phase.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications CTA */}
                <div className="bg-secondary rounded-3xl p-12 text-center text-white max-w-4xl mx-auto relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4">Certifications & Partnerships</h3>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            We work with trusted platforms and tools across web development, automation, and messaging solutions. Our team continuously upskills and partners with leading technology providers.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                            Work With Us <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
