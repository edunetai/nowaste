import { motion } from 'motion/react';

interface UrgencyCard {
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt: string;
}

interface UrgencyCardsProps {
  cards: UrgencyCard[];
  onImageClick: (src: string, alt: string) => void;
}

export default function UrgencyCards({ cards, onImageClick }: UrgencyCardsProps) {
  return (
    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#E5E5E5] text-left hover:shadow-xl transition-all group"
        >
          <figure className="w-full mb-6 cursor-pointer" onClick={() => onImageClick(item.imgSrc, item.imgAlt)}>
            <img
              src={item.imgSrc}
              alt={item.imgAlt}
              className="w-full h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              loading="lazy"
            />
          </figure>
          <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.5)' }}>{item.title}</h3>
          <p className="text-[#1a1a1a] leading-relaxed" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.5)' }}>{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
