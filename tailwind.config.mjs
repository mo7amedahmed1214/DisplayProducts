/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {

        sm: '590px',
        // => @media (min-width: 640px) 

        md: '708px',
        // => @media (min-width: 768px) 

        lg: '944px',
        // => @media (min-width: 1024px) 

        xl: '1200px',
        // => @media (min-width: 1280px) 

        '2xl': '1336px',
        // => @media (min-width: 1536px) 

      },


    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#fbe8e9",
          100: "#f8d2d3",
          200: "#f4bbbd",
          300: "#f1a4a7",
          400: "#ed8e92",
          500: "#e24950",
          600: "#e24950",
          700: "#df333a",
          800: "#db1c24",
         
      
        }


      },
    },
  },
  plugins: [],
};
