import { Box, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function BudgetCardContent() {
  return (
    <div>
      <Box
        sx={{
          pt: 2,
          display: "flex",
          alignItems: "center"
        }}
      >
        <ArrowDownwardIcon color="error" />
        <Typography
          color="error"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          12%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Since last month
        </Typography>
      </Box>
    </div>
  );
}

export default BudgetCardContent;
