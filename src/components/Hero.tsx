import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-township.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Township community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Township
            </span>{" "}
            Entrepreneurs
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Discover trusted local services. Build your digital presence. Access
            financial opportunities.
          </p>

          {/* Search Bar */}
          <div className="bg-card rounded-2xl p-2 shadow-[var(--shadow-elevated)] mb-6 border border-border/50">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center gap-2 px-4">
                <Search className="text-muted-foreground" size={20} />
                <Input
                  placeholder="Search for services..."
                  className="border-0 focus-visible:ring-0 text-base"
                />
              </div>
              <div className="flex-1 flex items-center gap-2 px-4 border-t md:border-t-0 md:border-l pt-2 md:pt-0">
                <MapPin className="text-muted-foreground" size={20} />
                <Input
                  placeholder="Your township or area"
                  className="border-0 focus-visible:ring-0 text-base"
                />
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                Search
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-[var(--shadow-soft)]"
            >
              List Your Business
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-accent/10"
            >
              How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
