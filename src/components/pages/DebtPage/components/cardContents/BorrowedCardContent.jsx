import React from "react";
import { Box, Typography } from "@mui/material";

function BorrowedCardContent() {
  return (
    <div>
      <Box
        sx={{
          pt: 2,
          display: "flex",
          alignItems: "center"
        }}
      >
        <Typography
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          1.2%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          of budget
        </Typography>
      </Box>
    </div>
  );
}

export default BorrowedCardContent;
