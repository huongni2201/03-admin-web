"use client";

import React from "react";
import { TextField, Button, Stack } from "@mui/material";

export default function UserFilter() {
  return (
    <Stack direction="row" spacing={2}>
      <TextField label="Search user" variant="outlined" size="small" />
      <TextField label="Role" variant="outlined" size="small" />
      <Button variant="contained" color="primary">
        Filter
      </Button>
    </Stack>
  );
}
