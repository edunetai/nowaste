import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe size={16} className="text-[#666666]" />
      <div className="flex items-center bg-[#F5F5F5] rounded-full p-1">
        <button
          onClick={() => setLanguage('vi')}
          className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
            language === 'vi'
              ? 'bg-[#2D5A27] text-white'
              : 'text-[#666666] hover:text-[#2D5A27]'
          }`}
        >
          VI
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
            language === 'en'
              ? 'bg-[#2D5A27] text-white'
              : 'text-[#666666] hover:text-[#2D5A27]'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
