"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: { main: "#EB662B" },
    secondary: { main: "#f50057" },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F9F9F9",
    },
  },
  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    button: {
      textTransform: "none",
    },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 20px",
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: "lg" },
    },
    MuiLink: {
      defaultProps: { underline: "hover" },
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.secondary,
          padding: "4px 8px",
          fontWeight: 500,
          '&:hover, &.active': {
            color: theme.palette.primary.main,
          },
        }),
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
