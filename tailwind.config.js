module.exports = {
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  prefix: 'tw-',
  theme: {
    fontSize: {
      base: '16px',
    },
    extend: {
      //   fontFamily: {
      //     heading: 'var(--font-heading-family)',
      //   },
    },
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },
    color: {
      black: '#000000',
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-base-font-size'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
