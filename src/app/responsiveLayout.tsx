"use client";

import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ResponsiveLayout = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: isSmallScreen
          ? "1fr"  
          : "minmax(7rem,1fr) minmax(0, 40rem) minmax(5rem,1fr)",  
        gap: 1,
        marginTop: 3,
        paddingX: 3,
      }}
    >
      <Box
        sx={{
          gridColumn: isSmallScreen ? "span 1" : "2 / span 1",
          height: "100vh",
          backgroundColor: "#f5f5f5",
          outline: "1px solid #ccc",
        }}
      />
      <Box
        sx={{
          height: "70vh",
          backgroundColor: "#f5f5f5",
          border: "1px solid #ccc",
        }}
      />
    </Box>
  );
};

export default ResponsiveLayout;
