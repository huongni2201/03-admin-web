import { useState } from "react";
import { loginApi } from "../services/authApi";
import { IApiError, LoginRequest, LoginResponse } from "../types";
import { AxiosError } from "axios";

export function useLogin() {
  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = async (data: LoginRequest): Promise<LoginResponse | null> => {
    setLoading(true);
    try {
      const res = await loginApi(data);
      return res.data;
    } catch (error) {
      const axiosError = error as AxiosError<IApiError>;
      if (axiosError.response?.data?.message) {
        throw axiosError.response.data.message;
      }
      throw "Đăng nhập thất bại, vui lòng thử lại.";
    } finally {
      setLoading(false);
    }
  };

  return { handleLoginSubmit, loading };
}
