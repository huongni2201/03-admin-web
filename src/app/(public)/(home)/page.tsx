"use client";

import HeroSession from "@/components/layout/home/Hero";
import PopularTour from "@/components/layout/home/PopularTour";
import SaleOff from "@/components/layout/home/SaleOff";
import { Box, Stack } from "@mui/material";

export default function HomePage() {
  return (
    <Stack spacing={8} alignItems="center" textAlign="center">
      <HeroSession />

      <PopularTour />

      <SaleOff />
    </Stack>
  );
}
