//const { colors } = require('tailwindcss/defaultTheme') // import default colours
module.exports = {
  purge: {
    content: [
      "./src/**/*.html",
      "./src/**/*.vue",
      "./src/**/*.jsx",
      // etc.
    ],
    mode: "all",
  },
  plugins: [
    require('@tailwindcss/ui'), // use tailwindui
    require('@tailwindcss/typography') // use typography
  ],
  // This is to disable the opacity that genereates a lot of extra css classes
  corePlugins: {
    divideOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    placeholderOpacity: false,
    textOpacity: false,
  },
  theme: {
    /* This will overwrite all "colors" configuration to only 
            render default green and white
        
    colors: {
      indigo: {
        lighter: '#b3bcf5',
        default: '#5c6ac4',
        dark: '#202e78',
      },
      blue: '#007ace',
      red: '#de3618',
    },*/
    extend: {
      /** This will extend the current "spacing" configuration
            *  and add a -7 to all spacing options     
            spacing: {
                '7': '1.75rem',
            },
             */
    },
  },
};
