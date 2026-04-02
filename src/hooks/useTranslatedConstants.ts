import { useLanguage } from '../i18n/LanguageContext';
import { Innovation, Incentive, FundingSource, RoadmapStep } from '../types';

export const useTranslatedConstants = () => {
  const { t } = useLanguage();

  const INNOVATIONS: Innovation[] = [
    {
      id: 1,
      title: t('gapAnalysis.innovations.1.title'),
      origin: t('gapAnalysis.innovations.1.origin'),
      originLink: 'https://strawinnovations.com',
      description: t('gapAnalysis.innovations.1.description'),
      icon: "Tractor",
      imageSrc: '/images/top1.png'
    },
    {
      id: 2,
      title: t('gapAnalysis.innovations.2.title'),
      origin: t('gapAnalysis.innovations.2.origin'),
      originLink: 'https://www.salicrop.com',
      description: t('gapAnalysis.innovations.2.description'),
      icon: "Sprout",
      imageSrc: '/images/top2.png'
    },
    {
      id: 3,
      title: t('gapAnalysis.innovations.3.title'),
      origin: t('gapAnalysis.innovations.3.origin'),
      originLinks: [
        { name: 'Mitti Labs', url: 'https://www.mittilabs.earth' },
        { name: 'AgriCapture', url: 'https://www.chrysalabs.com' }
      ],
      description: t('gapAnalysis.innovations.3.description'),
      icon: "Cloud",
      imageSrc: '/images/top3.png'
    },
    {
      id: 4,
      title: t('gapAnalysis.innovations.4.title'),
      origin: t('gapAnalysis.innovations.4.origin'),
      originLink: 'https://oorjasolutions.org/',
      description: t('gapAnalysis.innovations.4.description'),
      icon: "Sun",
      imageSrc: '/images/top4.png'
    },
    {
      id: 5,
      title: t('gapAnalysis.innovations.5.title'),
      origin: t('gapAnalysis.innovations.5.origin'),
      originLink: 'https://oceanfdn.org/',
      description: t('gapAnalysis.innovations.5.description'),
      icon: "Waves",
      imageSrc: '/images/top5.png'
    },
    {
      id: 6,
      title: t('gapAnalysis.innovations.6.title'),
      origin: t('gapAnalysis.innovations.6.origin'),
      originLink: 'https://phool.co/',
      description: t('gapAnalysis.innovations.6.description'),
      icon: "Flower",
      imageSrc: '/images/top6.png'
    },
    {
      id: 7,
      title: t('gapAnalysis.innovations.7.title'),
      origin: t('gapAnalysis.innovations.7.origin'),
      originLink: 'https://www.atarraya.ai',
      description: t('gapAnalysis.innovations.7.description'),
      icon: "Box",
      imageSrc: '/images/top7.png'
    },
    {
      id: 8,
      title: t('gapAnalysis.innovations.8.title'),
      origin: t('gapAnalysis.innovations.8.origin'),
      originLink: 'https://www.winnowsolutions.com',
      description: t('gapAnalysis.innovations.8.description'),
      icon: "Scale",
      imageSrc: '/images/top8.png'
    },
    {
      id: 9,
      title: t('gapAnalysis.innovations.9.title'),
      origin: t('gapAnalysis.innovations.9.origin'),
      originLink: 'https://dyecoo.com',
      description: t('gapAnalysis.innovations.9.description'),
      icon: "Droplets",
      imageSrc: '/images/top9.png'
    },
    {
      id: 10,
      title: t('gapAnalysis.innovations.10.title'),
      origin: t('gapAnalysis.innovations.10.origin'),
      originLinks: [
        { name: 'Loopworm', url: 'https://loopworm.in' },
        { name: 'Nutrition Technologies', url: 'https://www.sentaragroup.com' }
      ],
      description: t('gapAnalysis.innovations.10.description'),
      icon: "Bug",
      imageSrc: '/images/top10.png'
    }
  ];

  const INCENTIVES: Incentive[] = [
    {
      title: t('regulations.incentivesList.cit'),
      description: t('regulations.incentivesList.citDesc')
    },
    {
      title: t('regulations.incentivesList.importTax'),
      description: t('regulations.incentivesList.importTaxDesc')
    },
    {
      title: t('regulations.incentivesList.landIncentives'),
      description: t('regulations.incentivesList.landIncentivesDesc')
    },
    {
      title: t('regulations.incentivesList.interestSupport'),
      description: t('regulations.incentivesList.interestSupportDesc')
    }
  ];

  const FUNDING_SOURCES: FundingSource[] = [
    {
      name: t('funding.usaid'),
      amount: t('funding.usaidAmount'),
      description: t('funding.usaidDesc')
    },
    {
      name: t('funding.wbGcf'),
      amount: t('funding.wbGcfAmount'),
      description: t('funding.wbGcfDesc')
    },
    {
      name: t('funding.mkcf'),
      amount: t('funding.mkcfAmount'),
      description: t('funding.mkcfDesc')
    }
  ];

  const ROADMAP: RoadmapStep[] = [
    {
      phase: t('roadmap.stage1'),
      duration: t('roadmap.duration1'),
      focus: [
        t('roadmap.focus1.0'),
        t('roadmap.focus1.1'),
        t('roadmap.focus1.2')
      ]
    },
    {
      phase: t('roadmap.stage2'),
      duration: t('roadmap.duration2'),
      focus: [
        t('roadmap.focus2.0'),
        t('roadmap.focus2.1')
      ]
    },
    {
      phase: t('roadmap.stage3'),
      duration: t('roadmap.duration3'),
      focus: [
        t('roadmap.focus3.0'),
        t('roadmap.focus3.1'),
        t('roadmap.focus3.2')
      ]
    }
  ];

  return {
    INNOVATIONS,
    INCENTIVES,
    FUNDING_SOURCES,
    ROADMAP
  };
};
