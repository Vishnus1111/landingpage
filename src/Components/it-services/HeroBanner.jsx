import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Palette, Code, HeartHandshake } from 'lucide-react';
import { Button } from '@/Components/ui/button';

const processVisualSteps = [
  { id: 1, label: 'Understand', icon: MessageSquare, stroke: '#22d3ee', iconLeft: 'left-[10%]' },
  { id: 2, label: 'Design', icon: Palette, stroke: '#3b45f2', iconLeft: 'left-[36.5%]' },
  { id: 3, label: 'Develop', icon: Code, stroke: '#8b3df8', iconLeft: 'left-[63.5%]' },
  { id: 4, label: 'Support', icon: HeartHandshake, stroke: '#f43fa8', iconLeft: 'left-[90%]' },
];

const flowPathD = 'M 146 156 C 208 156, 220 202, 282 156 S 416 110, 478 156 S 612 202, 674 156 S 708 110, 770 156';

export default function HeroBanner({ onScrollToEstimator, onScrollToServices }) {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-32 pb-20 lg:pt-40 px-6 lg:px-8">
      {/* Subtle background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#f0f4ff] -translate-y-1/4 translate-x-1/4 blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#fff8ee] translate-y-1/4 -translate-x-1/4 blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-[#000066] leading-tight tracking-tight">
                Welcome to<br />
                <span className="bg-gradient-to-r from-[#000066] to-[#f6af35] bg-clip-text text-transparent">
                  Meilleur Analytics<br />
                  IT Services
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                Innovative IT Solutions - Empowering Your Digital Growth
              </h2>
              
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                Meilleur Analytics IT Services is driven by skilled professionals delivering scalable and reliable solutions across Web Development, Software Solutions, Cloud Services, and Digital Transformation. We combine technical expertise, modern technologies, and a client-focused approach to help businesses build, optimize, and grow in the digital world.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={onScrollToEstimator}
                size="lg"
                className="bg-[#f6af35] hover:bg-[#e89d2a] text-white px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#f6af35]/20"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={onScrollToServices}
                className="border-2 border-[#000066] text-[#000066] hover:bg-[#000066] hover:text-white px-8 py-6 text-lg font-medium rounded-full transition-all duration-300"
              >
                Explore Our Services
              </Button>
            </div>
          </motion.div>

          {/* RIGHT — Process Infographic Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, delay: 0.3 }} 
            className="relative hidden lg:flex items-center justify-center h-[500px]"
          >
            <div className="relative w-full max-w-[640px] h-[330px]">
              <svg
                className="absolute inset-x-0 top-[22px] w-full h-[190px]"
                viewBox="0 0 900 260"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="heroFlowGradient" x1="146" y1="156" x2="770" y2="156" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="36%" stopColor="#3b45f2" />
                    <stop offset="70%" stopColor="#8b3df8" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <filter id="heroDotGlow" x="-250%" y="-250%" width="500%" height="500%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                  </filter>
                </defs>

                <path id="heroFlowPath" d={flowPathD} fill="none" stroke="url(#heroFlowGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

                <circle cx="282" cy="156" r="7" fill="#ffffff" stroke="url(#heroFlowGradient)" strokeWidth="3" />
                <circle cx="478" cy="156" r="7" fill="#ffffff" stroke="url(#heroFlowGradient)" strokeWidth="3" />
                <circle cx="674" cy="156" r="7" fill="#ffffff" stroke="url(#heroFlowGradient)" strokeWidth="3" />

                <circle cx="0" cy="0" r="8" fill="#fff7bf" opacity="0.8" filter="url(#heroDotGlow)">
                  <animateMotion dur="5.2s" repeatCount="indefinite" rotate="auto" path={flowPathD} />
                </circle>
                <circle cx="0" cy="0" r="4" fill="#ffffff">
                  <animateMotion dur="5.2s" repeatCount="indefinite" rotate="auto" path={flowPathD} />
                </circle>
              </svg>

              {processVisualSteps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 + index * 0.12 }}
                    className={`absolute top-0 ${step.iconLeft} -translate-x-1/2 w-[130px] flex flex-col items-center text-center`}
                  >
                    <div className="relative w-24 h-24">
                      <div
                        className="absolute inset-0 rounded-full border-[3px]"
                        style={{ borderColor: step.stroke, borderTopColor: 'transparent', transform: 'rotate(-28deg)' }}
                      />
                      <div className="absolute inset-[12px] rounded-full border-[3px]" style={{ borderColor: step.stroke }} />
                      <div className="absolute inset-[24px] rounded-full border border-gray-100 bg-white flex items-center justify-center shadow-sm">
                        <StepIcon className="w-6 h-6 text-[#1f2937]" strokeWidth={2.2} />
                      </div>
                    </div>

                    <div className="mt-4 text-[17px] font-bold text-[#000066]">{step.label}</div>
                  </motion.div>
                );
              })}

              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-4 left-10 w-24 h-24 rounded-full bg-[#22d3ee]/15 blur-2xl" />
                <div className="absolute top-6 right-8 w-24 h-24 rounded-full bg-[#a855f7]/15 blur-2xl" />
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-[#ec4899]/10 blur-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
