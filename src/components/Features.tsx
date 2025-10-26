import { Card } from "@/components/ui/card";
import { Store, TrendingUp, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Store,
    title: "Digital Business Profile",
    description:
      "Create your online presence and showcase your services to thousands of potential customers.",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Build Trust & Credibility",
    description:
      "Get verified reviews and ratings that help customers find and trust your business.",
    color: "text-secondary",
  },
  {
    icon: TrendingUp,
    title: "Access Financial Tools",
    description:
      "Build transaction history to unlock micro-loans, savings, and credit scoring opportunities.",
    color: "text-accent",
  },
  {
    icon: Smartphone,
    title: "Easy to Use",
    description:
      "Simple platform designed for everyone. No tech skills needed to get started.",
    color: "text-primary",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose KasiConnect?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're building a bridge between township businesses and financial
            opportunity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="p-8 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 border-border/50 bg-gradient-to-b from-card to-background"
            >
              <div className={`${feature.color} mb-6`}>
                <feature.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
