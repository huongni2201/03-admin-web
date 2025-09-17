import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  OutlinedInputProps,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState, forwardRef } from "react";

interface PasswordFieldProps extends OutlinedInputProps {
  label: string;
  error?: boolean;
  helperText?: string;
}

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ label, error, helperText, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <FormControl variant="outlined" fullWidth margin="normal" error={error}>
        <InputLabel>{label}</InputLabel>
        <OutlinedInput
          type={showPassword ? "text" : "password"}
          inputRef={ref}
          {...rest}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                onMouseDown={(e) => e.preventDefault()}
                edge="end"
                aria-label="toggle password visibility"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={label}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
);

PasswordField.displayName = "PasswordField";

export default PasswordField;
