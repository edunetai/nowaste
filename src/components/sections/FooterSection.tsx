import { Leaf } from 'lucide-react';

interface FooterProps {
  about: string;
  linksLabel: string;
  contactLabel: string;
  email: string;
  address: string;
  phone: string;
  copyright: string;
  privacyPolicy: string;
  terms: string;
  navItems: { key: string; label: string }[];
  onNavigate: (id: string) => void;
}

export default function Footer({
  about,
  linksLabel,
  contactLabel,
  email,
  address,
  phone,
  copyright,
  privacyPolicy,
  terms,
  navItems,
  onNavigate
}: FooterProps) {
  return (
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
              {about}
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">{linksLabel}</h4>
            <ul className="space-y-4 text-sm text-[#666666]">
              {navItems.map((item) => (
                <li key={item.key}><button onClick={() => onNavigate(item.key)} className="hover:text-[#2D5A27]">{item.label}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">{contactLabel}</h4>
            <ul className="space-y-4 text-sm text-[#666666]">
              <li>{email}</li>
              <li>{address}</li>
              <li>{phone}</li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-[#E5E5E5] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#999999] font-medium uppercase tracking-widest">
          <p>{copyright}</p>
          <div className="flex gap-8">
            <button className="hover:text-[#2D5A27]">{privacyPolicy}</button>
            <button className="hover:text-[#2D5A27]">{terms}</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
