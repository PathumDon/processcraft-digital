import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Check, X } from 'lucide-react';

interface PricingFeature {
    text: string;
    included: boolean;
}

interface PricingCardProps {
    title: string;
    price: string;
    description: string;
    features: PricingFeature[];
    isPopular?: boolean;
    buttonText?: string;
    onButtonClick?: () => void;
}

export function PricingCard({
    title,
    price,
    description,
    features,
    isPopular = false,
    buttonText = "Get Started",
    onButtonClick
}: PricingCardProps) {
    return (
        <Card className={`h-full hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 group relative ${isPopular ? 'ring-2 ring-primary border-transparent' : ''}`}>
            {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="default" className="bg-primary text-white border-0 px-4 py-1 shadow-md">
                        Most Popular
                    </Badge>
                </div>
            )}

            <CardContent className="h-full flex flex-col p-8">
                {/* Header Section */}
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-secondary mb-3">{title}</h3>
                    <div className="flex items-baseline justify-center gap-1 my-4">
                        <span className="text-sm font-medium text-muted">AED</span>
                        <span className="text-4xl font-bold text-primary">{price}</span>
                    </div>
                    <p className="text-muted leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-grow">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-secondary">
                            {feature.included ? (
                                <Check size={16} className="text-primary mt-0.5 shrink-0" />
                            ) : (
                                <X size={16} className="text-gray-300 mt-0.5 shrink-0" />
                            )}
                            <span className={feature.included ? 'text-secondary' : 'text-gray-400'}>
                                {feature.text}
                            </span>
                        </li>
                    ))}
                </ul>

                <Button
                    variant={isPopular ? 'primary' : 'secondary'}
                    className="w-full"
                    onClick={onButtonClick}
                >
                    {buttonText}
                </Button>
            </CardContent>
        </Card>
    );
}
