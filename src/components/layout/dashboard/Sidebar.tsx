"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

const menuItems = [
  { name: "Overview", url: "/dashboard" },
  { name: "Tours", url: "/dashboard/tours" },
  { name: "Bookings", url: "/dashboard/bookings" },
  { name: "Users", url: "/dashboard/users" },
  { name: "Reports", url: "/dashboard/reports" },
  { name: "Settings", url: "/dashboard/settings" },
];

function isActive(pathname: string, href: string) {
  if (href === "/dashboard") {
    return pathname === "/dashboard";
  }
  return pathname.startsWith(href);
}

type SidebarProp = {
  drawerWidth: number;
};

export default function Sidebar({ drawerWidth }: SidebarProp) {
  const pathname = usePathname();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Travel Admin
        </Typography>
      </Toolbar>
      <List sx={{ padding: 3}}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.url}
            component={Link}
            href={item.url}
            selected={isActive(pathname, item.url)}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "primary.main",
                color: "white",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "primary.main",
              },
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white",
              },
              mt: 1,
              borderRadius: "8px",
              overflow: "hidden"
            }}
          >
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
