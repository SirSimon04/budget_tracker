import React from "react";
import { Typography } from "@mui/material";
import Menu from "./Menu";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import BudgetCard from "./BudgetCard";
import { Grid } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Menu>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={4}>
              <BudgetCard />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <BudgetCard />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <BudgetCard />
            </Grid>
          </Grid>
        </Menu>
      </ThemeProvider>
    </div>
  );
}

export default App;
