/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      extend: {
        animation: {
          shake: 'shake 0.4s ease-in-out',
        },
        keyframes: {
          shake: {
            '0%, 100%': { transform: 'translateX(0)' },
            '25%': { transform: 'translateX(-5px)' },
            '75%': { transform: 'translateX(5px)' },
          }
        }
      },
      colors: {
        background: "#FFFFFF",
        primary: {
          DEFAULT: "#000080",
          dark: "#1E40AF",
          light: "#3B82F6",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#0ea5e9",
          dark: "#0284C7",
          light: "#38BDF8",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#edcdae",
          foreground: "hsl(var(--accent-foreground))",
        },
        beige: {
          DEFAULT: "#edcdae",
        },
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        raleway: ['var(--font-raleway)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionDuration: {
        "5000": '5000ms'
      },
      backgroundImage: {
        "ai-image":
          "url('https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1280')",
        "parent-bg":
          "url('https://images.pexels.com/photos/935951/pexels-photo-935951.jpeg?auto=compress&cs=tinysrgb&w=1280')",
        "footer-texture": "url('/img/footer-texture.png')",
        "blob-small": "url('/blob.svg')"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
