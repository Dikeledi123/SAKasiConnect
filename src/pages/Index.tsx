import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedBusinesses from "@/components/FeaturedBusinesses";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Categories />
      <FeaturedBusinesses />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
