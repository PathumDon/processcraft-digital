import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing - ProcessCraft Digital | Web Design Packages Dubai",
    description: "Transparent pricing for web design, automation, and WhatsApp business solutions in UAE. Choose a plan that fits your growth goals.",
};

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
