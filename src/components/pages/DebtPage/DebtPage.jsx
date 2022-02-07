import React from "react";
import Grid from "@mui/material/Grid";
import DebtCard from "./components/DebtCard";
import { currencyFormatter } from "../../../utils";
import LentCardContent from "./components/cardContents/LentCardContent";
import BorrowedCardContent from "./components/cardContents/BorrowedCardContent";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import DebtTable from "./components/DebtTable";

function DebtPage() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <DebtCard
            name="Lent"
            title={currencyFormatter.format("40")}
            icon={<CreditScoreIcon />}
            iconBg="success.main"
          >
            <LentCardContent />
          </DebtCard>
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <DebtCard
            name="Borrowed"
            title={currencyFormatter.format("139")}
            icon={<CreditScoreIcon />}
            iconBg="error.main"
          >
            <BorrowedCardContent />
          </DebtCard>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 5 }}>
        <Grid item xs={12}>
          <DebtTable />
        </Grid>
      </Grid>
    </div>
  );
}

export default DebtPage;
