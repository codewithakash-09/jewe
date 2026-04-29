import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const festivals = [
  {
    title: "Akshaya Tritiya",
    sub: "Multiply your wealth",
    desc: "The most auspicious day to invest in gold. Special hand-picked collections await.",
    accent: "from-emerald to-emerald-deep",
  },
  {
    title: "Ram Navami",
    sub: "Blessings of Shri Ram",
    desc: "Devotional pieces inspired by Ayodhya — rings, lockets and more.",
    accent: "from-maroon to-emerald-deep",
  },
  {
    title: "Hanuman Janmotsav",
    sub: "Strength in every piece",
    desc: "Gada pendants, Bajrang pieces and protective talismans in pure gold.",
    accent: "from-maroon to-emerald-deep",
  },
  {
    title: "Navratri Special",
    sub: "Nine nights, nine designs",
    desc: "A new collection unveiled each night of Maa Durga's celebration.",
    accent: "from-maroon to-emerald-deep",
  },
];

const Festive = () => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fest-head", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: ".fest-head", start: "top 85%" },
      });
      gsap.utils.toArray<HTMLElement>(".fest-card").forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          rotateY: 15,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="festive" className="relative py-32 bg-gradient-to-b from-transparent via-emerald-deep/60 to-transparent">
      <div className="container">
        <div className="fest-head text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Shubh Avsar</span>
            <span className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-serif-elegant text-5xl md:text-7xl text-ivory">
            Celebrate every <span className="italic text-gold">festival</span> in gold
          </h2>
          <p className="mt-6 text-ivory/60 font-serif-elegant text-lg italic">
            From Akshaya Tritiya to Diwali — exclusive festive collections crafted for India's most sacred days.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {festivals.map((f) => (
            <div
              key={f.title}
              className={`fest-card group relative overflow-hidden bg-gradient-to-br ${f.accent} p-8 min-h-[340px] flex flex-col justify-between border border-gold/20 hover:border-gold/60 transition-all duration-500 cursor-pointer`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--gold)/0.2),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-10 -right-10 w-40 h-40 border border-gold/30 rounded-full opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />

              <div className="relative">
                <div className="font-display text-5xl text-gold/80 mb-4">✦</div>
                <h3 className="font-serif-elegant text-3xl text-ivory leading-tight">{f.title}</h3>
                <p className="text-gold text-sm tracking-widest uppercase mt-2">{f.sub}</p>
              </div>

              <p className="relative text-ivory/70 text-sm leading-relaxed mt-6">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Festive;
