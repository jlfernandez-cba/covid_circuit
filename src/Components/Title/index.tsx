import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';

interface TitleProps {
  children?: React.ReactNode;
}

export const Title = ({ children }: TitleProps): ReactElement => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {children}
    </Typography>
  );
};
