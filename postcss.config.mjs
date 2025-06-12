const config = {
  plugins: [
    ["@tailwindcss/postcss", {
      // Force use of PostCSS instead of LightningCSS
      lightningcss: false,
    }],
  ],
};

export default config;
