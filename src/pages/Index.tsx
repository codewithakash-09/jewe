import { useEffect } from "react";
import Navbar from "@/components/jewellery/Navbar";
import Hero from "@/components/jewellery/Hero";
import MarqueeStrip from "@/components/jewellery/MarqueeStrip";
import Collections from "@/components/jewellery/Collections";
import Heritage from "@/components/jewellery/Heritage";
import Festive from "@/components/jewellery/Festive";
import Visit from "@/components/jewellery/Visit";
import Footer from "@/components/jewellery/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Shree Ram Jewellers — Hallmarked Gold & Silver Ornaments, Ghaziabad";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute(
      "content",
      "Shree Ram Jewellers — BIS Hallmarked gold & silver ornaments, bridal sets and festive collections in Pratap Vihar, Ghaziabad. Trusted by families for generations."
    );
    document.head.appendChild(meta);
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <Collections />
      <Heritage />
      <Festive />
      <Visit />
      <Footer />
    </main>
  );
};

export default Index;
