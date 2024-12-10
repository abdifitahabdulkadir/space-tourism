module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      backgroundImage: {
        mobileBg: "url('./background-home-mobile.jpg')",
        tabletBg: "url('./background-home-tablet.jpg')",
        desktotopBg: "url('./background-home-desktop.jpg')",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"], // Barlow font
        barlowCondensed: ["Barlow Condensed", "sans-serif"], // Barlow Condensed font
        bellefair: ["Bellefair", "serif"], // Bellefair font
      },
      screens: {
        xs: "480px", // Custom extra-small breakpoint
        sm: "640px", // Tailwind default
        md: "768px", // Tailwind default
        lg: "1024px", // Tailwind default
        xl: "1280px", // Tailwind default
        "2xl": "1536px", // Tailwind default
      },
    },
  },
  plugins: [],
};
