export type Role = "GUEST" | "USER" | "MANAGER" | "ADMIN"

export interface IUser {
    _id: string;
    name: string;
    email: string;
    isVerify: boolean;
    role: Role
}

