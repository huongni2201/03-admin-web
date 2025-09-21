import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SaleOff() {
  return (
    <Stack
      direction="row"
      sx={{
        width: "1500px",
        borderRadius: "16px",
        overflow: "hidden",
        backgroundImage: "url('/images/sale-off-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        width="50%"
        display="flex"
        flexDirection="column"
        textAlign="left"
        justifyContent="center"
        alignItems="flex-start"
        padding={15}
      >
        <Typography variant="h3">
          Grab up to{" "}
          <Typography variant="h3" component="span" color="primary">
            35% off
          </Typography>{" "}
          <br />
          on your favorite Destination
        </Typography>
        <Typography variant="body1" mt={2}>
          Limited time offer, don&apos;t miss the opportunity
        </Typography>

        <Button
          component={Link}
          href="/auth/register"
          variant="contained"
          color="primary"
          sx={{ marginTop: 3 }}
        >
          Book now
        </Button>
      </Box>

      <Box
        sx={{
          width: "50%",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src="/images/sale-off-image.png"
          alt="Sale off"
          sx={{
            height: "100%",
            objectFit: "cover",
          }}
        />

        <Box
          component="img"
          src="/images/wave-decoration.png"
          alt="Sale off"
          sx={{
            height: "100%",
            position: "absolute",
            left: "0",
            top: "0"
          }}
        />
      </Box>
    </Stack>
  );
}
