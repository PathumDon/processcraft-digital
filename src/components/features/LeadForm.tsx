'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, CheckCircle, ChevronLeft, Briefcase, Zap, MessageSquare, Layout } from 'lucide-react';

type Step = 'segmentation' | 'pain-point' | 'budget' | 'contact' | 'success-qualified' | 'success-unqualified';

interface FormData {
    role: string;
    bottleneck: string;
    budget: string;
    name: string;
    email: string;
    website: string;
}

export function LeadForm() {
    const [currentStep, setCurrentStep] = useState<Step>('segmentation');
    const [formData, setFormData] = useState<FormData>({
        role: '',
        bottleneck: '',
        budget: '',
        name: '',
        email: '',
        website: ''
    });

    const handleSelect = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        nextStep(field, value);
    };

    const nextStep = (field?: keyof FormData, value?: string) => {
        if (currentStep === 'segmentation') {
            if (value === 'Student / Other') {
                setCurrentStep('success-unqualified'); // Immediate disqualify
            } else {
                setCurrentStep('pain-point');
            }
        } else if (currentStep === 'pain-point') {
            setCurrentStep('budget');
        } else if (currentStep === 'budget') {
            if (value === '< 5,000 AED') {
                setCurrentStep('success-unqualified'); // Filter low budget
            } else {
                setCurrentStep('contact');
            }
        } else if (currentStep === 'contact') {
            setCurrentStep('success-qualified');
        }
    };

    const prevStep = () => {
        if (currentStep === 'pain-point') setCurrentStep('segmentation');
        if (currentStep === 'budget') setCurrentStep('pain-point');
        if (currentStep === 'contact') setCurrentStep('budget');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setCurrentStep('success-qualified');
        }, 1000);
    };

    // --- Step Components ---

    const SegmentationStep = () => (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl font-bold text-secondary">First, what describes you best?</h3>
            <div className="grid grid-cols-1 gap-3">
                {['Business Owner / Founder', 'Operations Manager', 'Freelancer / Consultant', 'Student / Other'].map((role) => (
                    <button
                        key={role}
                        onClick={() => handleSelect('role', role)}
                        className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-blue-50/50 transition-all text-left group"
                    >
                        <span className="font-medium text-secondary group-hover:text-primary">{role}</span>
                        <ChevronLeft className="rotate-180 text-gray-300 group-hover:text-primary" size={20} />
                    </button>
                ))}
            </div>
        </div>
    );

    const PainPointStep = () => (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl font-bold text-secondary">What is your biggest bottleneck?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                    { label: 'Manual Repetitive Data', icon: Zap, value: 'Automation' },
                    { label: 'Website Doesn\'t Convert', icon: Layout, value: 'Web' },
                    { label: 'Missed Client Messages', icon: MessageSquare, value: 'WhatsApp' },
                    { label: 'All of the above', icon: Briefcase, value: 'Full Suite' }
                ].map((item) => (
                    <button
                        key={item.value}
                        onClick={() => handleSelect('bottleneck', item.value)}
                        className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 hover:border-primary hover:bg-blue-50/50 transition-all text-center gap-3 group h-full"
                    >
                        <item.icon className="h-8 w-8 text-muted group-hover:text-primary transition-colors" />
                        <span className="font-medium text-secondary group-hover:text-primary">{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );

    const BudgetStep = () => (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl font-bold text-secondary">Estimated Project Budget?</h3>
            <p className="text-sm text-muted">This helps us recommend the right package.</p>
            <div className="space-y-3">
                {['< 5,000 AED', '5,000 AED - 20,000 AED', '20,000 AED - 75,000 AED', '75,000 AED+'].map((range) => (
                    <button
                        key={range}
                        onClick={() => handleSelect('budget', range)}
                        className="w-full p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-blue-50/50 transition-all text-left font-medium text-secondary hover:text-primary"
                    >
                        {range}
                    </button>
                ))}
            </div>
        </div>
    );

    const ContactStep = () => (
        <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl font-bold text-secondary">Great fit. Where should we send the strategy?</h3>
            <div className="space-y-4">
                <Input
                    label="Full Name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <Input
                    label="Work Email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Input
                    label="Company Website (Optional)"
                    placeholder="www.company.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
            </div>
            <Button type="submit" className="w-full mt-2" size="lg">
                Book Strategy Call
            </Button>
        </form>
    );

    const SuccessQualified = () => (
        <div className="text-center space-y-4 py-8 animate-in zoom-in duration-500">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-secondary">You're Qualified!</h3>
            <p className="text-muted max-w-sm mx-auto">
                Your business is a perfect match for our process. Let's build your roadmap.
            </p>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 mt-6">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2">Next Step</p>
                <p className="font-medium text-secondary">Redirecting to Calendar...</p>
            </div>
            <Button className="w-full" variant="secondary" onClick={() => window.open('https://cal.com', '_blank')}>
                Open Calendar Now
            </Button>
        </div>
    );

    const SuccessUnqualified = () => (
        <div className="text-center space-y-4 py-8 animate-in zoom-in duration-500">
            <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-primary">
                <Briefcase size={32} />
            </div>
            <h3 className="text-2xl font-bold text-secondary">Here are free resources for you</h3>
            <p className="text-muted max-w-sm mx-auto">
                Based on your current stage, our "DIY Automation Guide" is the best place to start.
            </p>
            <Button className="w-full mt-4" onClick={() => window.location.href = '/resources'}>
                Get Free Guide
            </Button>
        </div>
    );

    return (
        <Card className="max-w-xl mx-auto w-full shadow-xl shadow-blue-900/5 border-blue-100">
            <CardHeader className="bg-gray-50/50 border-b-0 pb-0">
                <div className="flex items-center justify-between mb-2">
                    <Badge variant="default">Evaluation</Badge>
                    {currentStep !== 'segmentation' && !currentStep.startsWith('success') && (
                        <button onClick={prevStep} className="text-sm text-muted hover:text-secondary flex items-center gap-1">
                            <ChevronLeft size={14} /> Back
                        </button>
                    )}
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-500 ease-out"
                        style={{
                            width:
                                currentStep === 'segmentation' ? '10%' :
                                    currentStep === 'pain-point' ? '35%' :
                                        currentStep === 'budget' ? '65%' :
                                            currentStep === 'contact' ? '90%' : '100%'
                        }}
                    />
                </div>
            </CardHeader>
            <CardContent className="pt-6 min-h-[400px]">
                {currentStep === 'segmentation' && <SegmentationStep />}
                {currentStep === 'pain-point' && <PainPointStep />}
                {currentStep === 'budget' && <BudgetStep />}
                {currentStep === 'contact' && <ContactStep />}
                {currentStep === 'success-qualified' && <SuccessQualified />}
                {currentStep === 'success-unqualified' && <SuccessUnqualified />}
            </CardContent>
        </Card>
    );
}
