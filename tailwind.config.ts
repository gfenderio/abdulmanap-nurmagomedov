import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",

        /* ─── Stitch Design Tokens (CSS-var-driven, dark-aware) ───── */
        "surface":                    "var(--stitch-surface)",
        "surface-bright":             "var(--stitch-surface-bright)",
        "surface-dim":                "var(--stitch-surface-dim)",
        "surface-container":          "var(--stitch-surface-container)",
        "surface-container-low":      "var(--stitch-surface-container-low)",
        "surface-container-high":     "var(--stitch-surface-container-high)",
        "surface-container-highest":  "var(--stitch-surface-container-highest)",
        "surface-container-lowest":   "var(--stitch-surface-container-lowest)",
        "surface-variant":            "var(--stitch-surface-variant)",
        "surface-tint":               "var(--stitch-primary)",
        "on-surface":                 "var(--stitch-on-surface)",
        "on-surface-variant":         "var(--stitch-on-surface-variant)",
        "outline":                    "var(--stitch-outline)",
        "outline-variant":            "var(--stitch-outline-variant)",

        "on-primary":                 "var(--stitch-on-primary)",
        "primary-container":          "var(--stitch-primary-container)",
        "on-primary-container":       "var(--stitch-on-primary-container)",
        "primary-fixed":              "var(--stitch-primary-fixed)",
        "primary-fixed-dim":          "var(--stitch-primary-fixed-dim)",

        "secondary-container":        "var(--stitch-secondary-container)",
        "on-secondary-container":     "var(--stitch-on-secondary-container)",
        "on-secondary":               "#ffffff",
        "secondary-fixed":            "#ffe24c",
        "secondary-fixed-dim":        "#e2c62d",

        "tertiary":                   "var(--stitch-tertiary)",
        "tertiary-container":         "var(--stitch-tertiary-container)",
        "on-tertiary-container":      "var(--stitch-on-tertiary-container)",
        "on-tertiary":                "#ffffff",
        "tertiary-fixed":             "#ffdcc3",
        "tertiary-fixed-dim":         "#ffb77d",

        "error":                      "var(--stitch-error)",
        "error-container":            "var(--stitch-error-container)",
        "on-error":                   "#ffffff",
        "on-error-container":         "var(--stitch-on-error-container)",

        "success":                    "var(--stitch-success)",
        "success-container":          "var(--stitch-success-container)",
        "on-success":                 "#ffffff",
        "on-success-container":       "var(--stitch-on-success-container)",

        "inverse-surface":            "var(--stitch-inverse-surface)",
        "inverse-on-surface":         "var(--stitch-inverse-on-surface)",
        "inverse-primary":            "#80d1f1",

        "on-primary-fixed":           "#001f29",
        "on-primary-fixed-variant":   "#004d62",
        "on-secondary-fixed":         "#211b00",
        "on-secondary-fixed-variant":  "#524600",
        "on-tertiary-fixed":          "#2f1500",
        "on-tertiary-fixed-variant":  "#6e3900",
        "on-background":              "var(--stitch-on-surface)",

        "text-main":                  "var(--stitch-on-surface)",

        /* Brand colors (unchanged) */
        brand: { DEFAULT: '#53A6C4', hover: '#418CA8', light: '#E0F2F7' },
        accent: { DEFAULT: '#FDE047', hover: '#EAB308', foreground: "var(--accent-foreground)" },

        /* shadcn semantic tokens */
        primary: {
          DEFAULT: "var(--stitch-primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
