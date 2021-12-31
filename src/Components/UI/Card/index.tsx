import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { ReactElement } from 'react';

type Props = {
  children: React.ReactNode;
};

export const Card = ({ children }: Props): ReactElement => {
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        {children}
      </Paper>
    </Grid>
  );
};
