import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minHeight: {
        page: "calc(100vh - 48px)",
      },
      fontFamily: {
        sans: [
          'Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          'Apple Color Emoji"',
          'Segoe UI Emoji"',
          'Segoe UI Symbol"',
          'Noto Color Emoji"',
        ],
      },
      fontSize: {
        "display-l": [
          "96px",
          {
            lineHeight: "112px",
            fontWeight: 600,
          },
        ],
        "display-m": [
          "52px",
          {
            lineHeight: "64px",
            fontWeight: 600,
          },
        ],
        "display-s": [
          "44px",
          {
            lineHeight: "52px",
            fontWeight: 600,
          },
        ],
        "display-xs": [
          "36px",
          {
            lineHeight: "44px",
            fontWeight: 600,
          },
        ],
        "heading-xxl": [
          "40px",
          {
            lineHeight: "52px",
            fontWeight: 600,
          },
        ],
        "heading-xl": [
          "36px",
          {
            lineHeight: "44px",
            fontWeight: 600,
          },
        ],
        "heading-l": [
          "32px",
          {
            lineHeight: "40px",
            fontWeight: 600,
          },
        ],
        "heading-m": [
          "28px",
          {
            lineHeight: "36px",
            fontWeight: 600,
          },
        ],
        "heading-s": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: 600,
          },
        ],
        "heading-xs": [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: 600,
          },
        ],
        "label-l": [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: 500,
          },
        ],
        "label-m": [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: 500,
          },
        ],
        "label-s": [
          "14px",
          {
            lineHeight: "16px",
            fontWeight: 500,
          },
        ],
        "label-xs": [
          "12px",
          {
            lineHeight: "14px",
            fontWeight: 500,
          },
        ],

        "label-xxs": [
          "10px",
          {
            lineHeight: "14px",
            fontWeight: 400,
          },
        ],
        "paragraph-l": [
          "18px",
          {
            lineHeight: "28px",
          },
        ],
        "paragraph-m": [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        "paragraph-s": [
          "14px",
          {
            lineHeight: "20px",
          },
        ],
        "paragraph-xs": [
          "12px",
          {
            lineHeight: "16px",
          },
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
