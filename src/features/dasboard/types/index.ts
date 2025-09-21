import { IUserDashboard } from "@/types/user";

export type UserTableProps = {
  users: IUserDashboard[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
};