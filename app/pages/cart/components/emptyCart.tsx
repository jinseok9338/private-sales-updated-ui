import { Button } from "~/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";

export function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="w-24 h-24 mb-6">
        <ShoppingCart className="w-24 h-24 text-gray-400 opacity-20" />
      </div>
      <h2 className="text-xl font-medium mb-2">장바구니가 비어있어요</h2>
      <p className="text-gray-500 mb-8">새로운 상품으로 채워주세요</p>
      <Link to="/">
        <Button className="w-full max-w-md bg-rose-400 hover:bg-rose-500">
          상품 보러가기
        </Button>
      </Link>
    </div>
  );
}
