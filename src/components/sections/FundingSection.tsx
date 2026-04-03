import { DollarSign, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { FundingSource } from '../../types';

interface FundingSectionProps {
  title: string;
  subtitle: string;
  allSourcesText: string;
  fundingSources: FundingSource[];
}

export default function FundingSection({ title, subtitle, allSourcesText, fundingSources }: FundingSectionProps) {
  return (
    <section id="funding" className="py-24 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">{title}</h2>
            <p className="text-xl text-[#666666]">
              {subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#2D5A27] font-bold">
            <span>{allSourcesText}</span>
            <ArrowRight size={20} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fundingSources.map((source, i) => (
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
  );
}
