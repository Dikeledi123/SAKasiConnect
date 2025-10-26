import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CallToAction = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <Card className="relative overflow-hidden border-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-90" />
          <div className="relative z-10 p-12 md:p-20 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-2xl mx-auto">
              Join thousands of township entrepreneurs building their digital
              presence and accessing new opportunities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8"
              >
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8"
              >
                Learn More
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;
