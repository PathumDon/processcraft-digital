'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Check, Send, AlertCircle } from 'lucide-react';

export function ClientOnboardingForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');
    const [taglineCharCount, setTaglineCharCount] = useState(0);
    const [honeypot, setHoneypot] = useState('');

    const scriptURL = "https://script.google.com/macros/s/AKfycbxhdew59eiwZbOSi-Vs_LBe07JE84y49LsUN00ZwqjETi6MGoA4SIbtPf_Oszpy7I6W4A/exec";

    const handleTaglineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaglineCharCount(e.target.value.length);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Honeypot check
        if (honeypot) {
            // If honeypot is filled, simulate success but do nothing (bot detected)
            setIsSuccess(true);
            return;
        }

        setIsSubmitting(true);
        setError('');

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Remove honeypot from data being sent (if using FormData directly it might send it, 
        // but Google Apps Script likely ignores extra fields unless programmed to look for them.
        // We can just send it as is, or delete it from formData if we want to be clean).
        formData.delete('_honey');

        try {
            await fetch(scriptURL, {
                method: 'POST',
                body: formData
            });

            setIsSuccess(true);
            form.reset();
            setTaglineCharCount(0);
            window.scrollTo({ top: 0, behavior: 'smooth' });

        } catch (err: unknown) {
            console.error('Error!', err);
            setError('Connection error. Please check your internet or try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Style constants
    const sectionTitleStyle = "text-xl font-bold text-secondary mb-6 pb-2 border-b border-gray-100 flex items-center";
    const sectionMarkerStyle = "mr-2 text-primary"; // Arrow or number styling
    const labelStyle = "block text-sm font-semibold text-secondary mb-2";
    const inputBaseStyle = "w-full px-4 py-3 rounded-lg border bg-white text-secondary placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary border-gray-200 transition-all duration-200";

    if (isSuccess) {
        return (
            <Card className="max-w-3xl mx-auto p-12 text-center border-green-100 bg-green-50/50">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">Thank You!</h3>
                <p className="text-muted mb-8">We have received your brief and will be in touch shortly.</p>
                <Button variant="secondary" onClick={() => setIsSuccess(false)}>Send Another Brief</Button>
            </Card>
        );
    }

    return (
        <Card className="max-w-2xl mx-auto border-none shadow-xl shadow-gray-200/50">
            <CardContent className="p-8 md:p-10">
                <header className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Website Prototype Brief</h2>
                    <p className="text-muted">Just enough info to build your first version.</p>
                </header>

                <form id="websiteForm" onSubmit={handleSubmit} className="space-y-12">

                    {/* Honeypot Field - Hidden */}
                    <input
                        type="text"
                        name="_honey"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        style={{ display: 'none' }}
                        tabIndex={-1}
                        autoComplete="off"
                    />

                    {/* 1. Business Basics */}
                    <section>
                        <h3 className={sectionTitleStyle}>
                            <span className={sectionMarkerStyle}>→</span> 1. Business Basics
                        </h3>
                        <div className="space-y-6">
                            <Input
                                label="Business / Brand Name"
                                name="businessName"
                                placeholder="e.g. ProcessCraft Digital"
                                required
                            />

                            <Input
                                label="Industry / Service Type"
                                name="industry"
                                placeholder="e.g. Logistics, Health Clinic, SaaS"
                                required
                            />

                            <div className="relative">
                                <label className={labelStyle}>What do you do? (1 sentence)</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="tagline"
                                        maxLength={150}
                                        onChange={handleTaglineChange}
                                        placeholder="e.g. We help small businesses automate their workflows."
                                        required
                                        className={inputBaseStyle}
                                    />
                                    <span className={`absolute right-3 top-3 text-xs font-medium ${taglineCharCount > 135 ? 'text-red-500' : 'text-gray-400'}`}>
                                        {taglineCharCount} / 150
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label className={labelStyle}>Who is your target customer?</label>
                                <div className="relative">
                                    <select name="audience" required className={`${inputBaseStyle} appearance-none cursor-pointer`}>
                                        <option value="" disabled selected>Select target audience</option>
                                        <option value="B2B (Other businesses)">B2B (Other businesses)</option>
                                        <option value="B2C (Individual consumers)">B2C (Individual consumers)</option>
                                        <option value="SMEs / Startups">SMEs / Startups</option>
                                        <option value="Corporates / Enterprises">Corporates / Enterprises</option>
                                        <option value="Local community">Local community</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>

                            <Input
                                label="Country / Market"
                                name="country"
                                placeholder="e.g. United Kingdom, Global"
                                required
                            />
                        </div>
                    </section>

                    {/* 2. Website Goal */}
                    <section>
                        <h3 className={sectionTitleStyle}>
                            <span className={sectionMarkerStyle}>→</span> 2. Website Goal
                        </h3>
                        <div>
                            <label className={labelStyle}>Main goal of the website</label>
                            <div className="relative">
                                <select name="goal" required className={`${inputBaseStyle} appearance-none cursor-pointer`}>
                                    <option value="" disabled selected>Select primary goal</option>
                                    <option value="Generate Leads">Generate Leads (Inquiries/Quotes)</option>
                                    <option value="Showcase Services">Showcase Services / Portfolio</option>
                                    <option value="Sell Products">Sell Products (E-commerce)</option>
                                    <option value="Build Credibility">Build Credibility / Brand Presence</option>
                                    <option value="Book Appointments">Book Appointments / Consultations</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3. Pages Needed */}
                    <section>
                        <h3 className={sectionTitleStyle}>
                            <span className={sectionMarkerStyle}>→</span> 3. Pages Needed
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gray-50/50 p-6 rounded-xl border border-gray-100">
                            {['Home', 'About', 'Services', 'Products', 'Contact', 'Portfolio', 'Blog', 'Testimonials'].map((page) => (
                                <label key={page} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:shadow-sm cursor-pointer transition-all">
                                    <input
                                        type="checkbox"
                                        name="pages"
                                        value={page}
                                        defaultChecked={page === 'Home'}
                                        className="h-5 w-5 rounded-md border-gray-300 text-primary focus:ring-primary/20 transition-colors cursor-pointer"
                                    />
                                    <span className="text-sm font-medium text-secondary">{page}</span>
                                </label>
                            ))}
                        </div>
                    </section>

                    {/* 4. Brand Direction */}
                    <section>
                        <h3 className={sectionTitleStyle}>
                            <span className={sectionMarkerStyle}>→</span> 4. Brand Direction
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <label className={labelStyle}>Brand Colors / Logo Details</label>
                                <textarea
                                    name="brandInfo"
                                    placeholder="e.g. Navy blue and white, minimalist style. Logo not ready yet."
                                    rows={4}
                                    className={`${inputBaseStyle} resize-y min-h-[100px]`}
                                ></textarea>
                            </div>
                            <Input
                                type="url"
                                label="Reference Website (Link)"
                                name="references"
                                placeholder="https://example.com"
                            />
                        </div>
                    </section>

                    {/* 5. Contact Info */}
                    <section>
                        <h3 className={sectionTitleStyle}>
                            <span className={sectionMarkerStyle}>→</span> 5. Contact Info
                        </h3>
                        <div className="space-y-6">
                            <Input
                                type="email"
                                label="Email Address"
                                name="email"
                                required
                            />
                            <div className="grid md:grid-cols-2 gap-6">
                                <Input
                                    type="tel"
                                    label="Phone"
                                    name="phone"
                                />
                                <Input
                                    type="text"
                                    label="Location"
                                    name="location"
                                />
                            </div>
                            <Input
                                type="text"
                                label="Social Links / WhatsApp"
                                name="socials"
                            />
                        </div>
                    </section>

                    {/* 6. Notes */}
                    <section>
                        <h3 className={sectionTitleStyle}>
                            <span className={sectionMarkerStyle}>→</span> 6. Notes
                        </h3>
                        <div>
                            <label className={labelStyle}>Additional Comment</label>
                            <textarea
                                name="notes"
                                placeholder="e.g. any other specific requirements..."
                                rows={4}
                                className={`${inputBaseStyle} resize-y min-h-[100px]`}
                            ></textarea>
                        </div>
                    </section>

                    {error && (
                        <div className="p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-3 text-sm animate-in slide-in-from-top-2">
                            <AlertCircle size={18} className="shrink-0" />
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full text-lg font-bold py-6 h-auto shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending Brief...' : 'Send Brief'}
                        {!isSubmitting && <Send size={18} className="ml-2" />}
                    </Button>

                </form>
            </CardContent>
        </Card>
    );
}
