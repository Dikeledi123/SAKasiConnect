import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin, List, User } from "lucide-react";
import BusinessCard, { Business } from "@/components/BusinessCard";
import { useNavigate } from "react-router-dom";

// Mock data
const mockBusinesses: Business[] = [
  {
    id: "1",
    name: "Thabo's Barbershop",
    category: "Barber",
    description: "Professional haircuts and grooming services for men",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500",
    rating: 4.8,
    reviewCount: 127,
    distance: "0.5 km",
    verified: true,
    location: "Soweto"
  },
  {
    id: "2",
    name: "Mama's Spaza Shop",
    category: "Grocery",
    description: "Fresh produce and daily essentials",
    image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?w=500",
    rating: 4.6,
    reviewCount: 89,
    distance: "0.8 km",
    verified: true,
    location: "Soweto"
  },
  {
    id: "3",
    name: "Sipho's Auto Repairs",
    category: "Mechanic",
    description: "Reliable car repairs and maintenance",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500",
    rating: 4.9,
    reviewCount: 156,
    distance: "1.2 km",
    verified: true,
    location: "Soweto"
  }
];

const ClientHomeScreen = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("list");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div 
        className="relative py-12 px-4"
        style={{
          background: "var(--gradient-primary)"
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Find Local Businesses</h1>
              <p className="text-white/90">Discover verified services near you</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/profile")}
              className="text-white hover:bg-white/20"
            >
              <User className="w-6 h-6" />
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for barbers, shops, mechanics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg bg-white"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="list" className="flex-1">
              <List className="w-4 h-4 mr-2" />
              List View
            </TabsTrigger>
            <TabsTrigger value="map" className="flex-1">
              <MapPin className="w-4 h-4 mr-2" />
              Map View
            </TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockBusinesses.map((business) => (
                <BusinessCard
                  key={business.id}
                  business={business}
                  onClick={() => navigate(`/business/${business.id}`)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="map" className="mt-0">
            <div className="bg-muted rounded-lg p-12 text-center">
              <MapPin className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Map View Coming Soon</h3>
              <p className="text-muted-foreground">
                Interactive map with business locations will be available soon
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClientHomeScreen;
