import { forwardRef, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { cn } from "~/lib/utils";
import { Input } from "./input";

interface IPasswordInputProps extends IClassName {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const PasswordInput = forwardRef<HTMLInputElement, IPasswordInputProps>(
  ({ placeholder, value, onChange, className }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div
        className={cn(
          "border-border-secondar flex h-9 items-center justify-center gap-2 border bg-white pl-3 pr-2",
          className
        )}
      >
        <Input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="size-auto grow border-none p-0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          ref={ref}
        />
        <button
          type="button"
          className="flex size-6 items-center justify-center"
          onClick={toggleShowPassword}
          tabIndex={-1}
        >
          {showPassword ? (
            <LuEye stroke="#B6B6B6" />
          ) : (
            <LuEyeOff stroke="#B6B6B6" />
          )}
        </button>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
export default PasswordInput;
