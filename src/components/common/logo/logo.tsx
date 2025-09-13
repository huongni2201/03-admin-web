import { Box, Typography } from "@mui/material"
import Link from "next/link"
import SailingIcon from "@mui/icons-material/Sailing";

const Logo = () => {
    return (
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
    )
}

export default Logo