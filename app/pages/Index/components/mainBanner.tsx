import React from "react";
import { cn } from "~/lib/utils";

const MainBanner = (): React.JSX.Element | null => {
  const DESKTOP_CN =
    "absolute left-2/4 top-2/4 max-w-none -translate-x-2/4 -translate-y-2/4";

  return (
    <div className={cn("")}>
      <img
        src="https://img.a-bly.com/banner/images/banner_image_1734669442780758.jpg"
        alt="Main Banner"
        className={cn(`object-cover`)}
      />
    </div>
  );
};

export default MainBanner;
