import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ProductsSection from "@/components/ProductsSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { tools, allProducts } from "@/data/products";

// All site copy lives here in code. To change any of it, edit this file
// directly and redeploy -- there's no CMS or admin dashboard behind this site.
const content = {
  heroKicker: "a small coastal pottery supply shop",
  heroHeadline: "Everything a potter's wheel needs, in one place.",
  heroSubhead:
    "Argillaart stocks wheels, kilns, hand tools, glazes, and clay bodies for potters who'd rather be at the wheel than hunting down a supplier.",
  toolsTitle: "The full catalog.",
  toolsDescription:
    "Wheels, kilns, hand tools, glazes, and clay bodies — everything the workshop runs on, in one shop.",
  contactHeadline: "Ask about stock, or a bulk order.",
  contactDescription:
    "Setting up a classroom, a studio, or just restocking your own bench — reach out any time and we'll help you find what you need.",
  email: "weizhangofficial31@gmail.com",
  address: "2F-03-01, 74 Luntou Road, Haizhu District, Guangzhou, Guangdong, China",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          kicker={content.heroKicker}
          headline={content.heroHeadline}
          subhead={content.heroSubhead}
        />
        <Stats totalCount={allProducts.length} />
        <ProductsSection
          id="tools"
          eyebrow="full catalog"
          title={content.toolsTitle}
          description={content.toolsDescription}
          products={tools}
          accent="ash"
        />
        <About />
        <Contact
          headline={content.contactHeadline}
          description={content.contactDescription}
          email={content.email}
          address={content.address}
        />
      </main>
      <Footer />
    </>
  );
}
