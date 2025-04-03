import { cn } from "~/lib/utils";

/**
 * TypoP 컴포넌트의 props 타입 정의
 * @property {string} children - 텍스트 콘텐츠만 허용
 */
type TypoPProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * P 타이포그래피 컴포넌트
 * 텍스트 노드만 children으로 받아서 표시합니다.
 */
const TypoP = ({ children, className }: TypoPProps) => {
  return <span className={cn("text-p", className)}>{children}</span>;
};

export default TypoP;
