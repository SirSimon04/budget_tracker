import React from "react";
import Menu from "./Menu/Menu";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

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
          <CategoryPage />
        </Menu>
      </ThemeProvider>
    </div>
  );
}

export default App;
