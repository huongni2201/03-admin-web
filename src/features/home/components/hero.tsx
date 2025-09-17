"use client";

import { Typography, Button, Stack, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function HeroSession() {
  return (
      <Box
        sx={{
          width: "100%",
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          src="/images/home-banner-your-world-of-joy.png"
          alt="Travel Banner"
          width={1920}
          height={600}
          style={{ width: "100%", height: "600px", objectFit: "cover" }}
          priority
        />

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <Box>
            <Typography variant="h3" component="h1">
              Your world of joy
            </Typography>
            <Typography
              sx={{
                mt: 1,
                opacity: 0.8,
              }}
            >
              From local escapes to far-flung adventures, find what makes you
              happy anytime, anywhere
            </Typography>

            <Stack direction="row" sx={{ display: "flex", justifyContent: "center", mt: 3}}>
              <Button variant="contained" component={Link} href="/booking">
                Go to Booking
              </Button>
            </Stack>
          </Box>
        </Box>

        <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "100vw",
          height: 40
        }}
      >
        <Image
          src="/images/wave-decoration-vertical.png"
          alt="Decoration"
          fill
          style={{ objectFit: "contain" }}
        />
      </Box>
      </Box>
  );
}
