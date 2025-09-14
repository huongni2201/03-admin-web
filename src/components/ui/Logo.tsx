import { Box, Typography } from "@mui/material"
import Link from "next/link"
import SailingIcon from "@mui/icons-material/Sailing";

interface LogoProps {
    color?: string;
}

const Logo = ({ color = "primary"}: LogoProps) => {
    return (
        <Box sx={{}}>
            <Typography
              variant="h6"
              component={Link}
              href="/"
              color={color}
              sx={{
                textDecoration: "none",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <SailingIcon sx={{ color: color}} />
              TravelBuka
            </Typography>
          </Box>
    )
}

export default Logo