export type Role = "GUEST" | "USER" | "MANAGER" | "ADMIN"

export interface AppUser {
    id: string
    name: string
    email: string
    role: Role
}
