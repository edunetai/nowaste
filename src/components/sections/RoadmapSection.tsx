import { motion } from 'motion/react';
import { RoadmapStep } from '../../types';

interface RoadmapSectionProps {
  title: string;
  subtitle: string;
  roadmap: RoadmapStep[];
}

export default function RoadmapSection({ title, subtitle, roadmap }: RoadmapSectionProps) {
  return (
    <section id="roadmap" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">{title}</h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-[#E5E5E5] -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {roadmap.map((step, i) => (
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
  );
}
