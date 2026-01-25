import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    variant?: 'default' | 'outline' | 'secondary' | 'success';
}

export function Badge({ children, variant = 'default', className = '', ...props }: BadgeProps) {
    const variants = {
        default: "bg-blue-50 text-primary border-blue-100",
        outline: "bg-transparent border-gray-200 text-muted",
        secondary: "bg-gray-100 text-secondary border-gray-200",
        success: "bg-green-50 text-green-700 border-green-100"
    };

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant]} ${className}`} {...props}>
            {children}
        </span>
    );
}
