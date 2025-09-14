import axios from "@/libs/authorizedAxiosInstance"
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "../types"


export const loginApi = (data: LoginRequest) => {
    return axios.post<LoginResponse>("/api/auth/login", data)
}

export const registerApi = (data: RegisterRequest) => {
    return axios.post<RegisterResponse>("/api/auth/register", data)
}