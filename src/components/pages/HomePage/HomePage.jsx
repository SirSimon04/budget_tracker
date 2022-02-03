import React from "react";
import HomePageCard from "./components/HomePageCard";
import Grid from "@mui/material/Grid";
import MoneyIcon from "@mui/icons-material/Money";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { currencyFormatter } from "../../../utils";
import BudgetCardContent from "./components/cardContents/BudgetCardContent";
import ExpenseCardContent from "./components/cardContents/ExpenseCardContent";
function HomePage() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <HomePageCard
            name="Budget"
            title={currencyFormatter.format("798")}
            icon={<MoneyIcon />}
            iconBg="error.main"
          >
            <BudgetCardContent />
          </HomePageCard>
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <HomePageCard
            name="Expenses"
            title="78.9%"
            icon={<AccountBalanceWalletIcon />}
            iconBg="primary.main"
          >
            <ExpenseCardContent />
          </HomePageCard>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
