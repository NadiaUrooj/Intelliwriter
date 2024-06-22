// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".hover-custom": {
            "@apply hover:cursor-pointer hover:decoration-2 hover:underline hover:underline-offset-8 hover:decoration-[#af4db7]":
              {},
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
