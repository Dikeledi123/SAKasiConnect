import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RatingStars from "./RatingStars";
import { formatDistanceToNow } from "date-fns";

export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: Date;
  reply?: string;
}

interface ReviewItemProps {
  review: Review;
}

const ReviewItem = ({ review }: ReviewItemProps) => {
  const initials = review.userName
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="space-y-3 p-4 rounded-lg bg-muted/50">
      <div className="flex items-start gap-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src={review.userAvatar} />
          <AvatarFallback className="bg-primary text-primary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-foreground">{review.userName}</p>
              <p className="text-xs text-muted-foreground">
                {formatDistanceToNow(review.date, { addSuffix: true })}
              </p>
            </div>
            <RatingStars rating={review.rating} size="sm" />
          </div>
          
          <p className="text-sm text-foreground">{review.comment}</p>
          
          {review.reply && (
            <div className="mt-3 pl-4 border-l-2 border-primary">
              <p className="text-xs font-semibold text-primary mb-1">Business Reply:</p>
              <p className="text-sm text-muted-foreground">{review.reply}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
