import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function BoxSx() {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <Typography variant="h2">Examples &rarr;</Typography>
        <Typography paragraph>
          Discover and deploy boilerplate example Next.js projects.
        </Typography>
    </Box>
  );
}
