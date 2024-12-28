import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { APP_MODE } from "~/constants/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getENV = (env: keyof ImportMetaEnv): string | undefined => {
  return import.meta.env[env];
};

export const isDev = (): boolean => {
  return getENV("MODE") === APP_MODE.DEV;
};
