export type Language = "ko" | "en";

export interface Translations {
  emailLogin: string;
  emailPlaceholder: string;
  passwordPlaceholder: string;
  loginButton: string;
  findPassword: string;
}

export const translations: Record<Language, Translations> = {
  ko: {
    emailLogin: "이메일로 로그인",
    emailPlaceholder: "이메일 입력",
    passwordPlaceholder: "비밀번호 입력",
    loginButton: "로그인",
    findPassword: "비밀번호 찾기",
  },
  en: {
    emailLogin: "Login with Email",
    emailPlaceholder: "Enter email",
    passwordPlaceholder: "Enter password",
    loginButton: "Login",
    findPassword: "Find Password",
  },
};
