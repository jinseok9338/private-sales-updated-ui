import { Star } from "lucide-react";
import LabelM from "~/components/ui/typo/label_m";
import ParagraphS from "~/components/ui/typo/paragraph_s";

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
          <LabelM className="font-medium">{name}</LabelM>
          <ParagraphS className="text-sm text-muted-foreground">
            {tags.join(" ")}
          </ParagraphS>
        </div>
      </div>
    </div>
  );
}
