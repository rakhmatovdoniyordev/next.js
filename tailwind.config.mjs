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
      padding: "16px",
      screens: {
        sm: '690px',
        md: '790px',
        lg: '970px',
        xl: '1100px',
        '2xl': '1280px'
      }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        footer: 'url(/footer.png)',
        company: 'url(/company.png)',
        company2: 'url(/company2.png)'
      }
    },
  },
  plugins: [],
};
