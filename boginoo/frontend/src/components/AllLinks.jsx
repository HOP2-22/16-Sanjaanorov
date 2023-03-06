import {  Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import { Link } from "react-router-dom";

export const AllLinks = ({ list, index }) => {
  const deleteURL = async (id) => {
    await axios.delete(`https://boginoo-backend.onrender.com/link/delete/${id}`);
  };
  return (
    <Container
      sx={{
        display: "flex",
        borderBottom: "1px solid #E2E2E2",
        justifyContent: "space-between",
        paddingBottom: "2vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <Typography
          sx={{
            color: "#000000",
            opacity: 0.5,
          }}
        >
          Өгөгдсөн холбоос:
        </Typography>
        <Typography>{list.original}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "50%",
          gap: "2vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "#000000",
              opacity: 0.5,
            }}
          >
            Богино холбоос:
          </Typography>
          <Typography>{list.short}</Typography>
        </Box>
        <Link
          style={{ color: "#02B589", marginTop: "2vh" }}
          onClick={() => {
            navigator.clipboard.writeText(list.short);
          }}
        >
          Хуулж авах
        </Link>
        <Typography
          style={{ color: "#02B589", marginTop: "2vh", cursor: "pointer" }}
          onClick={() => deleteURL(list._id)}
        >
          Delete
        </Typography>
      </Box>
    </Container>
  );
};
