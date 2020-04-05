import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.78,
  headerFontFamily: ['Merriweather', 'Georgia', 'serif'],
  bodyFontFamily: [
    'SF Pro Display',
    '-apple-system',
    'BlinkMacSystemFont',
    'San Francisco',
    'Helvetica Neue',
    'Helvetica',
    'Ubuntu',
    'Roboto',
    'Noto',
    'Segoe UI',
    'Arial',
    'sans-serif',
  ],
  headerGray: 10,
  bodyGray: 10,
  headerWeight: 700,
  bodyWeight: 300,
  boldWeight: 700,
});

export default typography;
