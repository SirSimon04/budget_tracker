import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
  Button
} from "@mui/material";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { currencyFormatter } from "../utils";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8"
  }
}));

function BudgetCard() {
  return (
    <div>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h5">Entertainment</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" color="text.secondary">
                  {currencyFormatter.format(100)} /{" "}
                  {currencyFormatter.format(120)}
                </Typography>
              </Grid>
            </Grid>
            <BorderLinearProgress
              variant="determinate"
              value={70}
              sx={{ mt: 2 }}
            />
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              sx={{
                marginLeft: "auto"
              }}
            >
              Add Expense
            </Button>
            <Button
              variant="outlined"
              sx={{
                marginLeft: "auto"
              }}
            >
              View Expenses
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}

export default BudgetCard;
