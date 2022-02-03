import React from "react";
import HomePageCard from "./components/HomePageCard";
import Grid from "@mui/material/Grid";
import MoneyIcon from "@mui/icons-material/Money";
import { currencyFormatter } from "../../../utils";
import BudgetCardContent from "./components/cardContents/BudgetCardContent";

function HomePage() {
  return (
    <div>
      <Grid container spacing={0} />
      <HomePageCard
        name="Budget"
        title={currencyFormatter.format("798")}
        icon={<MoneyIcon />}
        iconBg="error.main"
      >
        <BudgetCardContent />
      </HomePageCard>
    </div>
  );
}

export default HomePage;
