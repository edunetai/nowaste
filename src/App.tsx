/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Tractor, Sprout, Cloud, Sun, Waves, Flower, Box, Scale, Droplets, Bug,
  ChevronRight, ArrowRight, Info, FileText, TrendingUp, DollarSign,
  Menu, X, Leaf, Globe, AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './i18n/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import ImageModal from './components/ImageModal';
import SectionHero from './components/SectionHero';
import CarbonTickerBanner from './components/CarbonTickerBanner';
import { useTranslatedConstants } from './hooks/useTranslatedConstants';

const IconMap: Record<string, React.ElementType> = {
  Tractor, Sprout, Cloud, Sun, Waves, Flower, Box, Scale, Droplets, Bug
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const { t } = useLanguage();
  const { INNOVATIONS, INCENTIVES, FUNDING_SOURCES, ROADMAP } = useTranslatedConstants();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'gap-analysis', 'regulations', 'roadmap', 'funding'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[#E2F0D9] selection:text-[#2D5A27]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
              <div className="w-8 h-8 bg-[#2D5A27] rounded-lg flex items-center justify-center text-white">
                <Leaf size={20} />
              </div>
              <span className="font-bold text-lg tracking-tight text-[#2D5A27]">NOTHING GOES TO WASTE</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { key: 'home', label: t('navigation.home') },
                { key: 'gap-analysis', label: t('navigation.gapAnalysis') },
                { key: 'regulations', label: t('navigation.regulations') },
                { key: 'roadmap', label: t('navigation.roadmap') },
                { key: 'funding', label: t('navigation.funding') }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollTo(item.key)}
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
                {[
                  { key: 'home', label: t('navigation.home') },
                  { key: 'gap-analysis', label: t('navigation.gapAnalysis') },
                  { key: 'regulations', label: t('navigation.regulations') },
                  { key: 'roadmap', label: t('navigation.roadmap') },
                  { key: 'funding', label: t('navigation.funding') }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollTo(item.key)}
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

      {/* Hero Section */}
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
          {/* Simple semi-transparent white overlay at 10% opacity */}
          <div className="absolute inset-0 bg-white/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Hero Badge - Prominent Section Header Style */}
            <div className="inline-block relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2D5A27] to-[#4a8c42] blur-lg opacity-30 rounded-full"></div>
              <span className="relative inline-block px-6 py-2.5 text-sm font-bold tracking-[0.2em] text-white uppercase bg-gradient-to-r from-[#2D5A27] to-[#3d7a36] rounded-full shadow-lg shadow-[#2D5A27]/30">
                {t('hero.badge') || 'MEKONG DELTA INNOVATION HUB'}
              </span>
            </div>
            
            {/* Main Title - Large Bold with Visual Enhancement */}
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
            
            {/* Subtitle - Descriptive with proper styling */}
            <p className="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed font-medium" style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.4), 0 0 15px rgba(0,0,0,0.25), 0 1px 0 rgba(255,255,255,0.08)'
            }}>
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => scrollTo('gap-analysis')} className="w-full sm:w-auto bg-[#2D5A27] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#23471E] transition-all shadow-lg shadow-[#2D5A27]/20 flex items-center justify-center gap-2">
                {t('hero.ctaPrimary')} <ChevronRight size={20} />
              </button>
              <button onClick={() => scrollTo('regulations')} className="w-full sm:w-auto bg-white text-[#1A1A1A] border border-[#E5E5E5] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#F5F5F5] transition-all">
                {t('hero.ctaSecondary')}
              </button>
            </div>
          </motion.div>

          {/* Urgency Cards */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('urgencyCards.saltwaterIntrusion'),
                desc: t('urgencyCards.saltwaterIntrusionDesc'),
                imgSrc: '/images/XâmNhậpMặn.png',
                imgAlt: 'Saltwater Intrusion'
              },
              {
                title: t('urgencyCards.landSubsidence'),
                desc: t('urgencyCards.landSubsidenceDesc'),
                imgSrc: '/images/SụtLúnĐất.png',
                imgAlt: 'Land Subsidence'
              },
              {
                title: t('urgencyCards.unusualFlooding'),
                desc: t('urgencyCards.unusualFloodingDesc'),
                imgSrc: '/images/LũLụtBấtThường.png',
                imgAlt: 'Unusual Flooding'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#E5E5E5] text-left hover:shadow-xl transition-all group"
              >
                <figure className="w-full mb-6 cursor-pointer" onClick={() => setSelectedImage({ src: item.imgSrc, alt: item.imgAlt })}>
                  <img
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    className="w-full h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </figure>
                <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.5)' }}>{item.title}</h3>
                <p className="text-[#1a1a1a] leading-relaxed" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.5)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Carbon Ticker Banner */}
      <CarbonTickerBanner />

      {/* Gap Analysis Section */}
      <section id="gap-analysis" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">{t('gapAnalysis.title')}</h2>
            <p className="text-xl text-[#666666] max-w-3xl">
              {t('gapAnalysis.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INNOVATIONS.map((item, i) => {
              const Icon = IconMap[item.icon] || Info;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col bg-[#FDFCFB] p-8 rounded-3xl border border-[#E5E5E5] hover:border-[#2D5A27] transition-all group"
                >
                  {item.imageSrc && (
                    <figure className="w-full mb-6 cursor-pointer" onClick={() => setSelectedImage({ src: item.imageSrc, alt: item.title })}>
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="w-full h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                      />
                    </figure>
                  )}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-[#E2F0D9] rounded-2xl flex items-center justify-center text-[#2D5A27] group-hover:bg-[#2D5A27] group-hover:text-white transition-all">
                      <Icon size={28} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#999999]">
                      {item.origin.split(' - ')[1]}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#2D5A27] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-[#2D5A27] mb-4 opacity-70">
                    {item.originLinks && item.originLinks.length > 0 ? (
                      <span className="flex flex-wrap gap-2">
                        {item.originLinks.map((link, idx) => (
                          <a 
                            key={idx}
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:underline hover:text-[#23471E]"
                          >
                            {link.name}
                            {idx < item.originLinks!.length - 1 && <span className="mx-1">/</span>}
                          </a>
                        ))}
                      </span>
                    ) : item.originLink ? (
                      <a 
                        href={item.originLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-[#23471E]"
                      >
                        {item.origin.split(' - ')[0]}
                      </a>
                    ) : (
                      item.origin.split(' - ')[0]
                    )}
                  </p>
                  <p className="text-[#666666] text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regulations Section */}
      <section id="regulations" className="py-24 bg-[#1A1A1A] text-white overflow-hidden relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center lg:bg-cover md:bg-cover sm:bg-cover z-0"
          style={{
            backgroundImage: "url('/images/CarbonMarket.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for text readability - stronger on mobile for better contrast */}
          <div className="absolute inset-0 bg-black/80 sm:bg-black/75 md:bg-black/70 lg:bg-black/70"></div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2D5A27]/10 -skew-x-12 transform translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#82B366] uppercase bg-[#82B366]/10 rounded-full">
                {t('regulations.title')}
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                {t('regulations.title')}
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                {t('regulations.subtitle')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-10 h-10 bg-[#82B366] rounded-xl flex items-center justify-center shrink-0">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{t('regulations.carbonMarketTitle')}</h4>
                    <p className="text-sm text-gray-400">{t('regulations.carbonMarketDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-10 h-10 bg-[#82B366] rounded-xl flex items-center justify-center shrink-0">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{t('regulations.greenClassificationTitle')}</h4>
                    <p className="text-sm text-gray-400">{t('regulations.greenClassificationDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {INCENTIVES.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all"
                >
                  <h3 className="text-lg font-bold mb-4 text-[#82B366]">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">{t('roadmap.title')}</h2>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              {t('roadmap.subtitle')}
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-[#E5E5E5] -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
              {ROADMAP.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-[#FDFCFB] p-10 rounded-[40px] border border-[#E5E5E5] relative"
                >
                  <div className="absolute -top-6 left-10 bg-[#2D5A27] text-white px-6 py-2 rounded-full text-sm font-bold">
                    {step.duration}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 mt-4">{step.phase}</h3>
                  <ul className="space-y-4">
                    {step.focus.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#666666]">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2D5A27] shrink-0" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section id="funding" className="py-24 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">{t('funding.title')}</h2>
              <p className="text-xl text-[#666666]">
                {t('funding.subtitle')}
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#2D5A27] font-bold">
              <span>{t('funding.allSources')}</span>
              <ArrowRight size={20} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FUNDING_SOURCES.map((source, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-[#2D5A27]/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#E2F0D9] rounded-2xl flex items-center justify-center text-[#2D5A27]">
                    <DollarSign size={24} />
                  </div>
                  <span className="text-2xl font-black text-[#2D5A27]">{source.amount}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight">{source.name}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{source.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E5E5E5] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#2D5A27] rounded-lg flex items-center justify-center text-white">
                  <Leaf size={20} />
                </div>
                <span className="font-bold text-xl tracking-tight text-[#2D5A27]">NOTHING GOES TO WASTE</span>
              </div>
              <p className="text-[#666666] max-w-sm mb-8 leading-relaxed">
                {t('footer.about')}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">{t('footer.links')}</h4>
              <ul className="space-y-4 text-sm text-[#666666]">
                <li><button onClick={() => scrollTo('gap-analysis')} className="hover:text-[#2D5A27]">{t('navigation.gapAnalysis')}</button></li>
                <li><button onClick={() => scrollTo('regulations')} className="hover:text-[#2D5A27]">{t('navigation.regulations')}</button></li>
                <li><button onClick={() => scrollTo('roadmap')} className="hover:text-[#2D5A27]">{t('navigation.roadmap')}</button></li>
                <li><button onClick={() => scrollTo('funding')} className="hover:text-[#2D5A27]">{t('navigation.funding')}</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">{t('footer.contact')}</h4>
              <ul className="space-y-4 text-sm text-[#666666]">
                <li>{t('footer.email')}</li>
                <li>{t('footer.address')}</li>
                <li>{t('footer.phone')}</li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-[#E5E5E5] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#999999] font-medium uppercase tracking-widest">
            <p>{t('footer.copyright')}</p>
            <div className="flex gap-8">
              <button className="hover:text-[#2D5A27]">{t('footer.privacyPolicy')}</button>
              <button className="hover:text-[#2D5A27]">{t('footer.terms')}</button>
            </div>
          </div>
        </div>
      </footer>
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
      />
    </div>
  );
}
