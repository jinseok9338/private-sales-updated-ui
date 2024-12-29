import { Star } from "lucide-react";

interface SellerInfoProps {
  name: string;
  image: string;
  tags: string[];
  views: string;
}

export function SellerInfo({ name, image, tags, views }: SellerInfoProps) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h2 className="font-medium">{name}</h2>
          <p className="text-sm text-muted-foreground">{tags.join(" ")}</p>
        </div>
      </div>
    </div>
  );
}
