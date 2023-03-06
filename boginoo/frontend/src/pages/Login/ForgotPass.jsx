import { Button, Input, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Logo from "../../assets/images/logo-default.svg";

export const ForgotPass = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "4vh",
      }}
    >
      <img src={Logo} alt="logo" />
      <Typography sx={{ color: "#02B589", fontSize: "32px" }}>
        Нууц үг сэргээх
      </Typography>
      <Typography sx={{textAlign:"center"}}>
        Бид таны цахим хаяг руу нууц үг <br />сэргээх хаяг явуулах болно.
      </Typography>
      <Box>
        <Typography sx={{marginLeft:"15px"}}>Цахим хаяг</Typography>
        <Input
          disableUnderline={true}
          placeholder="name@mail.domain"
          style={{
            width: "25vw",
            height: "4vh",
            background: "#FFFFFF",
            border: "1px solid #F0F0F0",
            boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.16)`,
            borderRadius: `100px`,
            paddingLeft: "15px",
          }}
        />
      </Box>
      <Button
        style={{
          backgroundColor: " #02B589",
          borderRadius: "100px",
          padding: "3px 33px 3px 33px",
          fontSize: "90%",
          width: "25vw",
          color: "white",
        }}
      >
        Илгээх
      </Button>
    </Container>
  );
};
