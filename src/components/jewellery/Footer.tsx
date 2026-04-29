const Footer = () => {
  return (
    <footer className="border-t border-gold/20 bg-emerald-deep/80 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="font-display text-xs tracking-[0.4em] text-gold">SHREE RAM</div>
            <div className="font-serif-elegant text-2xl text-ivory italic">Jewellers</div>
            <p className="text-ivory/60 text-sm mt-4 leading-relaxed">
              Ghaziabad's trusted name for hallmarked gold and silver ornaments.
            </p>
          </div>
          <div>
            <div className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Quick Links</div>
            <ul className="space-y-2 text-ivory/70 text-sm">
              <li><a href="#collections" className="hover:text-gold transition-colors">Collections</a></li>
              <li><a href="#heritage" className="hover:text-gold transition-colors">Heritage</a></li>
              <li><a href="#festive" className="hover:text-gold transition-colors">Festive</a></li>
              <li><a href="#visit" className="hover:text-gold transition-colors">Visit Showroom</a></li>
            </ul>
          </div>
          <div>
            <div className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Contact</div>
            <p className="text-ivory/70 text-sm leading-relaxed">
              Tarun Verma<br />
              +91 97177 24714<br />
              C-31, GDA Market, Pratap Vihar, Ghaziabad
            </p>
          </div>
        </div>
        <div className="ornament-divider mb-6" />
        <div className="text-center text-ivory/40 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Shree Ram Jewellers · Crafted with devotion
        </div>
      </div>
    </footer>
  );
};

export default Footer;
