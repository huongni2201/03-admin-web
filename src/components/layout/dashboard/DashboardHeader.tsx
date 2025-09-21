"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Stack,
  Avatar,
  TextField,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ClearIcon from "@mui/icons-material/Clear";

export default function DashboardHeader() {
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={1}
      sx={{ px: 3, bgcolor: "background.paper" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold" color="primary">
          Admin Dashboard
        </Typography>

        <Stack direction="row" spacing={3} alignItems="center">
          {/* Search box */}
          <TextField
            size="small"
            placeholder="Search…"
            variant="outlined"
            sx={{ minWidth: 250 }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          {/* Notifications */}
          <IconButton color="primary">
            <NotificationsIcon />
          </IconButton>

          <Divider orientation="vertical" flexItem />

          {/* User info */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Typography variant="body1" fontWeight={500}>
              Admin
            </Typography>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
