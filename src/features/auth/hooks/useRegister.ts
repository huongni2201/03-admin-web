import { useState } from "react";
import { IApiError, RegisterRequest, RegisterResponse } from "../types";
import { registerApi } from "../services/authApi";
import { AxiosError } from "axios";

export function useRegister() {
    const [loading, setLoading] = useState(false);

    const handleRegisterSubmit = async (data: RegisterRequest): Promise<RegisterResponse | null> => {
        setLoading(true);
        try {
            const res = await registerApi(data);
            return res.data;
        } catch (error) {
            const axiosError = error as AxiosError<IApiError>;
            if (axiosError.response?.data?.message) {
                throw axiosError.response.data.message;
            }
            throw "Đăng ký thất bại, vui lòng thử lại....";
        } finally {
            setLoading(false);
        }
    }

    return { handleRegisterSubmit, loading };
}