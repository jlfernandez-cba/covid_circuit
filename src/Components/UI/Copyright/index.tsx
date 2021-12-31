import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';

export const Copyright = (): ReactElement => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ pt: 4 }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
