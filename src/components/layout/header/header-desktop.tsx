"use client";

import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import Link from "next/link";
import React from "react";
import { ROUTE_LIST } from "./route";
import MuiLink from "@mui/material/Link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";

const HeaderDesktop = () => {
    const pathname = usePathname();


  return (
    <Box display={{ xs: "none", lg: "block", borderBottom: "1px solid #e2e2e2ff" }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Container>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Logo />

            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              {/* Navbar */}
              <Box sx={{ display: "flex", gap: 1 }}>
                {ROUTE_LIST.map((route) => (
                  <MuiLink
                    key={route.path}
                    component={Link}
                    href={route.path}
                    sx={{ ml: 2, fontWeight: 700 }}
                    className={clsx({ active: pathname === route.path })}
                  >
                    {route.label}
                  </MuiLink>
                ))}
              </Box>

              {/* Auth */}
              <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 1 }}>
                <Button
                  component={Link}
                  href="/auth/login"
                  variant="outlined"
                  color="primary"
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  href="/auth/register"
                  variant="contained"
                  color="primary"
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default HeaderDesktop;
