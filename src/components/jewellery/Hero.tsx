import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroRing from "@/assets/hero-ring.jpg";
import mandala from "@/assets/mandala-pattern.jpg";

const Hero = () => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.8 })
        .from(".hero-word", { y: 80, opacity: 0, duration: 1, stagger: 0.15 }, "-=0.4")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.5")
        .from(".hero-image", { scale: 1.2, opacity: 0, duration: 1.6, ease: "power4.out" }, 0.2)
        .from(".hero-coin", { y: -200, opacity: 0, rotation: 360, stagger: 0.15, duration: 1.2, ease: "bounce.out" }, 0.6)
        .from(".hero-meta", { opacity: 0, x: -20, stagger: 0.1, duration: 0.6 }, "-=0.8");

      gsap.to(".hero-image-wrap", {
        y: -25,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".mandala-bg", { rotation: 360, duration: 120, repeat: -1, ease: "none" });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="home" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Background mandalas */}
      <div
        className="mandala-bg absolute -left-40 top-20 w-[600px] h-[600px] opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url(${mandala})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
        }}
      />
      <div
        className="mandala-bg absolute -right-32 -bottom-32 w-[500px] h-[500px] opacity-15 pointer-events-none"
        style={{
          backgroundImage: `url(${mandala})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
        }}
      />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="relative z-10">
          <div className="hero-eyebrow flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-display">
              Since Generations · Ghaziabad
            </span>
          </div>

          <h1 className="font-display text-ivory leading-[0.95] mb-2">
            <span className="block overflow-hidden">
              <span className="hero-word block text-5xl md:text-7xl lg:text-8xl font-light italic font-serif-elegant text-gold">
                Timeless
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-word block text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide">
                Heirlooms
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-word block text-5xl md:text-7xl lg:text-8xl font-light italic font-serif-elegant text-ivory/80">
                in Gold.
              </span>
            </span>
          </h1>

          <p className="hero-sub mt-8 max-w-md text-ivory/70 text-lg font-serif-elegant italic leading-relaxed">
            Hallmarked gold & silver ornaments handcrafted with devotion for over a generation —
            blessing every milestone of your family.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#collections"
              className="hero-cta group relative overflow-hidden bg-gold text-emerald-deep px-8 py-4 text-sm tracking-[0.25em] uppercase font-medium"
            >
              <span className="relative z-10">Explore Collection</span>
              <span className="absolute inset-0 bg-ivory translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-emerald-deep tracking-[0.25em] uppercase font-medium text-sm">
                Explore Collection
              </span>
            </a>
            <a
              href="#visit"
              className="hero-cta px-8 py-4 text-sm tracking-[0.25em] uppercase border border-gold/60 text-gold hover:bg-gold/10 transition-colors"
            >
              Visit Showroom
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-10 items-center">
            <div className="hero-meta">
              <div className="font-display text-3xl text-gold">BIS</div>
              <div className="text-xs uppercase tracking-widest text-ivory/60">Hallmarked</div>
            </div>
            <div className="hero-meta w-px h-10 bg-gold/30" />
            <div className="hero-meta">
              <div className="font-display text-3xl text-gold">22K</div>
              <div className="text-xs uppercase tracking-widest text-ivory/60">Pure Gold</div>
            </div>
            <div className="hero-meta w-px h-10 bg-gold/30" />
            <div className="hero-meta">
              <div className="font-display text-3xl text-gold">100%</div>
              <div className="text-xs uppercase tracking-widest text-ivory/60">Trusted</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="hero-image-wrap relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-gold/20 blur-3xl scale-90 rounded-full" />
            {/* Image frame */}
            <div className="hero-image relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 border border-gold/40 translate-x-4 translate-y-4" />
              <img
                src={heroRing}
                alt="Signature ruby gold ring on emerald velvet — Shree Ram Jewellers"
                className="relative w-full h-full object-cover"
                width={1280}
                height={1600}
              />
              <div className="absolute inset-0 ring-1 ring-gold/60" />
            </div>

            {/* Floating coins */}
            <div className="hero-coin absolute -top-4 -right-2 w-16 h-16 rounded-full bg-gradient-to-br from-gold-bright to-gold-deep shadow-elegant flex items-center justify-center text-emerald-deep font-display text-xl">
              ॐ
            </div>
            <div className="hero-coin absolute top-1/3 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-gold-bright to-gold-deep shadow-elegant" />
            <div className="hero-coin absolute -bottom-4 right-12 w-20 h-20 rounded-full bg-gradient-to-br from-gold-bright to-gold-deep shadow-elegant flex items-center justify-center text-emerald-deep font-display">
              श्री
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.3em] text-ivory/40">Scroll</span>
        <span className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
