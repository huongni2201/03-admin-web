"use client";

import HeroSession from "@/components/home/hero";
import { Stack } from "@mui/material";

export default function HomePage() {
  return (
    <Stack spacing={3} alignItems="center" textAlign="center">
      <HeroSession />
    </Stack>
  );
}
