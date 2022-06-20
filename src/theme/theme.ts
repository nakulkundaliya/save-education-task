import { createTheme } from '@mui/material/styles';
import ComponentsOverrides from 'theme/overrides';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

let themeOptions = {
  palette: {
    primary: {
      main: '#ff9f1c',
      light: '#ffcc00',
    },
    neutral: {
      main: '#005a76',
      light: '#2ec4b6',
      '100': '#ebeeff',
    },
  },
};

const theme = createTheme(themeOptions);
theme.components = ComponentsOverrides(theme);

export { theme };
