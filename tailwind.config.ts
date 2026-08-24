import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        esports: {
          bg: '#0a0614',
          card: '#120e20',
          panel: '#1a1530',
          border: '#2a2345',
        },
        neon: {
          purple: '#a855f7',
          pink: '#ec4899',
          cyan: '#22d3ee',
          green: '#22c55e',
          gold: '#eab308',
          red: '#ef4444',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        neon_glow: {
          '0%, 100%': { textShadow: '0 0 5px currentColor, 0 0 10px currentColor' },
          '50%': { textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor' },
        },
      },
      animation: {
        neon_glow: 'neon_glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
