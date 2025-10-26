import { Button } from "@/components/ui/button";
import { Users, Briefcase, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 opacity-90"
        style={{
          background: "var(--gradient-hero)"
        }}
      />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
              KasiConnect
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Connecting Local Hustlers to Digital Growth
            </p>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Empowering township entrepreneurs with visibility, connecting them to customers who need their services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-8">
            <button
              onClick={() => navigate("/client-signup")}
              className="group relative bg-white hover:bg-white/95 text-primary p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-full group-hover:scale-110 transition-transform">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">I'm a Client</h3>
                  <p className="text-muted-foreground">
                    Find trusted local businesses and services
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
              </div>
            </button>

            <button
              onClick={() => navigate("/worker-signup")}
              className="group relative bg-white hover:bg-white/95 text-secondary p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-secondary/10 rounded-full group-hover:scale-110 transition-transform">
                  <Briefcase className="w-12 h-12 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">I'm a Worker</h3>
                  <p className="text-muted-foreground">
                    Grow your business and reach more customers
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 text-secondary group-hover:translate-x-2 transition-transform" />
              </div>
            </button>
          </div>

          <Button
            variant="ghost"
            size="lg"
            onClick={() => navigate("/client-home")}
            className="text-white hover:text-white hover:bg-white/20 mt-8"
          >
            Continue as Guest
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
