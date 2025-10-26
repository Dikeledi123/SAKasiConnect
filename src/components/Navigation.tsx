import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
              KC
            </div>
            <span className="text-xl font-bold">KasiConnect</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Browse
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              For Businesses
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
