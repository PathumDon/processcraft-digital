'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    // Pages with dark headers where navbar should be white initially
    const darkHeaderRoutes = ['/about'];
    const isDarkHeader = darkHeaderRoutes.includes(pathname);

    // Dynamic styles based on scroll and route
    const isTransparent = !scrolled && isDarkHeader;
    const textColorClass = isTransparent ? 'text-white' : 'text-secondary';
    const hoverColorClass = isTransparent ? 'hover:text-blue-200' : 'hover:text-primary';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '/#services' },
        { name: 'About', href: '/#about' },
        { name: 'Pricing', href: '/pricing' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-8 w-40">
                        <Image
                            src="/images/processcraft_logo.svg"
                            alt="ProcessCraft"
                            fill
                            className={`object-contain object-left ${isTransparent ? 'brightness-0 invert' : ''}`}
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${textColorClass} ${hoverColorClass}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className={`flex items-center gap-4 pl-4 border-l ${isTransparent ? 'border-white/20' : 'border-gray-200'}`}>
                        {/* Login link removed as per audit */}
                        <Button size="sm" onClick={() => router.push('/contact')}>
                            Book Strategy Call
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`md:hidden p-2 ${textColorClass}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-secondary p-2 hover:bg-gray-50 rounded-md"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="h-px bg-gray-100 my-1" />
                    <Button className="w-full" onClick={() => {
                        setMobileMenuOpen(false);
                        router.push('/contact');
                    }}>
                        Book Strategy Call
                    </Button>
                </div>
            )}
        </nav>
    );
}
