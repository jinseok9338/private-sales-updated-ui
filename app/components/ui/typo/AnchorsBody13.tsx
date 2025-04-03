import { cn } from "~/lib/utils";

/**
 * TypoBody13 컴포넌트의 props 타입 정의
 * @property {string} children - 텍스트 콘텐츠만 허용
 */
type TypoBody13Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Body13 타이포그래피 컴포넌트
 * 텍스트 노드만 children으로 받아서 표시합니다.
 */
const TypoBody13 = ({ children, className }: TypoBody13Props) => {
  return <span className={cn("text-body13", className)}>{children}</span>;
};

/**
 * Body13 Semibold 타이포그래피 컴포넌트
 * 텍스트 노드만 children으로 받아서 표시합니다.
 */
const TypoBody13Semibold = ({ children, className }: TypoBody13Props) => {
  return (
    <span className={cn("text-body13-semibold", className)}>{children}</span>
  );
};

export { TypoBody13, TypoBody13Semibold };
