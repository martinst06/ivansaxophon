const config = {
  plugins: [
    ["@tailwindcss/postcss", {
      // Explicitly disable lightningcss and use PostCSS instead
      lightningcss: false,
      // Add fallback configuration
      optimize: false,
    }],
  ],
};

export default config;
