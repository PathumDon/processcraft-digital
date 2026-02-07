'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { ChevronLeft, CheckCircle, Mail, Phone, Calendar, Briefcase, Target, Smartphone, AlertCircle, Loader2 } from 'lucide-react';

type Step = 'business-stage' | 'primary-goal' | 'website-complexity' | 'timeline' | 'contact' | 'success';

interface FormData {
    businessStage: string;
    primaryGoal: string;
    websiteComplexity: string;
    timeline: string;
    name: string;
    contactMethod: 'email' | 'whatsapp';
    contactValue: string;
    _honey: string; // Honeypot field
}

// --- Step Components ---

interface StepProps {
    handleSelect: (field: keyof FormData, value: string) => void;
}

const BusinessStageStep = ({ handleSelect }: StepProps) => (
    <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
        <h3 className="text-xl font-bold text-secondary">What stage is your business in?</h3>
        <div className="grid grid-cols-1 gap-3">
            {['Just starting (idea / new business)', 'Small business (1–10 employees)', 'Growing business (10–50 employees)', 'Established company'].map((option) => (
                <button
                    key={option}
                    onClick={() => handleSelect('businessStage', option)}
                    className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-blue-50/50 transition-all font-medium text-secondary hover:text-primary group"
                >
                    {option}
                </button>
            ))}
        </div>
    </div>
);

const PrimaryGoalStep = ({ handleSelect }: StepProps) => (
    <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
        <h3 className="text-xl font-bold text-secondary">What is your primary goal?</h3>
        <div className="grid grid-cols-1 gap-3">
            {[
                { label: 'Online presence / credibility', icon: Briefcase },
                { label: 'Get more inquiries & leads', icon: Target },
                { label: 'Sell products or services online', icon: Smartphone },
                { label: 'Automate processes (forms, CRM, WhatsApp)', icon: CheckCircle },
                { label: 'Improve internal operations', icon: Calendar }
            ].map((item) => (
                <button
                    key={item.label}
                    onClick={() => handleSelect('primaryGoal', item.label)}
                    className="flex items-center gap-3 w-full text-left p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-blue-50/50 transition-all group"
                >
                    <item.icon className="h-5 w-5 text-muted group-hover:text-primary" />
                    <span className="font-medium text-secondary group-hover:text-primary">{item.label}</span>
                </button>
            ))}
        </div>
    </div>
);

const WebsiteComplexityStep = ({ handleSelect }: StepProps) => (
    <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
        <h3 className="text-xl font-bold text-secondary">What do you think you need?</h3>
        <div className="grid grid-cols-1 gap-3">
            {['Simple one-page website', 'Standard business website (5–7 pages)', 'Website with forms & integrations', 'Custom system / automation-heavy solution'].map((option) => (
                <button
                    key={option}
                    onClick={() => handleSelect('websiteComplexity', option)}
                    className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-blue-50/50 transition-all font-medium text-secondary hover:text-primary"
                >
                    {option}
                </button>
            ))}
        </div>
    </div>
);

const TimelineStep = ({ handleSelect }: StepProps) => (
    <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
        <h3 className="text-xl font-bold text-secondary">When are you looking to start?</h3>
        <div className="grid grid-cols-1 gap-3">
            {['ASAP (1–2 weeks)', 'Within 1 month', '1–3 months', 'No fixed timeline'].map((option) => (
                <button
                    key={option}
                    onClick={() => handleSelect('timeline', option)}
                    className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-blue-50/50 transition-all font-medium text-secondary hover:text-primary"
                >
                    {option}
                </button>
            ))}
        </div>
    </div>
);

interface ContactStepProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    handleSubmit: (e: React.FormEvent) => void;
    isSubmitting: boolean;
    error: string;
}

const ContactStep = ({ formData, setFormData, handleSubmit, isSubmitting, error }: ContactStepProps) => (
    <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-right-4">
        <h3 className="text-xl font-bold text-secondary">How should we contact you?</h3>

        {/* Honeypot field */}
        <input
            type="text"
            name="_honey"
            value={formData._honey}
            onChange={(e) => setFormData(prev => ({ ...prev, _honey: e.target.value }))}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
        />

        <Input
            label="Full Name"
            placeholder="John Doe"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            disabled={isSubmitting}
        />

        <div className="space-y-3">
            <label className="block text-sm font-medium text-secondary">Preferred Contact Method</label>
            <div className="flex gap-4">
                <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, contactMethod: 'email', contactValue: '' }))}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-all ${formData.contactMethod === 'email' ? 'border-primary bg-blue-50 text-primary' : 'border-gray-200 hover:bg-gray-50'}`}
                    disabled={isSubmitting}
                >
                    <Mail size={18} /> Email
                </button>
                <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, contactMethod: 'whatsapp', contactValue: '' }))}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-all ${formData.contactMethod === 'whatsapp' ? 'border-primary bg-blue-50 text-primary' : 'border-gray-200 hover:bg-gray-50'}`}
                    disabled={isSubmitting}
                >
                    <Phone size={18} /> WhatsApp
                </button>
            </div>
        </div>

        {formData.contactMethod === 'email' ? (
            <Input
                label="Email Address"
                type="email"
                placeholder="john@company.com"
                required
                value={formData.contactValue}
                onChange={(e) => setFormData(prev => ({ ...prev, contactValue: e.target.value }))}
                disabled={isSubmitting}
            />
        ) : (
            <Input
                label="WhatsApp Number"
                type="tel"
                placeholder="+971 50 123 4567"
                required
                value={formData.contactValue}
                onChange={(e) => setFormData(prev => ({ ...prev, contactValue: e.target.value }))}
                disabled={isSubmitting}
            />
        )}

        {error && (
            <div className="p-3 bg-red-50 text-red-600 rounded-lg flex items-center gap-2 text-sm animate-in slide-in-from-top-1">
                <AlertCircle size={16} />
                {error}
            </div>
        )}

        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
                <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Sending...
                </>
            ) : (
                'Submit Request'
            )}
        </Button>
    </form>
);

const SuccessStep = ({ formData }: { formData: FormData }) => (
    <div className="text-center space-y-4 py-8 animate-in zoom-in duration-500">
        <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
            <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold text-secondary">Request Received!</h3>
        <p className="text-muted max-w-sm mx-auto">
            Thanks, {formData.name}. We&apos;ll reach out via {formData.contactMethod === 'whatsapp' ? 'WhatsApp' : 'email'} shortly to discuss your project.
        </p>
    </div>
);

// --- Main Component ---

export function LeadForm() {
    const [currentStep, setCurrentStep] = useState<Step>('business-stage');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState<FormData>({
        businessStage: '',
        primaryGoal: '',
        websiteComplexity: '',
        timeline: '',
        name: '',
        contactMethod: 'email',
        contactValue: '',
        _honey: '',
    });

    const scriptURL = "https://script.google.com/macros/s/AKfycbyW4hvLk8mZ1POe4FLo79KRqepUlTz4vGKA07xThzhDcoYdIO-JFTnM1ZpbSlvcfIrn/exec";

    const handleSelect = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        nextStep();
    };

    const nextStep = () => {
        if (currentStep === 'business-stage') setCurrentStep('primary-goal');
        else if (currentStep === 'primary-goal') setCurrentStep('website-complexity');
        else if (currentStep === 'website-complexity') setCurrentStep('timeline');
        else if (currentStep === 'timeline') setCurrentStep('contact');
        else if (currentStep === 'contact') setCurrentStep('success');
    };

    const prevStep = () => {
        if (currentStep === 'primary-goal') setCurrentStep('business-stage');
        if (currentStep === 'website-complexity') setCurrentStep('primary-goal');
        if (currentStep === 'timeline') setCurrentStep('website-complexity');
        if (currentStep === 'contact') setCurrentStep('timeline');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Honeypot check
        if (formData._honey) {
            // Fake success for bots
            setCurrentStep('success');
            return;
        }

        setIsSubmitting(true);
        setError('');

        // Prepare form data for submission
        const data = new FormData();
        data.append('businessStage', formData.businessStage);
        data.append('primaryGoal', formData.primaryGoal);
        data.append('websiteComplexity', formData.websiteComplexity);
        data.append('timeline', formData.timeline);
        data.append('name', formData.name);
        data.append('contactMethod', formData.contactMethod);
        data.append('contactValue', formData.contactValue);
        // We do not append _honey

        try {
            await fetch(scriptURL, {
                method: 'POST',
                body: data
            });

            setCurrentStep('success');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err) {
            console.error('Submission error:', err);
            setError('Something went wrong. Please try again or email us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Calculate progress percentage
    const steps: Step[] = ['business-stage', 'primary-goal', 'website-complexity', 'timeline', 'contact'];
    const currentStepIndex = steps.indexOf(currentStep);
    const progress = currentStep === 'success' ? 100 : Math.max(10, ((currentStepIndex + 1) / steps.length) * 100);

    return (
        <Card className="max-w-xl mx-auto w-full shadow-xl shadow-blue-900/5 border-blue-100">
            <CardHeader className="bg-gray-50/50 border-b-0 pb-0">
                <div className="flex items-center justify-between mb-2">
                    <Badge variant="default">Get Started</Badge>
                    {currentStep !== 'business-stage' && currentStep !== 'success' && (
                        <button onClick={prevStep} className="text-sm text-muted hover:text-secondary flex items-center gap-1" disabled={isSubmitting}>
                            <ChevronLeft size={14} /> Back
                        </button>
                    )}
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </CardHeader>
            <CardContent className="pt-6 min-h-[400px]">
                {currentStep === 'business-stage' && <BusinessStageStep handleSelect={handleSelect} />}
                {currentStep === 'primary-goal' && <PrimaryGoalStep handleSelect={handleSelect} />}
                {currentStep === 'website-complexity' && <WebsiteComplexityStep handleSelect={handleSelect} />}
                {currentStep === 'timeline' && <TimelineStep handleSelect={handleSelect} />}
                {currentStep === 'contact' && <ContactStep formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} isSubmitting={isSubmitting} error={error} />}
                {currentStep === 'success' && <SuccessStep formData={formData} />}
            </CardContent>
        </Card>
    );
}
