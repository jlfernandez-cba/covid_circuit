import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { ReactElement } from "react";
import { Screen } from "../../Components/UI/Screen";

export const Dashboard = (): ReactElement => {
  return (
    <Screen>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240
          }}
        >
          {/* <Chart /> */}
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240
          }}
        >
          {/* <Deposits /> */}
        </Paper>
      </Grid>
      {/* Grid */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>{/* <RecentOrders /> */}</Paper>
      </Grid>
    </Screen>
  );
};
