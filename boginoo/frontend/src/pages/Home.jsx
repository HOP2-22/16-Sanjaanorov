import { Box, Button, Container, Input, Typography } from "@mui/material";
import Logo from "../assets/images/logo-default.svg";
import { LinkList } from "../components/LinkList";
import { useContext } from "react";
import { FuncContext } from "../context/functions";
import { AllLinks } from "../components/AllLinks";

export const Home = () => {
  const { linkTransfer, value, setValue, arr, history } =
    useContext(FuncContext);
  return (
    <Container sx={style.designHome} maxWidth="xl">
      <img src={Logo} alt="logo" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "15vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1vw",
          }}
        >
          <Input
            disableUnderline={true}
            type="email"
            placeholder="https://www.web-huudas.mn"
            style={style.inputHome}
            value={value}
            onChange={(e) => {
              e.preventDefault();
              setValue(e.target.value);
            }}
          />
          <Button
            variant="contained"
            style={style.buttonHome}
            onClick={() => {
              linkTransfer();
            }}
          >
            Богиносгох
          </Button>
        </Box>
        {arr ? <LinkList list={arr} /> : null}

        {history.length > 0 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5vh",
              marginTop: "-8vh",
            }}
          >
            <Typography
              sx={{
                color: "#02B589",
                fontWeight: "700",
                fontSize: "32px",
                marginLeft: "15px",
              }}
            >
              Түүх
            </Typography>
            {history?.map((el, index) => {
              return <AllLinks key={index} list={el} index={index} />;
            })}
          </Box>
        )}
      </Box>
    </Container>
  );
};
const style = {
  inputHome: {
    width: "40vw",
    height: "4vh",
    background: "#FFFFFF",
    border: "1px solid #F0F0F0",
    boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.16)`,
    borderRadius: `100px`,
    paddingLeft: "15px",
  },
  designHome: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "3vh",
  },
  buttonHome: {
    backgroundColor: " #02B589",
    borderRadius: "100px",
    padding: "3px 33px 3px 33px",
    fontSize: "90%",
  },
};
