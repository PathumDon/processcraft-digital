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
              Accepting New Projects for Q1
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary leading-[1.15] mb-6">
              Web Design & Business <br className="hidden lg:block" />
              <span className="text-primary">Automation for UAE Growth</span>.
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
          {/* Right Visual - Workflow Automation Animation */}
          <div className="relative animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 aspect-square md:aspect-[4/3] flex items-center justify-center bg-grid-slate-100">
              {/* Background Grid Pattern */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/50" />

              {/* Central Hub */}
              <div className="relative z-10 w-64 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-blue-100 shadow-xl flex flex-col items-center gap-3">
                <div className="flex items-center gap-2 mb-2 w-full border-b border-gray-50 pb-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider ml-auto">Active Workflow</div>
                </div>

                {/* Connection Lines */}
                <div className="absolute top-1/2 left-0 -translate-x-full w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-200" />
                <div className="absolute top-1/2 right-0 translate-x-full w-12 h-0.5 bg-gradient-to-r from-blue-200 to-transparent" />

                <div className="grid grid-cols-1 w-full gap-2">
                  {/* Step 1 */}
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-blue-50/50 border border-blue-100">
                    <div className="p-1.5 bg-white rounded-md shadow-sm text-blue-500">
                      <ArrowRight size={14} />
                    </div>
                    <div className="flex-1">
                      <div className="h-1.5 w-16 bg-blue-200 rounded-full mb-1" />
                      <div className="h-1 w-10 bg-blue-100 rounded-full" />
                    </div>
                    <div className="text-[10px] font-bold text-blue-600">New Lead</div>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex justify-center -my-1">
                    <ArrowRight className="rotate-90 text-gray-300" size={14} />
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-indigo-50/50 border border-indigo-100">
                    <div className="p-1.5 bg-white rounded-md shadow-sm text-indigo-500">
                      <CheckCircle size={14} />
                    </div>
                    <div className="flex-1">
                      <div className="h-1.5 w-20 bg-indigo-200 rounded-full mb-1" />
                      <div className="h-1 w-12 bg-indigo-100 rounded-full" />
                    </div>
                    <div className="text-[10px] font-bold text-indigo-600">Qualified</div>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex justify-center -my-1">
                    <ArrowRight className="rotate-90 text-gray-300" size={14} />
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-green-50/50 border border-green-100">
                    <div className="p-1.5 bg-white rounded-md shadow-sm text-green-500">
                      <CheckCircle size={14} />
                    </div>
                    <div className="flex-1">
                      <div className="h-1.5 w-14 bg-green-200 rounded-full mb-1" />
                      <div className="h-1 w-8 bg-green-100 rounded-full" />
                    </div>
                    <div className="text-[10px] font-bold text-green-600">Synced</div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute top-10 left-10 p-3 bg-white rounded-xl shadow-lg border border-gray-100 animate-bounce duration-[4000ms]">
                <div className="h-8 w-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-10 right-10 p-3 bg-white rounded-xl shadow-lg border border-gray-100 animate-pulse duration-[3000ms]">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
                  <span className="text-xs font-bold text-gray-600">System Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
