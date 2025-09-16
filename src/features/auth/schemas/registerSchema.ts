import * as yup from "yup";

// Yup schema
export const registerSchema = yup.object({
  fullName: yup.string().required("Full name is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10,11}$/, "Phone must be 10-11 digits")
    .required("Phone is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export type RegisterFormValues = yup.InferType<typeof registerSchema>;
