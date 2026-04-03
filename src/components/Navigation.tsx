import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

interface NavigationProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { key: 'home', label: t('navigation.home') },
    { key: 'gap-analysis', label: t('navigation.gapAnalysis') },
    { key: 'regulations', label: t('navigation.regulations') },
    { key: 'roadmap', label: t('navigation.roadmap') },
    { key: 'funding', label: t('navigation.funding') }
  ];

  const handleNavClick = (key: string) => {
    onNavigate(key);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-8 h-8 bg-[#2D5A27] rounded-lg flex items-center justify-center text-white">
              <Leaf size={20} />
            </div>
            <span className="font-bold text-lg tracking-tight text-[#2D5A27]">NOTHING GOES TO WASTE</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`text-sm font-medium transition-colors hover:text-[#2D5A27] ${
                  activeSection === item.key ? 'text-[#2D5A27]' : 'text-[#666666]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-[#2D5A27] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#23471E] transition-all shadow-sm">
              {t('navigation.joinNow')}
            </button>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#1A1A1A]">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-[#E5E5E5] overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className="block w-full text-left text-lg font-medium text-[#666666]"
                >
                  {item.label}
                </button>
              ))}
              <button className="w-full bg-[#2D5A27] text-white py-3 rounded-xl font-semibold">
                {t('navigation.joinNow')}
              </button>
              <div className="pt-4">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
