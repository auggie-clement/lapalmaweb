import { Button } from '@/components/ui/button';

const properties = [
  {
    name: "Mountain Lodge",
    location: "Aspen, Colorado",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800"
  },
  {
    name: "Coastal Resort",
    location: "Maui, Hawaii",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800"
  },
  {
    name: "Desert Oasis",
    location: "Sedona, Arizona",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800"
  }
];

export const FeaturedProperties = () => {
  return (
    <section className="py-20 px-6">
      <div className="container">
        <h2 className="text-4xl md:text-5xl text-center mb-16">Featured Properties</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.name} className="relative overflow-hidden group cursor-pointer">
              <img
                src={property.image}
                alt={property.name}
                className="w-full aspect-[3/4] object-cover mb-4 transition-transform duration-700 group-hover:scale-105"
              />
              <h3 className="text-2xl mb-1">{property.name}</h3>
              <p className="text-muted-foreground mb-4">{property.location}</p>
              <Button variant="ghost" className="hover:text-primary">
                Explore
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};