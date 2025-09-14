import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { FOOTER_COLUMNS } from "./route";
import Logo from "@/components/ui/Logo";

const FooterDesktop = () => {
  return (
    <Box
      display={{ xs: "none", lg: "block" }}
      sx={{ background: "#ffebe6", pt: 6, pb: 2 }}
    >
      <Container>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {/* Column 1 */}
          <Grid
            size={{ xs: 12, md: 6, lg: 3 }}
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Logo color="black" />
          </Grid>

          {FOOTER_COLUMNS.map((col) => (
            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={col.title}>
              <Typography variant="h6" gutterBottom color="black">
                {col.title}
              </Typography>
              <List disablePadding>
                {col.links.map((link) => (
                  <ListItem key={link} disablePadding>
                    <ListItemText
                      primary={link}
                      slotProps={{
                        primary: {
                          sx: { fontSize: "14px", opacity: 0.8 },
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}

          {/* Column 3 */}
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Typography variant="h6" gutterBottom color="black">
              Newsletter
            </Typography>
            <Typography sx={{ fontSize: "14px", opacity: 0.8 }}>
              Subscribe to the free newsletter and stay up to date
            </Typography>

            <Stack
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
                gap: 1,
              }}
            >
              <TextField
                label="Size"
                id="outlined-size-small"
                size="small"
                sx={{
                  "& .MuiInputBase-input": { fontSize: "14px" },
                }}
              />
              <Button variant="outlined" sx={{ height: "40px" }}>
                Send
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{ height: "1px", width: "100%", background: "#fff", mt: 6 }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 3,
          gap: 1,
          opacity: 0.8
        }}
      >
        <Typography variant="body2" color="text.primary" align="center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eligendi facilis a perspiciatis iure. Ipsum ut dolorum autem exercitationem corrupti!
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Copyright © 2025 Traveloka. All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterDesktop;
