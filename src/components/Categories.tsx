import { Card } from "@/components/ui/card";
import barberIcon from "@/assets/category-barber.png";
import mechanicIcon from "@/assets/category-mechanic.png";
import foodIcon from "@/assets/category-food.png";
import retailIcon from "@/assets/category-retail.png";

const categories = [
  {
    name: "Barbers & Beauty",
    icon: barberIcon,
    count: "240+ businesses",
  },
  {
    name: "Mechanics & Auto",
    icon: mechanicIcon,
    count: "180+ businesses",
  },
  {
    name: "Food & Catering",
    icon: foodIcon,
    count: "320+ businesses",
  },
  {
    name: "Retail & Spaza",
    icon: retailIcon,
    count: "450+ businesses",
  },
];

const Categories = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Browse by Category</h2>
          <p className="text-xl text-muted-foreground">
            Find the perfect service in your area
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="p-8 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 cursor-pointer group border-border/50 bg-gradient-to-b from-card to-muted/20"
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-muted-foreground">{category.count}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
