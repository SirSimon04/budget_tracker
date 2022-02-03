import { Box, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function IncomeCardContent() {
  return (
    <div>
      <Box
        sx={{
          pt: 2,
          display: "flex",
          alignItems: "center"
        }}
      >
        <ArrowUpwardIcon color="success" />
        <Typography
          color="success.main"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          8%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Since last month
        </Typography>
      </Box>
    </div>
  );
}

export default IncomeCardContent;
