"use client";

import { Box, Container, Grid, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLogin = pathname.includes("login");

  return (
    <Container sx={{ py: 5 }}>
      <Stack
        sx={{
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid #c9c9c9ff",
        }}
      >
        <Grid container>
          <Grid size={6}>
            {/* Ảnh */}
            <motion.div
              key="image"
              animate={{ x: isLogin ? "0%" : "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ width: "100%", height: "100%" }}
            >
              <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src="/images/login-image-left-01.png"
                  alt="Travelista Tours"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid size={6}>
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}

                className="h-full w-full bg-white flex items-center justify-center"
                initial={{ x: isLogin ? "-100%" : "100%", opacity: 0 }}
                animate={{ opacity: 1, x: isLogin ? "0%" : "-100%" }}
                transition={{ duration: 0.6 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
