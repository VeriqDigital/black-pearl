import Hero from "@/components/sections/Hero";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import About from "@/components/sections/About";
import Collections from "@/components/sections/Collections";
import SocialGallery from "@/components/sections/SocialGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <About />
      <Collections />
      <SocialGallery />
    </>
  );
}
