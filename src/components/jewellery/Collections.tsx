import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import necklace from "@/assets/collection-necklace.jpg";
import earrings from "@/assets/collection-earrings.jpg";
import ring from "@/assets/collection-ring.jpg";
import bangles from "@/assets/collection-bangles.jpg";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { num: "01", name: "Bridal Necklaces", tagline: "Emerald & diamond heritage", img: necklace },
  { num: "02", name: "Jhumka Earrings", tagline: "Classic Kundan craftsmanship", img: earrings },
  { num: "03", name: "Solitaire Rings", tagline: "Diamonds set in gold filigree", img: ring },
  { num: "04", name: "Gold Bangles", tagline: "Hand-engraved 22K pieces", img: bangles },
];

const Collections = () => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".col-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: ".col-title", start: "top 85%" },
      });
      gsap.utils.toArray<HTMLElement>(".col-card").forEach((card, i) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%" },
        });
        gsap.from(card.querySelector(".col-img"), {
          scale: 1.3,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 90%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="collections" className="relative py-32 overflow-hidden">
      <div className="container">
        <div className="col-title text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Our Treasures</span>
            <span className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-serif-elegant text-5xl md:text-7xl text-ivory">
            The <span className="italic text-gold">Collection</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-ivory/60 font-serif-elegant text-lg italic">
            Each ornament tells a story of devotion, tradition and craftsmanship passed through generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {items.map((item) => (
            <article
              key={item.num}
              className="col-card group relative overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="col-img w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/30 to-transparent" />
                <div className="absolute inset-4 border border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="font-display text-gold text-sm tracking-[0.4em] mb-2">{item.num}</div>
                    <h3 className="font-serif-elegant text-3xl md:text-4xl text-ivory mb-1">{item.name}</h3>
                    <p className="text-ivory/70 italic">{item.tagline}</p>
                  </div>
                  <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-emerald-deep">
                      →
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
