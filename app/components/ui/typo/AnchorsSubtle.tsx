import { cn } from "~/lib/utils";

/**
 * TypoSubtle 컴포넌트의 props 타입 정의
 * @property {string} children - 텍스트 콘텐츠만 허용
 */
type TypoSubtleProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Subtle 타이포그래피 컴포넌트
 * 텍스트 노드만 children으로 받아서 표시합니다.
 */
const TypoSubtle = ({ children, className }: TypoSubtleProps) => {
  return <span className={cn("text-subtle", className)}>{children}</span>;
};

/**
 * Subtle Semibold 타이포그래피 컴포넌트
 * 텍스트 노드만 children으로 받아서 표시합니다.
 */
const TypoSubtleSemibold = ({ children, className }: TypoSubtleProps) => {
  return (
    <span className={cn("text-subtle-semibold", className)}>{children}</span>
  );
};

const TypoSubtleMedium = ({ children, className }: TypoSubtleProps) => {
  return (
    <span className={cn("text-subtle-medium", className)}>{children}</span>
  );
};

export { TypoSubtle, TypoSubtleSemibold, TypoSubtleMedium };
