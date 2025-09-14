import { useState } from "react";
import { RegisterRequest, RegisterResponse } from "../types";
import { registerApi } from "../services/authApi";

export function useRegister() {
    const [loading, setLoading] = useState(false);

    const register = async (data: RegisterRequest): Promise<RegisterResponse | null> => {
        try {
            setLoading(true);
            const res = await registerApi(data);
            return res.data;
        } catch (err) {
            console.error("Register failed", err);
            return null;
        } finally {
            setLoading(false);
        }
    }

    return { register, loading };
}