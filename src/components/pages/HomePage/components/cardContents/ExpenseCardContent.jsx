import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

function ExpenseCardContent() {
  return (
    <div>
      <Box
        sx={{
          pt: 3,
          alignItems: "center"
        }}
      >
        <LinearProgress variant="determinate" value={79} />
      </Box>
    </div>
  );
}

export default ExpenseCardContent;
