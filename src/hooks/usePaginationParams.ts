"use client";

import {
  DEFAULT_PAGE,
  DEFAULT_SORT_BY,
  DEFAULT_SORT_TYPE,
  TABLE_PAGE_SIZE,
} from "@/constants";
import { useSearchParams } from "next/navigation";

export function usePaginationParams(defaults?: {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortType?: "asc" | "desc";
}) {
  const searchParams = useSearchParams();

  const page = parseInt(
    searchParams.get("page") || defaults?.page?.toString() || DEFAULT_PAGE.toString(),
    10
  );

  const pageSize = parseInt(
    searchParams.get("pageSize") ||
      defaults?.pageSize?.toString() ||
      TABLE_PAGE_SIZE.toString(),
    10
  );

  const sortBy = searchParams.get("sortBy") || defaults?.sortBy || DEFAULT_SORT_BY;

  const sortType =
    (searchParams.get("sortType") as "asc" | "desc") ||
    defaults?.sortType ||
    DEFAULT_SORT_TYPE;

  // Giữ lại query params khác ngoài `page`
  const queryParams: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    if (key !== "page") {
      queryParams[key] = value;
    }
  });

  return { page, pageSize, sortBy, sortType, queryParams };
}
