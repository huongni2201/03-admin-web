import Sidebar from "@/components/dashboard/Sidebar";
import ThemeRegistry from "@/components/providers/ThemeRegistry";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { Toaster } from "react-hot-toast";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ThemeRegistry>
          <CssBaseline />
          <Box sx={{ display: "flex" }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Nội dung chính */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              {/* Giữ khoảng trống để không đè Toolbar */}
              <Toolbar />
              {children}
            </Box>
          </Box>

          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toasterId="default"
          />
        </ThemeRegistry>
      </body>
    </html>
  );
}
