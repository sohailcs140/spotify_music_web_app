export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        
        "variant-primary": "var(--color-variant-primary)",
        "variant-secondary": "var(--color-variant-secondary)",
        "primary":"var(--color-primary)",
        "secondary":"var(--color-secondary)",
        "color-primary":"var(--font-color-primary)",
        "color-dim":"var(--font-color-dim)",
        "color-light-dim":"var(--font-color-light-dim)",
       
      },
      fontFamily:{
        "primary":"var(--font-primary)",
      },
      boxShadow: {
        'gray': 'inset 4px 0px 12px -6px rgba(107,107,107,0.42)', 
      },
    
    },
  },
  plugins: [],
}
