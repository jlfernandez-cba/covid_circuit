import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ReactElement } from "react";
import { Screen } from "../../Components/UI/Screen";

export const NotFound = (): ReactElement => {
  return (
    <Screen>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            404 | Not Found
          </Typography>
        </Paper>
      </Grid>
    </Screen>
  );
};
