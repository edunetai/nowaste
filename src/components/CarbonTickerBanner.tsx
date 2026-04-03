import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { TrendingUp, TrendingDown, Clock, RefreshCw } from 'lucide-react';

export interface CarbonTickerData {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  currency: string;
  change: number;
  changePercent: number;
  exchange: string;
}

export interface CarbonMarketData {
  lastUpdate: Date;
  nextUpdate: Date;
  nextSession: Date;
  tickers: CarbonTickerData[];
}

// Mock data - can be replaced with real API endpoint
const mockCarbonData: CarbonMarketData = {
  lastUpdate: new Date(),
  nextUpdate: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes
  nextSession: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
  tickers: [
    { id: '1', name: 'VER Vietnam', nameEn: 'VER Vietnam', price: 12.50, currency: 'USD', change: 0.25, changePercent: 2.04, exchange: 'VCX' },
    { id: '2', name: 'CME Global', nameEn: 'CME Global', price: 28.75, currency: 'USD', change: -0.50, changePercent: -1.71, exchange: 'CME' },
    { id: '3', name: 'ICE Europe', nameEn: 'ICE Europe', price: 85.20, currency: 'EUR', change: 1.80, changePercent: 2.16, exchange: 'ICE' },
    { id: '4', name: 'KEX China', nameEn: 'KEX China', price: 8.35, currency: 'USD', change: 0.15, changePercent: 1.83, exchange: 'KEX' },
    { id: '5', name: 'SGX Asia', nameEn: 'SGX Asia', price: 18.90, currency: 'USD', change: -0.30, changePercent: -1.56, exchange: 'SGX' },
    { id: '6', name: 'EEX EU', nameEn: 'EEX EU', price: 78.50, currency: 'EUR', change: 2.10, changePercent: 2.75, exchange: 'EEX' },
    { id: '7', name: 'RGGI US', nameEn: 'RGGI US', price: 13.25, currency: 'USD', change: 0.45, changePercent: 3.51, exchange: 'RGGI' },
    { id: '8', name: 'GX China', nameEn: 'GX China', price: 6.80, currency: 'CNY', change: -0.20, changePercent: -2.86, exchange: 'GX' },
  ]
};

interface CarbonTickerBannerProps {
  data?: CarbonMarketData;
}

export default function CarbonTickerBanner({ data = mockCarbonData }: CarbonTickerBannerProps) {
  const { language } = useLanguage();
  const isVietnamese = language === 'vi';
  const [isPaused, setIsPaused] = useState(false);
  const [countdown, setCountdown] = useState({ minutes: 0, seconds: 0 });
  const [isSessionCountdown, setIsSessionCountdown] = useState(false);

  // Format price with currency symbol
  const formatPrice = useCallback((price: number, currency: string): string => {
    const symbols: Record<string, string> = {
      USD: '$',
      EUR: '€',
      CNY: '¥',
      VND: '₫'
    };
    return `${symbols[currency] || currency}${price.toFixed(2)}`;
  }, []);

  // Countdown timer to next update/session
  useEffect(() => {
    const targetTime = isSessionCountdown ? data.nextSession : data.nextUpdate;
    
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetTime.getTime() - now.getTime();
      
      if (diff <= 0) {
        if (!isSessionCountdown) {
          setIsSessionCountdown(true);
        }
        return;
      }
      
      const minutes = Math.floor(diff / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setCountdown({ minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [data.nextUpdate, data.nextSession, isSessionCountdown]);

  // Render single ticker item
  const renderTicker = useCallback((ticker: CarbonTickerData) => {
    const isPositive = ticker.change >= 0;
    
    return (
      <div
        key={ticker.id}
        className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-lg border border-white/10 min-w-[200px]"
        role="listitem"
        aria-label={`${ticker.name} price: ${formatPrice(ticker.price, ticker.currency)}, change: ${ticker.changePercent}%`}
      >
        <div className="flex flex-col">
          <span className="text-xs text-white/60 font-medium">
            {isVietnamese ? ticker.name : ticker.nameEn}
          </span>
          <span className="text-sm text-white/80 font-semibold">
            {ticker.exchange}
          </span>
        </div>
        
        <div className="flex flex-col items-end ml-auto">
          <span className="text-base font-bold text-white">
            {formatPrice(ticker.price, ticker.currency)}
          </span>
          <div className={`flex items-center gap-1 text-xs font-medium ${
            isPositive ? 'text-green-400' : 'text-red-400'
          }`}>
            {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            <span>
              {isPositive ? '+' : ''}{ticker.changePercent.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>
    );
  }, [isVietnamese, formatPrice]);

  // Calculate animation duration based on content width
  const animationDuration = useCallback(() => {
    const itemWidth = 232; // Approximate width of each ticker item + gap
    const totalWidth = data.tickers.length * itemWidth;
    return totalWidth / 30; // Speed: 30px per second
  }, [data.tickers]);

  return (
    <section
      className="relative w-full bg-gradient-to-t from-black/80 to-black/60 backdrop-blur-md border-t border-white/10 overflow-hidden"
      role="region"
      aria-label={isVietnamese ? 'Bảng điện tử thị trường carbon' : 'Carbon Market Digital Ticker'}
    >
      {/* Label Section */}
      <div className="absolute left-0 top-0 bottom-0 z-20 bg-[#2D5A27]/90 px-4 py-4 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-1">
          <RefreshCw size={16} className="text-white/80" />
          <span className="text-xs font-bold uppercase tracking-widest text-white/70">
            {isVietnamese ? 'Bảng điện tử' : 'Digital Board'}
          </span>
        </div>
        <span className="text-sm font-bold text-white">
          {isVietnamese ? 'Thị trường Carbon' : 'Carbon Market'}
        </span>
      </div>

      {/* Countdown Timer */}
      <div className="absolute right-16 top-0 bottom-0 z-20 bg-black/40 px-4 py-4 flex flex-col justify-center items-center">
        <div className="flex items-center gap-1.5 mb-1">
          <Clock size={14} className="text-white/60" />
          <span className="text-[10px] font-medium uppercase tracking-wider text-white/60">
            {isSessionCountdown 
              ? (isVietnamese ? 'Phiên tiếp theo' : 'Next Session')
              : (isVietnamese ? 'Cập nhật sau' : 'Update in')
            }
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-lg font-bold text-white tabular-nums">
            {String(countdown.minutes).padStart(2, '0')}
          </span>
          <span className="text-lg font-bold text-white">:</span>
          <span className="text-lg font-bold text-white tabular-nums">
            {String(countdown.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Scroll Button */}
      <button
        className="absolute right-0 top-0 bottom-0 z-20 bg-white/10 hover:bg-white/20 transition-colors px-3 flex items-center justify-center"
        onClick={() => setIsPaused(!isPaused)}
        aria-label={isPaused 
          ? (isVietnamese ? 'Tiếp tục cuộn' : 'Resume scrolling')
          : (isVietnamese ? 'Tạm dừng cuộn' : 'Pause scrolling')
        }
        aria-pressed={isPaused}
      >
        {isPaused ? (
          <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
        ) : (
          <div className="flex items-center gap-0.5">
            <div className="w-0.5 h-3 bg-white" />
            <div className="w-0.5 h-3 bg-white" />
          </div>
        )}
      </button>

      {/* Scrolling Ticker Track */}
      <div
        className="relative overflow-hidden"
        style={{
          marginLeft: '180px',
          marginRight: '140px',
          height: '80px'
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        role="list"
        aria-live="off"
      >
        {!isPaused ? (
          <motion.div
            className="flex gap-4 absolute whitespace-nowrap"
            animate={{ x: [0, -800] }}
            transition={{
              duration: animationDuration(),
              ease: 'linear',
              repeat: Infinity
            }}
            style={{ display: 'flex', gap: '1rem' }}
          >
            {/* Duplicate tickers for seamless loop */}
            {[...data.tickers, ...data.tickers].map((ticker, idx) => (
              <div key={`${ticker.id}-${idx}`}>
                {renderTicker(ticker)}
              </div>
            ))}
          </motion.div>
        ) : (
          <div className="flex gap-4 py-4 px-2">
            {data.tickers.map((ticker) => renderTicker(ticker))}
          </div>
        )}
        
        {/* Paused state - show static tickers */}
        {isPaused && (
          <div className="flex gap-4 overflow-x-auto py-4 px-2">
            {data.tickers.map((ticker) => renderTicker(ticker))}
          </div>
        )}
      </div>

      {/* Mobile View - Simplified Stack */}
      <div className="md:hidden px-4 py-3" style={{ marginLeft: '0', marginRight: '0', height: 'auto' }}>
        <div className="flex flex-wrap justify-center gap-2">
          {data.tickers.slice(0, 4).map((ticker) => renderTicker(ticker))}
        </div>
      </div>
    </section>
  );
}