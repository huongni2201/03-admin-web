"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Rating,
} from "@mui/material";

type TourCardProps = {
  image: string;
  location: string;
  title: string;
  rating: number;
  reviews: number;
  days: number;
  price: number;
};

export default function TourCard({
  image,
  location,
  title,
  rating,
  reviews,
  days,
  price,
}: TourCardProps) {
  return (
    <Card
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ height: 210, objectFit: "cover" }}
      />

      {/* Content */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack spacing={1}>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>

          <Typography
            variant="subtitle1"
            fontWeight={600}
            fontSize={16}
            lineHeight={1.6}
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {title}
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center">
            <Rating value={rating} precision={0.1} readOnly size="small" />
            <Typography variant="body2" color="text.secondary">
              ({reviews})
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            paddingTop={1}
          >
            <Typography variant="body2" color="text.secondary">
              {days} days
            </Typography>

            <Typography variant="subtitle1" fontWeight={600} color="primary">
              From ${price}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
