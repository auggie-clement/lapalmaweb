import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Phone, Wifi } from "lucide-react";

const HotelInfo = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header bookingPage={false} />
      <main className="pt-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          <h1 className="font-serif text-4xl text-primary">
            Hotel Information
          </h1>

          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="/photo-1721322800607-8c38375eef04"
              alt="Hotel Interior"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-serif text-lg">Check-in/Check-out</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Check-in: 3:00 PM</li>
                  <li>Check-out: 11:00 AM</li>
                  <li>Early check-in available upon request</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Wifi className="h-5 w-5 text-primary" />
                  <h3 className="font-serif text-lg">Amenities</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Complimentary high-speed WiFi</li>
                  <li>24/7 fitness center</li>
                  <li>Spa and wellness center</li>
                  <li>Restaurant and bar</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-serif text-lg">Location</h3>
                </div>
                <p className="text-muted-foreground">
                  123 Luxury Avenue
                  <br />
                  Paradise City, PC 12345
                  <br />
                  Country
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <h3 className="font-serif text-lg">Contact</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>Email: info@voyage.com</li>
                  <li>24/7 concierge service available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HotelInfo;
