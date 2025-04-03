import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "~/components/ui/carousel";

interface ProductCarouselProps {
  images: string[];
}

export function ProductCarousel({ images }: ProductCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Set up the initial event listeners
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Set up the auto-loop functionality
  useEffect(() => {
    if (!api) {
      return;
    }

    // Setup interval for auto rotation
    const intervalId = setInterval(() => {
      const nextIndex = (current + 1) % images.length;
      api.scrollTo(nextIndex);
    }, 5000); // 5 seconds interval

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [api, current, images.length]);

  return (
    <div className="relative w-full">
      <Carousel className="w-full p-0" setApi={setApi}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full" style={{ aspectRatio: "1/1.2" }}>
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

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex w-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-[2px] flex-1 transition-colors ${
              index === current ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
