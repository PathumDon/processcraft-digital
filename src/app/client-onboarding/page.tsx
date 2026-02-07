import React from 'react';
import { ClientOnboardingForm } from '@/components/features/ClientOnboardingForm';

export const metadata = {
    title: 'Website Prototype Brief | ProcessCraft Digital',
    description: 'Submit your project details to get started with your website prototype.',
};

export default function ClientOnboardingPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <ClientOnboardingForm />
            </div>
        </div>
    );
}
