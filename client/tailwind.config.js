/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BDBDBD',  // Varsayılan ton   
        },
        secondary: {
          DEFAULT: '#2793F2',  // Varsayılan ton    
        },
        mycolor3: {
          DEFAULT: '#22A2F2',  // Varsayılan ton   
        },
        mycolor4: {
          DEFAULT: '#22B7F2',  // Varsayılan ton   
        },
        mycolor5: {
          DEFAULT: '#0D0D0D',  // Varsayılan ton   
        }
      }
    },
  },
  plugins: [],


}
