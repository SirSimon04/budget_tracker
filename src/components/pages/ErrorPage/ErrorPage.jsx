import React from "react";
import { ReactComponent as NotFoundSvg } from "./not_found.svg";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ErrorPage() {
  return (
    <div>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flecGrow: 1,
          minHeight: "100%"
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Typography variant="h4" color="textPrimary" align="center">
              The page you are looking for does not exist!
            </Typography>
            {/* <Typography variant="subtitle2" color="textPrimary" sx={{ mt: 8 }}>
              You either entered a wrong route or the Page encountered a
              problem. Use the navigation to get what you are looking for.
            </Typography> */}
            <Box sx={{ textAlign: "center" }}>
              <NotFoundSvg
                style={{
                  display: "inline-block",
                  //   height: "50%",
                  maxWidth: "100%",
                  width: 560
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default ErrorPage;
