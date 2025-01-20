"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white", color: "black" }}>
      <Toolbar
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr minmax(0, 40rem) 1fr",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography variant="h6" sx={{ w: "4rem", whiteSpace: "nowrap" }}>
          Brand Name
        </Typography>

        <Box
          sx={{
            maxWidth: "40rem",
            position: "relative",
            display: isSmallScreen ? "none" : "flex",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            sx={{ flexGrow: 1 }}
          />
          <IconButton color="primary" sx={{ position: "absolute", right: "0" }}>
            <SearchIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar sx={{ bgcolor: "blue" }}>J</Avatar>
          <Typography
            variant="body1"
            sx={{ display: isSmallScreen ? "none" : "" }}
          >
            John
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
