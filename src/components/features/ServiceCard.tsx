import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { ArrowRight, Check } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
    features: string[];
    href: string;
    delay?: number;
}

export function ServiceCard({ title, description, icon: Icon, features, href, delay = 0 }: ServiceCardProps) {
    return (
        <Card className="h-full hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 group">
            <CardContent className="h-full flex flex-col p-8">
                <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold text-secondary mb-3">{title}</h3>
                <p className="text-muted leading-relaxed mb-8 flex-grow">
                    {description}
                </p>

                <ul className="space-y-3 mb-8">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-secondary">
                            <Check size={16} className="text-primary mt-0.5 shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                    Explore Solution <ArrowRight size={18} />
                </Link>
            </CardContent>
        </Card>
    );
}
