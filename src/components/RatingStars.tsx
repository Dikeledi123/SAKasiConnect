import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  className?: string;
}

const RatingStars = ({ 
  rating, 
  maxRating = 5, 
  size = "md", 
  showValue = false,
  className 
}: RatingStarsProps) => {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex">
        {Array.from({ length: maxRating }).map((_, index) => (
          <Star
            key={index}
            className={cn(
              sizeClasses[size],
              index < Math.floor(rating)
                ? "fill-primary text-primary"
                : index < rating
                ? "fill-primary/50 text-primary"
                : "fill-muted text-muted"
            )}
          />
        ))}
      </div>
      {showValue && (
        <span className={cn("font-semibold text-foreground", textSizeClasses[size])}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default RatingStars;
