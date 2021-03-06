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
import { currencyFormatter } from "../../../../utils";
import AddButton from "./AddButton";

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

function BudgetCard({ category, current, max }) {
  const MIN = 0;
  const normalise = value => (value - MIN) * 100 / (max - MIN);

  return (
    <div>
      <Box sx={{ minWidth: 275 }}>
        <Card>
          <CardContent>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h5">{category}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" color="text.secondary" fontSize={20}>
                  {currencyFormatter.format(current)} /{" "}
                  {currencyFormatter.format(max)}
                </Typography>
              </Grid>
            </Grid>
            <BorderLinearProgress
              variant="determinate"
              value={normalise(current)}
              sx={{ mt: 2 }}
            />
          </CardContent>
          <CardActions>
            <AddButton />
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
