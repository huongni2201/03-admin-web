"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Tour } from "@mui/icons-material";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import GroupIcon from "@mui/icons-material/Group";

const menuItems = [
  { name: "Overview", url: "/dashboard", icon: HomeIcon },
  { name: "Tours", url: "/dashboard/tours", icon: Tour },
  { name: "Bookings", url: "/dashboard/bookings", icon: AddToPhotosIcon },
  { name: "Users", url: "/dashboard/users", icon: GroupIcon },
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
      <List sx={{ padding: 3 }}>
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
                "& .MuiListItemIcon-root": { color: "white" },
              },
              "&.Mui-selected:hover": {
                backgroundColor: "primary.main",
              },
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white",
                "& .MuiListItemIcon-root": { color: "white" },
              },
              mt: 1,
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            {item.icon && (
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <item.icon />
              </ListItemIcon>
            )}
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
