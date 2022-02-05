import React from "react";
import Menu from "./Menu/Menu";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import DebtPage from "./pages/DebtPage/DebtPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ExpensePage from "./pages/ExpensePage/ExpensePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

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
            <Route path="/expenses" element={<ExpensePage />} />
            <Route path="/debts" element={<DebtPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
