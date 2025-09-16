"use client";

import { useLogin } from "@/features/auth/hooks/useLogin";
import { Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PasswordField from "@/components/ui/PasswordField";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  LoginFormValues,
  loginSchema,
} from "@/features/auth/schemas/loginSchema";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { handleLoginSubmit, loading } = useLogin();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await handleLoginSubmit(data);
      if (!res) return;
      console.log("Login success", res);
      toast.success("Đăng nhập thành công!")
      router.push("/");
    } catch (err) {
      setError("root", { type: "server", message: err as string });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        py: "96px",
        px: "120px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        height: "100%",
      }}
    >
      <Typography variant="h2" fontWeight="bold" color="primary">
        Welcome
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 3 }}>
        Login with Email
      </Typography>

      {errors.root && (
        <Typography color="error" sx={{ mt: 1, fontSize: 16, display: "flex", alignItems: "center", gap: 1 }}>
          <ErrorOutlineIcon/> {errors.root.message}
        </Typography>
      )}

      <TextField
        label="Email"
        type="text"
        fullWidth
        margin="normal"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register("email")}
      />

      <PasswordField
        label="Mật khẩu"
        error={!!errors.password}
        helperText={errors.password?.message}
        {...register("password")}
      />

      <Typography
        sx={{
          alignSelf: "flex-end",
          mt: 2,
          fontSize: "14px",
          cursor: "pointer",
          color: "text.secondary",
        }}
      >
        Forgot your password?
      </Typography>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        sx={{
          mt: 3,
          textDecoration: "uppercase",
          padding: "10px 32px",
        }}
      >
        {loading ? "Loading..." : "Login"}
      </Button>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          mt: 3,
        }}
      >
        <Box sx={{ height: "1px", width: "80px", background: "red" }} />
        <Typography>OR</Typography>
        <Box sx={{ height: "1px", width: "80px", background: "red" }} />
      </Box>

      <Box
        component="img"
        src="/images/login-google.svg"
        alt="Google"
        sx={{ mt: 4 }}
      />

      <Typography sx={{ mt: 2, fontSize: 14, color: "text.secondary" }}>
        Don&apos;t have account?{" "}
        <Typography
          component={Link}
          href="/auth/register"
          sx={{
            display: "inline",
            color: "primary.main",
            fontWeight: "bold",
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Register
        </Typography>
      </Typography>

      <Image
        src="/images/login-deconration-plane.png"
        alt="Travelista Tours"
        width={224}
        height={48}
        style={{
          objectFit: "cover",
          position: "absolute",
          top: 40,
          right: 0,
        }}
        priority
      />

      <Image
        src="/images/login-deconration-02.png"
        alt="Travelista Tours"
        width={192}
        height={112}
        style={{
          objectFit: "cover",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
        priority
      />

      <Image
        src="/images/login-deconration-01.png"
        alt="Travelista Tours"
        width={176}
        height={100}
        style={{
          objectFit: "cover",
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
        priority
      />
    </Box>
  );
}
