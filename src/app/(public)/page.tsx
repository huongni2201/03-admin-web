"use client";

import HeroSession from "@/features/home/components/hero";
import PopularTour from "@/features/home/components/popular-tour";
import SaleOff from "@/features/home/components/sale-off";
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
