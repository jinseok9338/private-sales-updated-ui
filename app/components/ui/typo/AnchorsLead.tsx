import { cn } from "~/lib/utils";

/**
 * TypoLead 컴포넌트의 props 타입 정의
 * @property {string} children - 텍스트 콘텐츠만 허용
 */
type TypoLeadProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Lead 타이포그래피 컴포넌트
 * 텍스트 노드만 children으로 받아서 표시합니다.
 */
const TypoLead = ({ children, className }: TypoLeadProps) => {
  return <span className={cn("text-lead", className)}>{children}</span>;
};

export default TypoLead;
