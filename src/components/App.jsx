import React from "react";
import Menu from "./Menu/Menu";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
