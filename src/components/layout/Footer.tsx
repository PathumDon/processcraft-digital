import React from 'react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-xl font-bold tracking-tight text-secondary">
                                Process<span className="text-primary">Craft</span>
                            </span>
                        </Link>
                        <p className="text-muted text-sm leading-relaxed mb-6">
                            Building the digital infrastructure for tomorrow's industry leaders.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            <div className="w-8 h-8 rounded-full bg-gray-100" />
                            <div className="w-8 h-8 rounded-full bg-gray-100" />
                            <div className="w-8 h-8 rounded-full bg-gray-100" />
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold text-secondary mb-4">Services</h4>
                        <ul className="space-y-3 text-sm text-muted">
                            <li><Link href="/#services" className="hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link href="/#services" className="hover:text-primary transition-colors">Process Automation</Link></li>
                            <li><Link href="/contact?service=whatsapp" className="hover:text-primary transition-colors">WhatsApp Business</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-secondary mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-muted">
                            <li><Link href="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Content */}
                    <div>
                        <h4 className="font-semibold text-secondary mb-4">Stay efficient.</h4>
                        <p className="text-sm text-muted mb-4">Join 1,000+ founders receiving our weekly automation tips.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:border-primary"
                            />
                            <button className="bg-secondary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} ProcessCraft Digital. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-gray-600">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-gray-600">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
