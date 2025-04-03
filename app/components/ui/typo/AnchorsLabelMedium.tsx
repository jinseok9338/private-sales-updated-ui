import { cn } from "~/lib/utils";

/**
 * TypoLabelMedium 컴포넌트의 props 타입 정의
 * @property {string} children - 텍스트 콘텐츠만 허용
 */
type TypoLabelMediumProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * LabelMedium 타이포그래피 컴포넌트
 * 텍스트 노드만 children으로 받아서 표시합니다.
 */
const TypoLabelMedium = ({ children, className }: TypoLabelMediumProps) => {
  return <span className={cn("text-label-medium", className)}>{children}</span>;
};

export default TypoLabelMedium;
