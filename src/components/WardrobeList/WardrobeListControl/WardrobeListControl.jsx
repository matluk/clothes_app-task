import { Box } from "@mui/material";
import ColorPicker from "./ColorFilter";

export default function WardrobeListControl() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
        pt: 1,
      }}
    >
      <ColorPicker />
    </Box>
  );
}
