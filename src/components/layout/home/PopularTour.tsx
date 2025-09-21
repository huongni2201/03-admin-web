import TourCard from "@/components/layout/home/TourCard";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const tours = [
  {
    image: "/images/login-image-left-01.png",
    location: "Paris, France",
    title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
    rating: 4.8,
    reviews: 243,
    days: 4,
    price: 189.25,
  },
  {
    image: "/images/login-image-left-01.png",
    location: "New York, USA",
    title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
    rating: 4.8,
    reviews: 243,
    days: 4,
    price: 225,
  },
  {
    image: "/images/login-image-left-01.png",
    location: "Paris, France",
    title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
    rating: 4.8,
    reviews: 243,
    days: 4,
    price: 189.25,
  },
  {
    image: "/images/login-image-left-01.png",
    location: "New York, USA",
    title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
    rating: 4.8,
    reviews: 243,
    days: 4,
    price: 225,
  },
];

export default function PopularTour() {
  return (
    <Box>
      <Container>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" component="h3" fontWeight={600}>
                Find Popular Tours
            </Typography>
            <Button
                  component={Link}
                  href="/auth/register"
                  variant="outlined"
                  color="primary"
                >
                  See All
                </Button>
        </Stack>
        <Grid container spacing={3} mt={4}>
          {tours.map((tour, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
              <TourCard {...tour} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
