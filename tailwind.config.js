module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        grey: '#D2DAE2',
        blue: '#2C2C54',
        white: '#FFFFFF',
        whiteblue: '#F2F4F6',
        wisteria: '#F2F4F6',
        midnigthblue: '#2c3e50',
        sunflower: '#1EE3CF',
        turquoise: '#6B48FF',
        pomegranate: '#c0392b',
        asbestos: '#3B3B98',
        electromagnetic: '#0D3F67',
        hint: '#353b48',
        fueltown: '#576574',
        black: '#000000',
        aurora: '#6a89cc',
        softblue: '#1EE3CF',
        bluebell: '#341f97',
      },
    },

    fontSize: {
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
