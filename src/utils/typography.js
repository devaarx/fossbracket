import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.78,
  headerFontFamily: ['Open Sans', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'Georgia', 'serif'],
  headerGray: 10,
  bodyGray: 10,
  headerWeight: 700,
  bodyWeight: 300,
  boldWeight: 700,
  overrideStyles: () => ({
    a: {
      fontFamily: [
        'Open Sans',
        'Helvetica Neue',
        'Segoe UI',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(','),
    },
  }),
});

export default typography;
