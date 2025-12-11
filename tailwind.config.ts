import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette LEOVA Systems - basée sur le logo officiel
        leova: {
          dark: '#0f2a2a',      // Fond très sombre
          base: '#1a3d3d',      // Fond principal
          accent: '#2dd4bf',    // Turquoise accent (jaguar)
          light: '#5eead4',     // Turquoise clair
          muted: '#4a7c7c',     // Gris-vert pour texte secondaire
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

