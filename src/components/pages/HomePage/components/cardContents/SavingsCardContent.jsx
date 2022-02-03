import { Box, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function SavingsCardContent() {
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
          2%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Since last month
        </Typography>
      </Box>
    </div>
  );
}

export default SavingsCardContent;
