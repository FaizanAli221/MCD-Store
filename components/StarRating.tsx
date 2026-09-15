import { Star } from "lucide-react";

export default function StarRating({
  rating,
  reviewCount,
  size = 14,
}: {
  rating: number;
  reviewCount: number;
  size?: number;
}) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`Rated ${rating} out of 5 stars, ${reviewCount} reviews`}>
      <div className="flex" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            className={i < rating ? "fill-star text-star" : "fill-line text-line"}
          />
        ))}
      </div>
      <span className="text-xs text-ink/50">({reviewCount})</span>
    </div>
  );
}
