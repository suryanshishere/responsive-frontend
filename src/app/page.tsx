import ResponsiveLayout from "./responsiveLayout";
import Navbar from "./navbar";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "white", color: "black" }}>
      <Navbar />
      <ResponsiveLayout />
    </Box>
  );
}
