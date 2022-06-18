module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  //will remove quotes around some of the tags if not ignored, weird
  // prettier-ignore
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
        fontSize: {
            'base': "clamp(1rem, 1.1vw + 0.5rem, 1.2rem);",
            'lg': "clamp(1rem, 1.3vw + 0.4rem, 1.25rem);",
            'xl': "clamp(1.25rem, 1.7vw + 0.5rem, 1.563rem);",
            "2xl": "clamp(1.563rem, 2.1vw + 0.7rem, 1.953rem);",
            "3xl": "clamp(1.953rem, 2.6vw + 0.8rem, 2.441rem);",
            "4xl": "clamp(1.8rem, 6.7vw - 1.1rem, 3.052rem);;",
            "5xl": "clamp(3.052rem, 4.1vw + 1.3rem, 3.819rem);",
            "6xl": "clamp(3.819rem, 5.1vw + 1.6rem, 4.773rem);",
            "12xl": "clamp(5.5rem, 20.3vw - 3.4rem, 9.313rem);",
        },
        extend: {
            colors: {
                darkmode_black: "#121212",
                darkmode_black2: "#1C1C21",
                darkmode_black3: "#26262C",
                darkmode_black4: "#2F2F37",
                darkmode_black5: "#383842",
                darkmode_black6: "#42424D",
                darkmode_black7: "#4B4B58",
                darkmode_black8: "#545463",

                shade_darker_white: "#F4F4F6",
                transparent_black: "rgba(0, 0, 0, 0.8)",

                accent_yellow: "#E19F54",
                accent_yellow2: "#E7B174",
                accent_yellow3: "#EABB85",

                accent_red: "#C56844",
                accent_red2: "#CA7553",

                accent_blue: "#448FA3",
            },
            fontFamily: {
                bodyFont: "futura-pt, sans-serif",
                displayFont: "boucherie-block, sans-serif",
            },
            animation: {
                'fade-in': 'modalAppear 0.2s linear',
                'fade-out': 'modalDisappear 0.2s linear',
              },
            keyframes: {
                modalAppear: {
                  'from': {opacity: "0" },
                  'to': {opacity: "1" },
                },

                modalDisappear: {
                    'from': {opacity: "1" },
                    'to': {opacity: "0" },
                  }
              }
        },
    },
  plugins: [require("@tailwindcss/forms")],
};
