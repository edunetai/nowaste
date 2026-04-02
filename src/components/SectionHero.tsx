import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeroProps {
  title: string;
  subtitle: string;
  className?: string;
  children?: ReactNode;
}

export default function SectionHero({ title, subtitle, className = '', children }: SectionHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16 ${
        className || 'bg-gradient-to-br from-[#2D5A27] via-[#3d7a36] to-[#23471E]'
      }`}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight" style={{
          textShadow: '3px 3px 12px rgba(0,0,0,0.5), 0 0 30px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.1)'
        }}>
          {title}
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed" style={{
          textShadow: '2px 2px 8px rgba(0,0,0,0.4), 0 0 15px rgba(0,0,0,0.25), 0 1px 0 rgba(255,255,255,0.08)'
        }}>
          {subtitle}
        </p>
        
        {/* Optional children content */}
        {children && (
          <div className="mt-8">
            {children}
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/60 via-white to-white/60" />
    </motion.div>
  );
}
