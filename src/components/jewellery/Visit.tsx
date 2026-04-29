import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Visit = () => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".visit-anim", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="visit" className="relative py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="visit-anim flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.4em] uppercase">Visit Us</span>
            </div>
            <h2 className="visit-anim font-serif-elegant text-5xl md:text-7xl text-ivory leading-tight mb-8">
              Step inside our <span className="italic text-gold">showroom</span>.
            </h2>
            <p className="visit-anim text-ivory/70 font-serif-elegant text-lg italic mb-12 max-w-md">
              Experience every piece in person. Our master craftsmen are here to guide you through your perfect ornament.
            </p>

            <div className="visit-anim space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold text-xl shrink-0">
                  📍
                </div>
                <div>
                  <div className="text-gold text-xs tracking-[0.3em] uppercase mb-2">Address</div>
                  <p className="text-ivory text-lg leading-relaxed">
                    C-31, GDA Market, Sabzi Mandi Road,<br />
                    Sector-11 Pratap Vihar, Vijay Nagar,<br />
                    Ghaziabad
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold text-xl shrink-0">
                  ☎
                </div>
                <div>
                  <div className="text-gold text-xs tracking-[0.3em] uppercase mb-2">Tarun Verma · Proprietor</div>
                  <a href="tel:9717724714" className="block text-ivory text-lg hover:text-gold transition-colors">
                    +91 97177 24714
                  </a>
                  <a href="tel:8178289027" className="block text-ivory text-lg hover:text-gold transition-colors">
                    +91 81782 89027
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold text-xl shrink-0">
                  ✦
                </div>
                <div>
                  <div className="text-gold text-xs tracking-[0.3em] uppercase mb-2">Open</div>
                  <p className="text-ivory text-lg">Mon – Sun · 10:30 AM – 8:30 PM</p>
                </div>
              </div>
            </div>

            <div className="visit-anim mt-12 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919717724714"
                target="_blank"
                rel="noreferrer"
                className="bg-gold text-emerald-deep px-8 py-4 text-sm tracking-[0.25em] uppercase font-medium hover:opacity-90 transition-opacity"
              >
                WhatsApp Us
              </a>
              <a
                href="https://maps.google.com/?q=GDA+Market+Sabzi+Mandi+Road+Pratap+Vihar+Ghaziabad"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 text-sm tracking-[0.25em] uppercase border border-gold/60 text-gold hover:bg-gold/10 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="visit-anim relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-emerald to-emerald-deep border border-gold/30 p-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--gold)/0.15),transparent_60%)]" />
              <div className="relative h-full flex flex-col justify-between p-10">
                <div>
                  <div className="font-display text-gold text-xs tracking-[0.4em]">SHREE RAM JEWELLERS</div>
                  <div className="font-serif-elegant text-ivory text-3xl italic mt-2">Ghaziabad's House of Gold</div>
                </div>

                <div className="text-center">
                  <div className="font-display text-gold text-8xl shimmer">श्री</div>
                  <div className="mt-4 ornament-divider w-32 mx-auto" />
                  <div className="mt-4 font-serif-elegant italic text-ivory/80">Deals in Gold &amp; Silver Ornaments</div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="border border-gold/30 py-4">
                    <div className="font-display text-2xl text-gold">BIS</div>
                    <div className="text-[10px] uppercase tracking-widest text-ivory/60">Hallmark</div>
                  </div>
                  <div className="border border-gold/30 py-4">
                    <div className="font-display text-2xl text-gold">100%</div>
                    <div className="text-[10px] uppercase tracking-widest text-ivory/60">Pure</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/40 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
