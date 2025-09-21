"use client";

import DashboardHeader from "@/components/layout/dashboard/DashboardHeader";
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
        <Sidebar drawerWidth={drawerWidth} />
      </Box>

      {/* Nội dung */}
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <DashboardHeader />
        {children}
      </Box>
    </Box>
  );
}
