import { Tractor, Sprout, Cloud, Sun, Waves, Flower, Box, Scale, Droplets, Bug, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { Innovation } from '../../types';

interface IconMapType {
  [key: string]: React.ElementType;
}

const IconMap: IconMapType = {
  Tractor, Sprout, Cloud, Sun, Waves, Flower, Box, Scale, Droplets, Bug
};

interface GapAnalysisSectionProps {
  title: string;
  subtitle: string;
  innovations: Innovation[];
  onImageClick: (src: string, alt: string) => void;
}

export default function GapAnalysisSection({ title, subtitle, innovations, onImageClick }: GapAnalysisSectionProps) {
  return (
    <section id="gap-analysis" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">{title}</h2>
          <p className="text-xl text-[#666666] max-w-3xl">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((item, i) => {
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
                  <figure className="w-full mb-6 cursor-pointer" onClick={() => onImageClick(item.imageSrc ?? '', item.title)}>
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      className="w-full h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                      loading="lazy"
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
  );
}
