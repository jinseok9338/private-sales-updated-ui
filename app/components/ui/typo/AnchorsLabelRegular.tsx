import { cn } from "~/lib/utils";

/**
 * TypoH2 컴포넌트의 props 타입 정의
 * @property {string} children - 텍스트 콘텐츠만 허용
 */
type TypoLabelRegularProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * H2 타이포그래피 컴포넌트
 * 텍스트 노드만 children으로 받아서 표시합니다.
 */
const TypoLabelRegular = ({ children, className }: TypoLabelRegularProps) => {
  return <span className={cn("text-labelRegular", className)}>{children}</span>;
};

export default TypoLabelRegular;
