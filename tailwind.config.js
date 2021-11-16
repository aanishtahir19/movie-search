module.exports = {
  purge: {
    enabled: true,
    content:[
    './src/**/*.html',
    './src/**/*.css',
    './src/**/*.js',
    './src/index.js'
  ]},
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors:{
        bg:"#0A0A0A",
        cardoverlay:"#20202087"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
