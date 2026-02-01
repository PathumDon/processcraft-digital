'use client';

import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4 -z-10" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Accepcting New Projects for Q1
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary leading-[1.15] mb-6">
              Crafting Seamless Business{" "}
              <span className="text-primary">Solutions</span>.
            </h1>

            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-lg">
              ProcessCraft Digital helps businesses automate processes, build a
              strong online presence, and communicate better with customers —
              all without complexity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="gap-2 group" onClick={() => window.location.href = '/contact'}>
                Book Strategy Call
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button variant="secondary" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                View Validated Results
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>ROI Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>2-Week Turnaround</span>
              </div>
            </div>
          </div>

          {/* Right Visual (Placeholder for 3D Illustration) */}
          <div className="relative animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 aspect-square md:aspect-[4/3] flex items-center justify-center group">
              {/* Abstract UI Pattern Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />

              {/* Mockup Elements */}
              <div className="relative w-3/4 h-3/4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-xl p-6 flex flex-col gap-4 transform transition-transform group-hover:scale-[1.02] duration-500">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="h-2 w-20 bg-gray-100 rounded-full" />
                </div>
                <div className="space-y-3">
                  <div className="h-20 w-full bg-blue-50/50 rounded-lg border border-blue-100 flex items-center justify-center text-blue-400 text-xs">
                    Workflow Automation Visualization
                  </div>
                  <div className="h-4 w-full bg-gray-50 rounded" />
                  <div className="h-4 w-2/3 bg-gray-50 rounded" />
                  <div className="flex gap-4 mt-2">
                    <div className="h-12 w-1/3 bg-gray-100 rounded-lg" />
                    <div className="h-12 w-2/3 bg-blue-600/10 rounded-lg" />
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                    $
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Monthly Savings</div>
                    <div className="text-lg font-bold text-secondary">
                      20,000 AED
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
