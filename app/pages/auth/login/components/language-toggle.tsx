import type { Language } from "~/@types/login/login";

interface LanguageToggleProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export function LanguageToggle({
  language,
  onLanguageChange,
}: LanguageToggleProps) {
  return (
    <div className="inline-flex rounded-full border p-1 text-sm">
      <button
        onClick={() => onLanguageChange("ko")}
        className={`rounded-full px-3 py-1 transition-colors ${
          language === "ko" ? "bg-gray-900 text-white" : "hover:bg-gray-100"
        }`}
      >
        KR
      </button>
      <button
        onClick={() => onLanguageChange("en")}
        className={`rounded-full px-3 py-1 transition-colors ${
          language === "en" ? "bg-gray-900 text-white" : "hover:bg-gray-100"
        }`}
      >
        EN
      </button>
    </div>
  );
}
