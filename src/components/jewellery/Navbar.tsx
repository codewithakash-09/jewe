import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Heritage", href: "#heritage" },
  { label: "Festive", href: "#festive" },
  { label: "Visit", href: "#visit" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-emerald-deep/85 backdrop-blur-xl border-b border-gold/20 py-3"
          : "py-6"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#home" className="flex flex-col leading-none">
          <span className="font-display text-xs tracking-[0.4em] text-gold">SHREE RAM</span>
          <span className="font-serif-elegant text-xl md:text-2xl text-ivory italic -mt-1">Jewellers</span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm tracking-widest uppercase text-ivory/80 hover:text-gold transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:9717724714"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 border border-gold/50 rounded-sm text-gold text-sm tracking-wider hover:bg-gold hover:text-emerald-deep transition-all"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          97177 24714
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
