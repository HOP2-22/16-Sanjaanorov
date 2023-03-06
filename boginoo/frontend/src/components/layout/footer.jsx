import { Typography } from "@mui/material"
import { Box } from "@mui/system"

export const Footer = () => {
    return (
        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Typography>Made with ❤️ by Pinecone</Typography>
        <Typography
          sx={{
            color: "#000000",
            opacity: 0.2,
          }}
        >
          ©boginoo.io 2020
        </Typography>
      </Box>
    )
}