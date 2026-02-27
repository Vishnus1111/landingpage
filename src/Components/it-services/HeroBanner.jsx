import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Shield, Zap, Database, Lock } from 'lucide-react';
import { Button } from '@/Components/ui/button';

// Floating icons configuration
const floatingIcons = [
  { icon: Shield, position: 'top-8 right-12', delay: 0 },
  { icon: Zap, position: 'top-32 left-8', delay: 0.5 },
  { icon: Database, position: 'bottom-24 right-8', delay: 1 },
  { icon: Lock, position: 'bottom-12 left-16', delay: 1.5 },
];

export default function HeroBanner({ onScrollToEstimator, onScrollToServices }) {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-32 pb-20 lg:pt-40 px-6 lg:px-8">
      {/* Subtle background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#f0f4ff] -translate-y-1/4 translate-x-1/4 blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#fff8ee] translate-y-1/4 -translate-x-1/4 blur-3xl opacity-60" />

      <style>{`
        @keyframes rotateCenter {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        .rotate-slow {
          animation: rotateCenter 15s linear infinite;
        }
        
        .float-animation {
          animation: floatUp 3s ease-in-out infinite;
        }
      `}</style>

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

          {/* RIGHT — Modern Animated Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, delay: 0.3 }} 
            className="relative hidden lg:flex items-center justify-center h-[500px]"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Center rotating coding icon */}
              <div className="relative z-20">
                <div className="rotate-slow w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-yellow-400 flex items-center justify-center shadow-2xl">
                  <div className="w-44 h-44 rounded-full bg-white flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-yellow-50 flex items-center justify-center">
                      <Code2 className="w-16 h-16 text-indigo-600" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating icons around center */}
              {floatingIcons.map(({ icon: Icon, position, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + delay, duration: 0.5, type: 'spring' }}
                  className={`absolute ${position} float-animation`}
                  style={{ animationDelay: `${delay}s` }}
                >
                  <div className="w-16 h-16 rounded-xl backdrop-blur-md bg-white/70 border border-white/40 shadow-lg flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-gradient bg-gradient-to-br from-blue-600 to-yellow-500 bg-clip-text" style={{
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundImage: 'linear-gradient(135deg, #3b82f6, #eab308)'
                    }} />
                  </div>
                </motion.div>
              ))}

              {/* Decorative gradient orbs */}
              <div className="absolute top-20 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-2xl" />
              <div className="absolute bottom-24 left-24 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
