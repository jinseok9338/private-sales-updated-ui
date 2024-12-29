import { Expand } from "lucide-react";
import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "~/components/ui/carousel";
import ParagraphS from "~/components/ui/typo/paragraph_s";
import useModal from "~/stores/modalStores";

interface ProductCarouselProps {
  images?: string[];
}

export function ProductCarousel({ images }: ProductCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const { openModal } = useModal();
  const handleShowFullScreen = () => {
    const image = images?.[current];
    openModal({
      content: (
        <div>
          <img src={image} alt="Product image" className="w-full h-full" />
        </div>
      ),
      hideBottomButton: true,
    });
  };

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-square w-full max-w-2xl mx-auto bg-muted flex items-center justify-center">
        <ParagraphS className="text-muted-foreground">
          No images available
        </ParagraphS>
      </div>
    );
  }

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-square w-full">
                <img
                  src={image}
                  alt={`Product image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-4 bg-black/50 hover:bg-black/70 text-white z-10"
        onClick={handleShowFullScreen}
      >
        <Expand className="h-5 w-5" />
      </Button>
    </div>
  );
}
