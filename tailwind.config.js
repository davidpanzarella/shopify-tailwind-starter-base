module.exports = {
  content: [
    './layout/*.liquid',
    './templates/**/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-base-font-size'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  prefix: 'tw-',
  theme: {
    color: {
      black: '#19181D',
      bone: '#D6CABA',
      orange: '#F2A100',
    },
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      x2lg: '1920px',
      xlg: '1440px',
      pageMaxWidth: '1440px',
    },
  },
};
