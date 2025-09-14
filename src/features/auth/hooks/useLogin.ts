import { useState } from "react";
import { loginApi} from "../services/authApi";
import { LoginRequest, LoginResponse } from "../types";

export function useLogin() {
    const [loading, setLoading] = useState(false);

    const login = async (data: LoginRequest): Promise<LoginResponse | null> => {
        setLoading(true);
        try {
            const res = await loginApi(data);
            return res.data;
        } catch (err) {
            console.error("Login failed", err);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { login, loading };
}
