import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { Newsletter } from "@/components/Newsletter";
import { ContactDialog } from "@/components/ContactDialog";
import IncludedStay from "@/components/IncludedStay";
import InstagramSection from "@/components/InstagramSection";
import Activities from "@/components/Activities";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header bookingPage={false} />
      <HeroCarousel />
      {/* <IncludedStay /> */}
      <Activities />
      <InstagramSection />
      <Newsletter />
      <ContactDialog />
    </div>
  );
};

export default Index;
