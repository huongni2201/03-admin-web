import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import Link from "next/link";
import SailingIcon from "@mui/icons-material/Sailing";

const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "white", color: "black" }}
    >
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{}}>
            <Typography
              variant="h6"
              component={Link}
              href="/"
              color="primary"
              sx={{
                textDecoration: "none",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <SailingIcon color="primary" />
              TravelBuka
            </Typography>
          </Box>

          {/* Menu */}
          <Box sx={{ display: "flex", gap: 2, fontWeight: "500" }}>
            <Button component={Link} href="/destinations" color="inherit">
              Destinations
            </Button>
            <Button component={Link} href="/booking" color="inherit">
              Booking
            </Button>
            <Button component={Link} href="/about" color="inherit">
              About
            </Button>
          </Box>

          {/* Auth */}
          <Box sx={{ display: "flex", gap: 1 }}>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
