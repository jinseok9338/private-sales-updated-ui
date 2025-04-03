import { cn } from "~/lib/utils";

/**
 * TypoLarge 컴포넌트의 props 타입 정의
 * @property {string} children - 텍스트 콘텐츠만 허용
 */
type TypoLargeProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Large 타이포그래피 컴포넌트
 * 텍스트 노드만 children으로 받아서 표시합니다.
 */
const TypoLarge = ({ children, className }: TypoLargeProps) => {
  return <span className={cn("text-large", className)}>{children}</span>;
};

export default TypoLarge;
