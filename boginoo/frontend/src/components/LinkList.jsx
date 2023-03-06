import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const LinkList = ({ list }) => {

  return (
    <Box
      sx={{
        width:"100%",
        display: "flex",
        flexDirection: "column",
        gap: "10vh",
        alignItems: "flex-start",
      }}
    >
      <Box>
        <Typography sx={{ color: "#000000", opacity: 0.5 }}>
          Өгөгдсөн холбоос:
        </Typography>
        <Typography>{list.original}</Typography>
      </Box>
      <Box> 
        <Typography sx={{ color: "#000000", opacity: 0.5 }}>
          Богино холбоос:
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "2vw",
          }}
        >
          <Typography>{list.short}</Typography>
          <Link
            sx={{ color: "#02B589", cursor: "pointer" }}
            onClick={() => {
              navigator.clipboard.writeText(list.short);
            }}
          >
            Хуулж авах
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
