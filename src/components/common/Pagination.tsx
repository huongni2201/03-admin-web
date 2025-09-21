"use client";

import React from "react";
import { Pagination, PaginationItem } from "@mui/material";
import Link from "next/link";
import { usePaginationParams } from "@/hooks/usePaginationParams";

interface AppPaginationProps {
  totalPages: number;
}

export default function AppPagination({ totalPages }: AppPaginationProps) {
  const { page, queryParams } = usePaginationParams();

  return (
    <Pagination
      page={page}
      count={totalPages}
      sx={{
        mt: 3,
        display: "flex",
        justifyContent: "center",
      }}
      color="primary"
      renderItem={(item) => {
        const search = new URLSearchParams({
          ...queryParams,
          page: item.page?.toString() || "1",
        }).toString();

        return (
          <PaginationItem
            component={Link}
            href={`?${search}`}
            {...item}
            sx={{
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white",
                opacity: "0.5",
              },
            }}
          />
        );
      }}
    />
  );
}
