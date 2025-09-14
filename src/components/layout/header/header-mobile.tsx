import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "@/components/ui/Logo";

const HeaderMobile = () => {
  return (
    <Box display={{ xs: "block", lg: "none" }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Logo />

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <MenuIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderMobile;
