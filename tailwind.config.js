const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
    enabled: process.env.NODE_ENV === 'production',
    // classes that are generated dynamically, e.g. `rounded-${size}` and must
    // be kept
    safeList: [],
    content: [
      './index.html',
      './src/**/*.{vue,js,ts}',
      // etc.
    ],
    purge: ['./src/**/*.vue',],
  theme: {
    backgroundImage: {
      'background-home-desktop': "url('/assets/home/background-home-desktop.jpg')",
      'background-home-mobile': "url('/assets/home/background-home-mobile.jpg')",
      'background-home-tablet': "url('/assets/home/background-home-tablet.jpg')"
    },
    // screens: {
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    //   '2xl': '1536px',
    // },
    extend: {
      fontFamily: {
        'barlow': ['"Barlow Condensed"'],
        'bellefair': ['"Bellefair"'],
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: {
    applyComplexClasses: true,
  },
}