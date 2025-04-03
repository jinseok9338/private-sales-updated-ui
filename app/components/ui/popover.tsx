"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "~/lib/utils";

/**
 * Popover 컴포넌트의 루트 엘리먼트입니다.
 * @property {boolean} defaultOpen - 팝오버의 초기 표시 상태를 지정합니다.
 * @property {boolean} open - 팝오버의 표시 상태를 제어합니다. (제어 컴포넌트로 사용할 경우)
 * @property {(open: boolean) => void} onOpenChange - 팝오버의 표시 상태가 변경될 때 호출되는 콜백 함수입니다.
 * @property {boolean} modal - 모달 모드 활성화 여부를 지정합니다. 활성화시 외부 클릭이 차단됩니다.
 */
function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

/**
 * 팝오버를 트리거하는 엘리먼트입니다.
 * @property {boolean} asChild - true로 설정하면 자식 엘리먼트를 트리거로 사용합니다.
 */
function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

/**
 * 팝오버의 컨텐츠를 포함하는 컴포넌트입니다.
 * @property {string} className - 추가적인 CSS 클래스를 지정합니다.
 * @property {"start" | "center" | "end"} align - 팝오버의 정렬 위치를 지정합니다. (기본값: "center")
 * @property {number} sideOffset - 트리거로부터의 간격을 픽셀 단위로 지정합니다. (기본값: 4)
 */
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-[400px] rounded-md border p-6 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

/**
 * 팝오버의 위치를 지정하기 위한 앵커 컴포넌트입니다.
 * 트리거와 다른 위치에 팝오버를 연결하고 싶을 때 사용합니다.
 */
function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
