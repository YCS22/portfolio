module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        grey: '#D2DAE2',
        blue: '#2C2C54',
        white: '#FFFFFF',
        whiteblue: '#EEEEEE',
        wisteria: '#EEEEEE',
        midnigthblue: '#2c3e50',
        sunflower: '#00ADB5',
        turquoise: '#00ADB5',
        pomegranate: '#c0392b',
        asbestos: '#3B3B98',
        electromagnetic: '#222831',
        hint: '#393E46',
        fueltown: '#576574',
        black: '#000000',
        aurora: '#6a89cc',
        softblue: '#EEEEEE',
        bluebell: '#341f97',
      },
    },

    fontSize: {
      xs: '.700rem',
      sm: '.875rem',
      md: '1rem',
      xl: '1.25rem',
      '2xl': '1.75rem',
    },

    extend: {
      height: {
        xs: '6px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xlg: '100px',
        mxl: '150px',
        xl: '160px',
        '2xl': '250px',
        '3xl': '350px',
      },
      width: {
        xs: '6px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xlg: '100px',
        mxl: '150px',
        xl: '200px',
        '2xl': '250px',
      },
      rounded: {
        '5xl': '100px',
      },
      spacing: {
        '50px': '100px',
        '200px': '100px',
        '70px': '70px',
      },
    },
  },
  variants: {
    extend: {
      screens: {
        xs: '280px',

        sm: '640px',
        md: '780px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
