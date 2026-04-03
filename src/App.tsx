import { useState, useEffect, Suspense, lazy } from 'react';
import { useLanguage } from './i18n/LanguageContext';
import ImageModal from './components/ImageModal';
import CarbonTickerBanner from './components/CarbonTickerBanner';
import { useTranslatedConstants } from './hooks/useTranslatedConstants';
import Navigation from './components/Navigation';
import HeroSection from './components/sections/HeroSection';
import UrgencyCards from './components/sections/UrgencyCards';

const GapAnalysisSection = lazy(() => import('./components/sections/GapAnalysisSection'));
const RegulationsSection = lazy(() => import('./components/sections/RegulationsSection'));
const RoadmapSection = lazy(() => import('./components/sections/RoadmapSection'));
const FundingSection = lazy(() => import('./components/sections/FundingSection'));
const FooterSection = lazy(() => import('./components/sections/FooterSection'));

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-8 h-8 border-4 border-[#2D5A27] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
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
  };

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const urgencyCards = [
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
  ];

  const navItems = [
    { key: 'gap-analysis', label: t('navigation.gapAnalysis') },
    { key: 'regulations', label: t('navigation.regulations') },
    { key: 'roadmap', label: t('navigation.roadmap') },
    { key: 'funding', label: t('navigation.funding') }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[#E2F0D9] selection:text-[#2D5A27]">
      <Navigation activeSection={activeSection} onNavigate={scrollTo} />
      
      <HeroSection onNavigate={scrollTo} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <UrgencyCards cards={urgencyCards} onImageClick={handleImageClick} />
      </div>

      <CarbonTickerBanner />

      <Suspense fallback={<LoadingSpinner />}>
        <GapAnalysisSection
          title={t('gapAnalysis.title')}
          subtitle={t('gapAnalysis.subtitle')}
          innovations={INNOVATIONS}
          onImageClick={handleImageClick}
        />

        <RegulationsSection
          title={t('regulations.title')}
          subtitle={t('regulations.subtitle')}
          carbonMarketTitle={t('regulations.carbonMarketTitle')}
          carbonMarketDesc={t('regulations.carbonMarketDesc')}
          greenClassificationTitle={t('regulations.greenClassificationTitle')}
          greenClassificationDesc={t('regulations.greenClassificationDesc')}
          incentives={INCENTIVES}
        />

        <RoadmapSection
          title={t('roadmap.title')}
          subtitle={t('roadmap.subtitle')}
          roadmap={ROADMAP}
        />

        <FundingSection
          title={t('funding.title')}
          subtitle={t('funding.subtitle')}
          allSourcesText={t('funding.allSources')}
          fundingSources={FUNDING_SOURCES}
        />

        <FooterSection
          about={t('footer.about')}
          linksLabel={t('footer.links')}
          contactLabel={t('footer.contact')}
          email={t('footer.email')}
          address={t('footer.address')}
          phone={t('footer.phone')}
          copyright={t('footer.copyright')}
          privacyPolicy={t('footer.privacyPolicy')}
          terms={t('footer.terms')}
          navItems={navItems}
          onNavigate={scrollTo}
        />
      </Suspense>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
      />
    </div>
  );
}
