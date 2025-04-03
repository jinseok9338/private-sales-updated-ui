export const APP_MODE = {
  DEV: "development",
  PRODUCT: "product",
  TEST: "test",
  UAT: "uat",
} as const;

export const NOT_AUTH_PATH = ["/login", "/find-password"];
