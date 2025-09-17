"use client";

import { useRegister } from "@/features/auth/hooks/useRegister";
import { Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PasswordField from "@/components/ui/PasswordField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {
  registerSchema,
  RegisterFormValues,
} from "@/features/auth/schemas/registerSchema";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const { handleRegisterSubmit, loading } = useRegister();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const res = await handleRegisterSubmit(data);
      if (!res) return;
      toast.success("Register success!")
      router.push("/auth/login")
      console.log("Register success", res);
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
        Register with Email
      </Typography>

      {errors.root && (
        <Typography
          color="error"
          sx={{
            mt: 1,
            fontSize: 16,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <ErrorOutlineIcon /> {errors.root.message}
        </Typography>
      )}

      <TextField
        label="Full Name"
        fullWidth
        margin="normal"
        size="small"
        {...register("fullName")}
        error={!!errors.fullName}
        helperText={errors.fullName?.message}
      />

      <TextField
        label="Phone"
        fullWidth
        margin="normal"
        size="small"
        {...register("phone")}
        error={!!errors.phone}
        helperText={errors.phone?.message}
      />

      <TextField
        label="Email"
        type="text"
        fullWidth
        margin="normal"
        size="small"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <PasswordField
        label="Password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <PasswordField
        label="Confirm Password"
        {...register("confirmPassword")}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        sx={{ mt: 3, textTransform: "uppercase", px: 4, py: 1.2 }}
      >
        {loading ? "Loading..." : "Register"}
      </Button>

      <Typography sx={{ mt: 2, fontSize: 14, color: "text.secondary" }}>
        Do you have an account?{" "}
        <Typography
          component={Link}
          href="/auth/login"
          sx={{
            display: "inline",
            color: "primary.main",
            fontWeight: "bold",
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Login
        </Typography>
      </Typography>

      {/* Decoration images */}
      <Image
        src="/images/login-deconration-plane.png"
        alt="Travelista Tours"
        width={224}
        height={48}
        style={{ objectFit: "cover", position: "absolute", top: 40, right: 0 }}
        priority
      />
      <Image
        src="/images/login-deconration-02.png"
        alt="Travelista Tours"
        width={192}
        height={112}
        style={{ objectFit: "cover", position: "absolute", bottom: 0, left: 0 }}
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
