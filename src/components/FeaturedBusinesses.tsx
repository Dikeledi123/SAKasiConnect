import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Award } from "lucide-react";

const businesses = [
  {
    name: "Themba's Cuts & Fades",
    category: "Barber Shop",
    location: "Soweto, Johannesburg",
    rating: 4.8,
    reviews: 127,
    verified: true,
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=500",
  },
  {
    name: "Mama's Kitchen",
    category: "Food Vendor",
    location: "Khayelitsha, Cape Town",
    rating: 4.9,
    reviews: 203,
    verified: true,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500",
  },
  {
    name: "AutoFix Mechanics",
    category: "Auto Repair",
    location: "Alexandra, Johannesburg",
    rating: 4.7,
    reviews: 89,
    verified: true,
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=500",
  },
];

const FeaturedBusinesses = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Featured Businesses
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Trusted by Your Community</h2>
          <p className="text-xl text-muted-foreground">
            Verified businesses with excellent ratings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business) => (
            <Card
              key={business.name}
              className="overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-all duration-300 border-border/50"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={business.image}
                  alt={business.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {business.verified && (
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                    <Award className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{business.name}</h3>
                <p className="text-muted-foreground mb-3">{business.category}</p>

                <div className="flex items-center gap-2 mb-4 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">
                    {business.location}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="font-semibold">{business.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({business.reviews} reviews)
                    </span>
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  View Profile
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Businesses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBusinesses;
