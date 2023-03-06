import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FuncContext } from "../../context/functions";
import More from "../../assets/images/icon-down.svg";

export const Header = (props) => {
  const { match, info, setMatch, LogOut } = useContext(FuncContext);
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [touch, setTouch] = useState(false);
  useEffect(() => {
    window.location.pathname === "/login" && setMatch(false);
    if(!match) setTouch(false)
  }, [match, setMatch, info]);
  return (
    <Container sx={style.designHeader} maxWidth="xl">
      <Typography sx={style.instructionHeader}>Хэрхэн ажилладаг вэ?</Typography>
      {match && (
        <Box>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
            }}
          >
            <Typography sx={{ fontSize: "20px" }}>{info?.email}</Typography>
            <img
              src={More}
              alt="moreImg"
              onClick={() => setMenu(menu ? false : true)}
            />
          </Box>
          {menu && (
            <Typography
              sx={{
                position: "absolute",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/login");
                LogOut();
                setMatch(false);
                setMenu(false);
              }}
            >
              Log out
            </Typography>
          )}
        </Box>
      )}

      {!touch ? (
        <Button
          variant="contained"
          style={style.buttonHeader}
          onClick={() => {
            navigate("/login");
            setTouch(true);
          }}
        >
          Нэвтрэх
        </Button>
      ) : null}
    </Container>
  );
};
const style = {
  designHeader: {
    display: "flex",
    gap: "2vw",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  instructionHeader: {
    color: " #02B589",
    fontWeight: "700",
    fontSize: "20px",
  },
  buttonHeader: {
    backgroundColor: "#02B589",
    borderRadius: "100px",
    padding: "3px 30px 3px 30px",
  },
};
