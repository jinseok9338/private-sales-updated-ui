import { cn } from "~/lib/utils";

/**
 * TypoPUI 컴포넌트의 props 타입  정의
 * @property {string} children - 텍스트 콘텐츠만 허용
 */
type TypoP_UIProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * PUI Semibold 타이포그래피 컴포넌트
 * 텍스트 노드만 children으로 받아서 표시합니다.
 */
const TypoP_UI_Semibold = ({ children, className }: TypoP_UIProps) => {
  return (
    <span className={cn("text-p-ui-semibold", className)}>{children}</span>
  );
};

export default TypoP_UI_Semibold;
