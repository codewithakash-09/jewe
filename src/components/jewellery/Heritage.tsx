import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Heritage = () => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = (sel: string) => {
        const el = root.current!.querySelector(sel) as HTMLElement;
        if (!el) return;
        const text = el.textContent || "";
        el.innerHTML = text
          .split(" ")
          .map((w) => `<span class="inline-block overflow-hidden"><span class="reveal-word inline-block">${w}&nbsp;</span></span>`)
          .join("");
      };
      split(".heritage-text");

      gsap.from(".heritage-text .reveal-word", {
        y: "100%",
        opacity: 0,
        duration: 0.8,
        stagger: 0.04,
        ease: "power3.out",
        scrollTrigger: { trigger: ".heritage-text", start: "top 80%" },
      });

      gsap.from(".heritage-stat", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: { trigger: ".heritage-stats", start: "top 85%" },
      });

      gsap.utils.toArray<HTMLElement>(".counter").forEach((el) => {
        const target = +el.dataset.target!;
        gsap.from(el, {
          textContent: 0,
          duration: 2,
          ease: "power1.out",
          snap: { textContent: 1 },
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: function () {
            el.textContent = Math.floor(+el.textContent!).toString();
          },
        });
        el.textContent = target.toString();
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="heritage" className="relative py-32">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gold/30 via-gold/10 to-transparent p-1">
                <div className="w-full h-full bg-emerald flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--gold)/0.15),transparent_70%)]" />
                  <div className="text-center relative z-10 px-8">
                    <div className="font-display text-gold text-7xl md:text-9xl shimmer">
                      ॐ
                    </div>
                    <div className="mt-4 font-serif-elegant text-2xl text-ivory italic">
                      श्री राम ज्वैलर्स
                    </div>
                    <div className="mt-2 text-gold text-xs tracking-[0.4em] uppercase">A Family Legacy</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/40" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-gold/40" />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.4em] uppercase">Our Heritage</span>
            </div>
            <h2 className="font-serif-elegant text-5xl md:text-6xl text-ivory mb-8 leading-tight">
              Crafted with <span className="italic text-gold">devotion,</span> worn with <span className="italic text-gold">pride.</span>
            </h2>
            <p className="heritage-text text-ivory/75 text-lg leading-relaxed font-serif-elegant">
              Founded by Shri Tarun Verma, Shree Ram Jewellers has been the beating heart of Ghaziabad's jewellery tradition. From the first wedding necklace to the smallest blessing for a newborn, our craftsmen pour decades of skill into every piece — guided always by faith, purity and your trust.
            </p>

            <div className="heritage-stats mt-12 grid grid-cols-3 gap-6">
              <div className="heritage-stat border-l-2 border-gold pl-4">
                <div className="font-display text-4xl text-gold">
                  <span className="counter" data-target="25">0</span>+
                </div>
                <div className="text-xs uppercase tracking-widest text-ivory/60 mt-2">Years of Trust</div>
              </div>
              <div className="heritage-stat border-l-2 border-gold pl-4">
                <div className="font-display text-4xl text-gold">
                  <span className="counter" data-target="10000">0</span>+
                </div>
                <div className="text-xs uppercase tracking-widest text-ivory/60 mt-2">Happy Families</div>
              </div>
              <div className="heritage-stat border-l-2 border-gold pl-4">
                <div className="font-display text-4xl text-gold">
                  <span className="counter" data-target="500">0</span>+
                </div>
                <div className="text-xs uppercase tracking-widest text-ivory/60 mt-2">Designs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
