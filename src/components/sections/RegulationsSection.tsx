import { Globe, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { Incentive } from '../../types';

interface RegulationsSectionProps {
  title: string;
  subtitle: string;
  carbonMarketTitle: string;
  carbonMarketDesc: string;
  greenClassificationTitle: string;
  greenClassificationDesc: string;
  incentives: Incentive[];
}

export default function RegulationsSection({
  title,
  subtitle,
  carbonMarketTitle,
  carbonMarketDesc,
  greenClassificationTitle,
  greenClassificationDesc,
  incentives
}: RegulationsSectionProps) {
  return (
    <section id="regulations" className="py-24 bg-[#1A1A1A] text-white overflow-hidden relative">
      <div
        className="absolute inset-0 bg-cover bg-center lg:bg-cover md:bg-cover sm:bg-cover z-0"
        style={{
          backgroundImage: "url('/images/CarbonMarket.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/80 sm:bg-black/75 md:bg-black/70 lg:bg-black/70"></div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2D5A27]/10 -skew-x-12 transform translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#82B366] uppercase bg-[#82B366]/10 rounded-full">
              {title}
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              {title}
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              {subtitle}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-10 h-10 bg-[#82B366] rounded-xl flex items-center justify-center shrink-0">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{carbonMarketTitle}</h4>
                  <p className="text-sm text-gray-400">{carbonMarketDesc}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-10 h-10 bg-[#82B366] rounded-xl flex items-center justify-center shrink-0">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{greenClassificationTitle}</h4>
                  <p className="text-sm text-gray-400">{greenClassificationDesc}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {incentives.map((item, i) => (
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
  );
}
