"use client";

import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
  Chip,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserTableProps } from "@/features/dasboard/types";

export default function UserTable({ users, onEdit, onDelete }: UserTableProps) {
  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 2, overflow: "hidden" }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow >
            {["ID", "Name", "Email", "Phone", "Role", "Active", "Actions"].map(
              (head) => (
                <TableCell
                  key={head}
                  sx={{ color: "black", fontWeight: "bold" }}
                  align={head === "Actions" ? "right" : "left"}
                >
                  {head}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              hover
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Chip
                  label={user.active ? "Active" : "Inactive"}
                  color={user.active ? "success" : "default"}
                  size="small"
                  variant="outlined"
                />
              </TableCell>
              <TableCell align="right">
                <Tooltip title="Edit user">
                  <IconButton color="primary" size="small">
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete user">
                  <IconButton color="error" size="small">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
