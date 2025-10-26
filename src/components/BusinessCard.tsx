import { MapPin, Phone, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RatingStars from "./RatingStars";
import { cn } from "@/lib/utils";

export interface Business {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  distance: string;
  verified: boolean;
  location: string;
}

interface BusinessCardProps {
  business: Business;
  onClick?: () => void;
  className?: string;
}

const BusinessCard = ({ business, onClick, className }: BusinessCardProps) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden hover:shadow-lg transition-all cursor-pointer group",
        className
      )}
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={business.image} 
          alt={business.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {business.verified && (
            <Badge className="bg-accent text-accent-foreground">
              Verified
            </Badge>
          )}
          <Badge variant="secondary">{business.category}</Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {business.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {business.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <RatingStars rating={business.rating} showValue size="sm" />
            <span className="text-xs text-muted-foreground">
              ({business.reviewCount} reviews)
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{business.distance}</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessCard;
