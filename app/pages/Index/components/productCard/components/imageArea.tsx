import { cn } from "~/lib/utils";

import CartIcon from "~/assets/icons/bag-black.svg";

const ImageArea = ({
  image,
  outOfStock,
  goodsId,
  onClickCartIcon,
}: {
  image: string;
  outOfStock: boolean;
  goodsId: string;
  onClickCartIcon: (goodsId: string) => void;
}) => {
  return (
    <div
      className={cn(
        "w-full h-full aspect-[199.33/239.20] relative",
        outOfStock ? "bg-gray-300" : "bg-gray-100"
      )}
    >
      <img
        src={image}
        alt={"product image"}
        className={cn("object-cover w-full h-full mix-blend-multiply")}
        width={199}
        height={239}
        loading="lazy"
      />
      {!outOfStock ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClickCartIcon(goodsId);
          }}
          className="absolute bottom-2 rounded-full right-2 w-7 h-7 p-[6px] bg-common-white flex items-center justify-center"
        >
          <img src={CartIcon} alt="cart icon" className="w-4 h-4" />
        </button>
      ) : null}
    </div>
  );
};

export default ImageArea;
