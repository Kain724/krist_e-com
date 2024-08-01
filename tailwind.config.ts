import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,css,scss}',
  ],
  theme: {
    colors: {
      'pri-bg-light': '#ffffff',
      'sec-bg-light': '#fc8019',
      'ter-bg-light': '#808080',

      'pri-text-light': '#ffffff',

      'pri-dark': '#000000',
      'pri-bg-dark': '#000000',
      // 'sec-bg-dark': '#fc8019',
      // 'ter-bg-dark': '#808080',
    },
  },
  plugins: [],
}
export default config

// Primary
// Secondary
// Tertiary
// Quaternary
// Quinary
// Senary
// Septenary
// Octonary
// Novenary
// Denary
