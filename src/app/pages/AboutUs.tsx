import { Header } from "@/components/Header";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header bookingPage={false} />
      <main className="pt-24 container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-up">
          <h1 className="font-serif text-4xl text-primary">About Voyage</h1>

          <p className="text-muted-foreground leading-relaxed">
            Welcome to Voyage, where luxury meets authentic travel experiences.
            Founded with a vision to redefine hospitality, we curate
            extraordinary stays that blend sophisticated comfort with local
            culture.
          </p>

          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="/photo-1487958449943-2429e8be8625"
              alt="Voyage Exterior"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-2xl text-primary">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Since our establishment, we have been dedicated to providing
              exceptional hospitality experiences that create lasting memories
              for our guests. Our commitment to excellence is reflected in every
              detail of our service and accommodations.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-2xl text-primary">Our Values</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• Excellence in every detail</li>
              <li>• Authentic local experiences</li>
              <li>• Sustainable luxury</li>
              <li>• Personalized service</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
