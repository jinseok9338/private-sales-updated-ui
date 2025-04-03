/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: ["./index.html", "./app/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "spinner-spin": {
          "0%": { width: "0px", transform: "rotate(90deg)" },
          "25%": {
            width: "32px",
          },
          "100%": { width: "5px", transform: "rotate(450deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spinner-spin": "spinner-spin 1s ease infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        common: {
          white: "#FFFFFF",
          black: "#191919",
          alternate: "#F5F5F5",
          line: "#EBEBEB",
        },
        icon: {
          gray2: "#999999",
        },
        neutral: {
          100: "#F5F5F5",
          200: "#EBEBEB",
          300: "#DFDFDF",
          400: "#B1B1B1",
          500: "#999999",
          600: "#666666",
          700: "#2A2A2A",
        },
        blue: {
          100: "#F2F4FB",
          200: "#E1E6FF",
          300: "#B2C2FF",
          400: "#284EEA",
          500: "#1030B4",
          600: "#0A2491",
          700: "#071653",
        },
        red: {
          100: "#F9F0F0",
          200: "#FFE4E4",
          300: "#F59897",
          400: "#E11E1D",
          500: "#B41110",
          600: "#8F0F0E",
          700: "#690A0A",
        },
        orange: {
          100: "#FCF5EA",
          200: "#FEE8C6",
          300: "#FBCE8A",
          400: "#FFA319",
          500: "#C0790E",
          600: "#9D6209",
          700: "#644009",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        disabled: "var(--disabled)",
        placeholder: "var(--placeholder)",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        h1: [
          "48px",
          {
            fontWeight: "700",
            lineHeight: "120%",
            letterSpacing: "-0.005em",
          },
        ],
        h2: [
          "30px",
          {
            fontWeight: "600",
            lineHeight: "130%",
            letterSpacing: "-0.005em",
          },
        ],
        h3: [
          "24px",
          {
            fontWeight: "600",
            lineHeight: "135%",
            letterSpacing: "-0.005em",
          },
        ],
        h4: [
          "20px",
          {
            fontWeight: "600",
            lineHeight: "140%",
            letterSpacing: "-0.0025em",
          },
        ],
        large: [
          "18px",
          {
            fontWeight: "600",
            lineHeight: "140%",
            letterSpacing: "-0.002em",
          },
        ],
        lead: [
          "20px",
          {
            fontWeight: "400",
            lineHeight: "140%",
            letterSpacing: "0",
          },
        ],
        p: [
          "16px",
          {
            fontWeight: "400",
            lineHeight: "150%",
            letterSpacing: "0",
          },
        ],
        "p-ui": [
          "16px",
          {
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "0",
          },
        ],
        "p-ui-semibold": [
          "16px",
          {
            fontWeight: "600",
            lineHeight: "24px",
            letterSpacing: "0",
          },
        ],
        body14: [
          "14px",
          {
            fontWeight: "400",
            lineHeight: "150%",
            letterSpacing: "0",
          },
        ],
        "body14-semibold": [
          "14px",
          {
            fontWeight: "600",
            lineHeight: "150%",
            letterSpacing: "0",
          },
        ],
        body13: [
          "13px",
          {
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0",
          },
        ],
        "body13-semibold": [
          "13px",
          {
            fontWeight: "600",
            lineHeight: "20px",
            letterSpacing: "0",
          },
        ],
        subtle: [
          "14px",
          {
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0",
          },
        ],
        "subtle-semibold": [
          "14px",
          {
            fontWeight: "600",
            lineHeight: "20px",
            letterSpacing: "0",
          },
        ],
        "subtle-medium": [
          "14px",
          {
            fontWeight: "500",
            lineHeight: "20px",
            letterSpacing: "0",
          },
        ],
        small: [
          "14px",
          {
            fontWeight: "600",
            lineHeight: "16px",
            letterSpacing: "0",
          },
        ],
        "detail-12": [
          "12px",
          {
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0",
          },
        ],
        "detail-12-medium": [
          "12px",
          {
            fontWeight: "500",
            lineHeight: "20px",
            letterSpacing: "0",
          },
        ],
        labelRegular: [
          "11px",
          {
            fontWeight: "400",
            lineHeight: "16px",
            letterSpacing: "0",
          },
        ],
        "label-medium": [
          "11px",
          {
            fontWeight: "500",
            lineHeight: "16px",
          },
        ],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
};
