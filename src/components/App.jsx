import React from "react";
import { Typography } from "@mui/material";
import Menu from "./Menu";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import BudgetCard from "./BudgetCard";

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
          <BudgetCard />
        </Menu>
      </ThemeProvider>
    </div>
  );
}

export default App;
