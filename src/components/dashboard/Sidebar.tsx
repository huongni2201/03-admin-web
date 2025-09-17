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

const drawerWidth = 240;

const menuItems = [
  { name: "Overview", href: "/dashboard" },
  { name: "Tours", href: "/dashboard/tours" },
  { name: "Bookings", href: "/dashboard/bookings" },
  { name: "Users", href: "/dashboard/users" },
  { name: "Reports", href: "/dashboard/reports" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
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
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.href}
            component={Link}
            href={item.href}
            selected={pathname === item.href || pathname.startsWith(item.href)}
          >
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
