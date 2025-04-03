import { cn } from "~/lib/utils";

/**
 * TypoBody14 컴포넌트의 props 타입 정의
 * @property {string} children - 텍스트 콘텐츠만 허용
 */
type TypoBody14Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Body14 타이포그래피 컴포넌트
 * 텍스트 노드만 children으로 받아서 표시합니다.
 */
const TypoBody14 = ({ children, className }: TypoBody14Props) => {
  return <span className={cn("text-body14", className)}>{children}</span>;
};

/**
 * Body14 Semibold 타이포그래피 컴포넌트
 * 텍스트 노드만 children으로 받아서 표시합니다.
 */
const TypoBody14Semibold = ({ children, className }: TypoBody14Props) => {
  return (
    <span className={cn("text-body14-semibold", className)}>{children}</span>
  );
};

export { TypoBody14, TypoBody14Semibold };
