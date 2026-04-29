const items = [
  "BIS Hallmarked",
  "22K & 24K Pure Gold",
  "925 Sterling Silver",
  "Bridal Sets",
  "Daily Wear",
  "Custom Designs",
  "Lifetime Buyback",
];

const MarqueeStrip = () => {
  return (
    <div className="relative border-y border-gold/30 bg-emerald-deep/60 overflow-hidden">
      <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap py-5">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-6 mx-6 font-serif-elegant text-2xl italic text-gold">
            {item}
            <span className="text-ivory/40">✦</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};

export default MarqueeStrip;
