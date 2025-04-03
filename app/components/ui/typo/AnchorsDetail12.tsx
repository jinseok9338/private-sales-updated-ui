import { cn } from "~/lib/utils";

/**
 * TypoDetail12 컴포넌트의 props 타입 정의
 * @property {string} children - 텍스트 콘텐츠만 허용
 */
type TypoDetail12Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Detail12 타이포그래피 컴포넌트
 * 텍스트 노드만 children으로 받아서 표시합니다.
 */
const TypoDetail12 = ({ children, className }: TypoDetail12Props) => {
  return <span className={cn("text-detail-12", className)}>{children}</span>;
};

/**
 * Detail12 Medium 타이포그래피 컴포넌트
 * 텍스트 노드만 children으로 받아서 표시합니다.
 */
const TypoDetail12Medium = ({ children, className }: TypoDetail12Props) => {
  return (
    <span className={cn("text-detail-12-medium", className)}>{children}</span>
  );
};

export { TypoDetail12, TypoDetail12Medium };
