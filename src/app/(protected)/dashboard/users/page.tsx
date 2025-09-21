"use client";

import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import UserFilter from "@/components/layout/dashboard/UserFilter";
import UserTable from "@/components/layout/dashboard/UserTable";
import AppPagination from "@/components/common/Pagination";
import { IUserDashboard } from "@/types/user";

const users: IUserDashboard[] = [
  {
    id: "1",
    name: "Nguyen Van A",
    email: "a@example.com",
    phone: "0123456789",
    role: "Admin",
    active: true,
  },
  {
    id: "2",
    name: "Tran Thi B",
    email: "b@example.com",
    phone: "0987654321",
    role: "User",
    active: false,
  },
  {
    id: "3",
    name: "Nguyen Van A",
    email: "a@example.com",
    phone: "0123456789",
    role: "Admin",
    active: true,
  },
  {
    id: "4",
    name: "Tran Thi B",
    email: "b@example.com",
    phone: "0987654321",
    role: "User",
    active: false,
  },
];

export default function UserPage() {
  return (
    <Box sx={{ mt: 1}}>
      {/* Bộ lọc */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <UserFilter />
      </Paper>

      {/* Bảng user */}
      <Box>
        <UserTable users={users}/>
      </Box>

      {/* Pagination */}
      <AppPagination totalPages={100}/>
    </Box>
  );
}
