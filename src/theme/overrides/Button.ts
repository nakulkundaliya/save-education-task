import { alpha } from '@mui/material';

export default function Button(theme: any) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 18,
          boxShadow: 'none',
          fontWeight: 'bold',
          textTransform: 'capitalize',
          padding: theme.spacing(1, 6),
          borderRadius: theme.spacing(1),
          color: theme.palette.neutral.main,
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          backgroundColor: theme.palette.primary.light,
          '&:hover': {
            backgroundColor: alpha(theme.palette.primary.light, 0.9),
          },
        },
      },
    },
  };
}
