import React from "react";
import MainBannerImage from "~/assets/images/MainKV.png";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";

const MainBanner = (): React.JSX.Element => {
  const [api, setApi] = useState<any>();
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  const bannerImages = [MainBannerImage];

  // If there's only one image, render it directly
  if (bannerImages.length === 1) {
    return (
      <div className="w-full flex justify-center">
        <div className="w-full px-4">
          <div className="aspect-square w-full overflow-hidden rounded-none">
            <img
              src={bannerImages[0]}
              alt="Banner"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }

  // Otherwise, render the carousel
  return (
    <div className="w-full flex justify-center">
      <div>
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
            slidesToScroll: 1,
          }}
          className="w-full p-0"
        >
          <CarouselContent className="m-0 p-0">
            {bannerImages.map((image, index) => (
              <CarouselItem key={index} className="p-0 basis-[95%]">
                <div className="aspect-square w-full overflow-hidden rounded-none">
                  <img
                    src={image}
                    alt={`Banner ${index + 1}`}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default MainBanner;
