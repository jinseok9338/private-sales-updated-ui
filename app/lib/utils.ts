import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { APP_MODE } from "~/constants/config";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "h1",
            "h2",
            "h3",
            "large",
            "lead",
            "p",
            "p-ui",
            "p-ui-semibold",
            "body14",
            "body14-semibold",
            "body13",
            "body13-semibold",
            "subtle",
            "subtle-semibold",
            "small",
            "detail-12",
            "detail-12-medium",
            "labelRegular",
            "label-medium",
            "subtle-medium",
          ],
        },
      ],
    },
  },
});
export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}

export function contrastingColor(hex: string, factorAlpha = false) {
  const matches = hex
    .replace(
      /^#?(?:(?:(..)(..)(..)(..)?)|(?:(.)(.)(.)(.)?))$/,
      "$1$5$5$2$6$6$3$7$7$4$8$8"
    )
    .match(/(..)/g);

  if (!matches) return "#000";

  const [r, g, b, a] = matches.map((rgb) => parseInt("0x" + rgb));
  return (~~(r * 299) + ~~(g * 587) + ~~(b * 114)) / 1000 >= 128 ||
    (!!(~(128 / a) + 1) && factorAlpha)
    ? "#000"
    : "#FFF";
}

export const getENV = (env: keyof ImportMetaEnv): string | undefined => {
  return import.meta.env[env];
};

export const isDev = (): boolean => {
  return getENV("MODE") === APP_MODE.DEV;
};

export const _compact = <T>(array: (T | undefined | null)[]): T[] => {
  return array.filter((item) => item !== undefined && item !== null) as T[];
};

export const randomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
