import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactElement, ReactNode, useMemo } from 'react';
import { useAppSelector } from '../../redux';

const getTheme = (mode: 'dark' | 'light') =>
  createTheme({
    palette: {
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
      mode,
    },
  });

type Props = {
  children: ReactNode;
};

export const AppProvider = ({ children }: Props): ReactElement => {
  const darkMode = useAppSelector((state) => state.ui.darkMode);
  const mode = darkMode ? 'dark' : 'light';
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {children}
      </Box>
    </ThemeProvider>
  );
};
