'use client'

import Sidebar from "@/components/layout/dashboard/Sidebar";
import { Box, Grid, Toolbar } from "@mui/material";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const drawerWidth: number = 240;

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box sx={{ width: drawerWidth, flexShrink: 0 }}>
        <Sidebar drawerWidth={drawerWidth}/>
      </Box>

      {/* Nội dung */}
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Grid container spacing={2}>
          <Grid size={9}>
            <Toolbar />
            {children}
          </Grid>

          <Grid size={3}>
            This is right bar
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
