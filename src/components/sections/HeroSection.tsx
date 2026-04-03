import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/hero_background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2D5A27] to-[#4a8c42] blur-lg opacity-30 rounded-full"></div>
            <span className="relative inline-block px-6 py-2.5 text-sm font-bold tracking-[0.2em] text-white uppercase bg-gradient-to-r from-[#2D5A27] to-[#3d7a36] rounded-full shadow-lg shadow-[#2D5A27]/30">
              {t('hero.badge') || 'MEKONG DELTA INNOVATION HUB'}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.05] text-white" style={{
            textShadow: '3px 3px 12px rgba(0,0,0,0.5), 0 0 30px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.1)'
          }}>
            <span className="block drop-shadow-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#f0f7ed] to-white" style={{
                textShadow: 'none',
                WebkitTextStroke: '1px rgba(255,255,255,0.3)'
              }}>
                {t('hero.title').split(' ').slice(0, -3).join(' ')}
              </span>
            </span>
            <span className="block mt-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a8e6a3] via-[#7bc96f] to-[#4a8c42]" style={{
                textShadow: 'none'
              }}>
                {t('hero.title').split(' ').slice(-3).join(' ')}
              </span>
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed font-medium" style={{
            textShadow: '2px 2px 8px rgba(0,0,0,0.4), 0 0 15px rgba(0,0,0,0.25), 0 1px 0 rgba(255,255,255,0.08)'
          }}>
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => onNavigate('gap-analysis')} className="w-full sm:w-auto bg-[#2D5A27] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#23471E] transition-all shadow-lg shadow-[#2D5A27]/20 flex items-center justify-center gap-2">
              {t('hero.ctaPrimary')} <ChevronRight size={20} />
            </button>
            <button onClick={() => onNavigate('regulations')} className="w-full sm:w-auto bg-white text-[#1A1A1A] border border-[#E5E5E5] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#F5F5F5] transition-all">
              {t('hero.ctaSecondary')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
