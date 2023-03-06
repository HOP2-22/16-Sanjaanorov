import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const InputPass = ({ check = false }) => (
  <Box
    sx={{
      display: "flex",
    }}
  >
    <input
      type="checkbox"
      onClick={() => {
        const event = document.getElementById(
          check ? "passInputSign" : "passInput"
        );
        event.type = event.type === "password" ? "text" : "password";
      }}
    />
    <Typography>Show password</Typography>
  </Box>
);
