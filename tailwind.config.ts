import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#fcfcfc',
          900: '#1a1a1a',
        },
        emerald: {
          600: '#10b981',
        }
      }
    },
  },
  plugins: [],
};
export default config;
