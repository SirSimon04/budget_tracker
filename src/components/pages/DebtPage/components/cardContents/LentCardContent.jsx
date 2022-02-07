import { Box, Typography } from "@mui/material";

function LentCardContent() {
  return (
    <div>
      <Box
        sx={{
          pt: 2,
          display: "flex",
          alignItems: "center"
        }}
      >
        {/* <ArrowDownwardIcon color="error" /> */}
        <Typography
          //   color="error"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          4.2%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          of budget
        </Typography>
      </Box>
    </div>
  );
}

export default LentCardContent;
