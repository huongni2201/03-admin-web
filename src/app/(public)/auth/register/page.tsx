"use client";

import { useRegister } from "@/features/auth/hooks/useRegister";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IRegisterForm } from "@/features/auth/types";

export default function RegisterPage() {
  const { register, loading } = useRegister();
  const [formData, setFormData] = useState<IRegisterForm>({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp");
      return;
    }

    const res = await register(formData);
    if (res) {
      console.log("Register success: ", res);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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

      <TextField
        name="fullName"
        label="Full Name"
        type="text"
        fullWidth
        margin="normal"
        value={formData.fullName}
        onChange={handleChangeInput}
      />

      <TextField
        name="phone"
        label="Phone"
        type="text"
        fullWidth
        margin="normal"
        value={formData.phone}
        onChange={handleChangeInput}
      />

      <TextField
        name="email"
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={handleChangeInput}
      />
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          onChange={handleChangeInput}
          name="password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <TextField
        name="confirmPassword"
        label="Confirm password"
        type="password"
        fullWidth
        margin="normal"
        value={formData.confirmPassword}
        onChange={handleChangeInput}
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
