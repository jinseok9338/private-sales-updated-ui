"use client";

import { useState } from "react";
import type { CartItem, CartVendorGroup } from "~/@types/cart/cart";
import { EmptyCart } from "./components/emptyCart";
import { Checkbox } from "~/components/ui/checkbox";
import { CartItemComponent } from "./components/cart-item";
import { CartSummary } from "./components/cart-summary";

// Mock data - replace with actual data fetching
const mockCartItems: CartItem[] = [
  {
    id: 1,
    vendorName: "원더품",
    productName:
      "🌸바스켓 4개 증정EVENT🌸투명 아크릴 트롤리 이동식 수납 선반2단 3단",
    originalPrice: 13900,
    discountedPrice: 12920,
    imageUrl:
      "https://d3ha2047wt6x28.cloudfront.net/IqjBh9e-EkI/pr:GOODS_THUMB/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzJlZTQ3YWJiNDc1YmIyMjZlOWMwYjg0OTFiZmI3NDQ2LnBuZw",
    options: [{ name: "옵션", value: "이동선반 트롤리 / 2단 바스켓 1개 증정" }],
    quantity: 1,
    isSelected: false,
    isFreeShipping: true,
    todayDeal: true,
  },
  {
    id: 2,
    vendorName: "로랜텍",
    productName:
      "[⚡당일출고/✨세트상품] 초고속 충전기 고속충전 케이블 세트 아이폰 갤럭시",
    originalPrice: 20900,
    discountedPrice: 13900,
    imageUrl:
      "https://d3ha2047wt6x28.cloudfront.net/-vqskS-qX44/pr:GOODS_THUMB/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzL2EyOWVlYjAwMzdhNzVmZGY4ZDZkMmZjZmJiODIyMmU5LmdpZg",
    options: [
      {
        name: "세트상품",
        value: "30W 파스텔 충전기 핑크 / 파스텔 60W CtoC 케이블 1.2m / 퍼플",
      },
    ],
    quantity: 1,
    isSelected: false,
    isFreeShipping: true,
  },
  {
    id: 3,
    vendorName: "로랜텍2",
    productName:
      "[⚡당일출고/✨세트상품] 초고속 충전기 고속충전 케이블 세트 아이폰 갤럭시2",
    originalPrice: 20900,
    discountedPrice: 13900,
    imageUrl:
      "https://d3ha2047wt6x28.cloudfront.net/-vqskS-qX44/pr:GOODS_THUMB/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzL2EyOWVlYjAwMzdhNzVmZGY4ZDZkMmZjZmJiODIyMmU5LmdpZg",
    options: [
      {
        name: "세트상품2",
        value: "30W 파스텔 충전기 핑크 / 파스텔 60W CtoC 케이블 1.2m / 퍼플",
      },
    ],
    quantity: 2,
    isSelected: false,
    isFreeShipping: true,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);

  const isEmpty = cartItems.length === 0;
  const selectedCount = cartItems.filter((item) => item.isSelected).length;

  const vendorGroups: CartVendorGroup[] = cartItems.reduce((groups, item) => {
    const group = groups.find((g) => g.vendorName === item.vendorName);
    if (group) {
      group.items.push(item);
    } else {
      groups.push({ vendorName: item.vendorName, items: [item] });
    }
    return groups;
  }, [] as CartVendorGroup[]);

  const totals = cartItems.reduce(
    (acc, item) => {
      if (item.isSelected) {
        acc.subtotal += item.discountedPrice * item.quantity;
        acc.points += Math.floor(item.discountedPrice * 0.01) * item.quantity;
      }
      return acc;
    },
    { subtotal: 0, shipping: 0, points: 0, total: 0 }
  );
  totals.total = totals.subtotal + totals.shipping;

  const handleSelectAll = (checked: boolean) => {
    setCartItems((items) =>
      items.map((item) => ({ ...item, isSelected: checked }))
    );
  };

  const handleSelectItem = (id: number, selected: boolean) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isSelected: selected } : item
      )
    );
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  if (isEmpty) {
    return <EmptyCart />;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={selectedCount === cartItems.length}
            onCheckedChange={(checked) => handleSelectAll(checked as boolean)}
          />
          <span className="text-sm">
            전체 선택({selectedCount}/{cartItems.length})
          </span>
        </div>
        <button className="text-sm text-gray-500">선택삭제</button>
      </div>

      {vendorGroups.map((group) => (
        <div key={group.vendorName} className="mb-8">
          <h2 className="font-bold mb-4">{group.vendorName} 배송상품</h2>
          <div className="border rounded-lg">
            {group.items.map((item) => (
              <CartItemComponent
                key={item.id}
                item={item}
                onSelect={handleSelectItem}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemoveItem}
              />
            ))}
          </div>
        </div>
      ))}

      <CartSummary totals={totals} />
    </div>
  );
}
