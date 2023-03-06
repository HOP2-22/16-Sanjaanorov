import { Button, Input, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useContext, useState } from "react";
import Logo from "../../assets/images/logo-default.svg";
import { InputPass } from "../../components/Passinput";
import { FuncContext } from "../../context/functions";

export const SignUp = () => {
  const { userData, setUserData, createUser } = useContext(FuncContext);
  const [check, setCheck] = useState("");
  const [checkPassword, setCheckPassword] = useState(false);
  const [match, setMatch] = useState(false);
  const checkPass = () => {
    if (userData.password.length === 8) {
      setCheckPassword(false);
      if (userData.password === check) {
        setMatch(false);
        createUser();
      } else {
        setMatch(true);
      }
    } else {
      setCheckPassword(true);
    }
  };

  return (
    <Container sx={style.container}>
      <img src={Logo} alt="logo" />
      <Typography sx={style.topic}>Бүртгүүлэх</Typography>
        <Box>
          <Typography sx={style.cap}>Цахим хаяг</Typography>
          <Input
            disableUnderline={true}
            required
            type="email"
            style={{
              width: "25vw",
              height: "4vh",
              background: "#FFFFFF",
              border: "1px solid #F0F0F0",
              boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.16)`,
              borderRadius: `100px`,
              paddingLeft: "15px",
            }}
            placeholder="name@mail.domain"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </Box>
        <Box>
          {checkPassword ? (
            <Typography
              sx={{
                marginLeft: "15px",
                color: "red",
              }}
            >
              8ш урттай нууц үг оруулаарай
            </Typography>
          ) : (
            <Typography sx={style.cap}>Нууц үг</Typography>
          )}
          <Input
            id="passInput"
            type="password"
            required
            disableUnderline={true}
            style={{
              width: "25vw",
              height: "4vh",
              background: "#FFFFFF",
              border: !checkPassword ? "1px solid #F0F0F0" : "1px solid red",
              boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.16)`,
              borderRadius: `100px`,
              paddingLeft: "15px",
            }}
            placeholder="••••••••••"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <InputPass />
        </Box>
        <Box>
          {match ? (
            <Typography
              sx={{
                marginLeft: "15px",
                color: "red",
              }}
            >
              Нууц үг таарахгүй байна
            </Typography>
          ) : (
            <Typography sx={style.cap}>Нууц үгээ давтна уу?</Typography>
          )}
          <Input
            id="passInputSign"
            type="password"
            required
            disableUnderline={true}
            style={{
              width: "25vw",
              height: "4vh",
              background: "#FFFFFF",
              border: !match ? "1px solid #F0F0F0" : "1px solid red",
              boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.16)`,
              borderRadius: `100px`,
              paddingLeft: "15px",
            }}
            placeholder="••••••••••"
            onChange={(e) => setCheck(e.target.value)}
          />
          <InputPass check={true} />
        </Box>
        <Button style={style.but} onClick={()=> checkPass()} >
          Бүртгүүлэх
        </Button>
    </Container>
  );
};

const style = {
  inp: {
    width: "25vw",
    height: "4vh",
    background: "#FFFFFF",
    border: "1px solid #F0F0F0",
    boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.16)`,
    borderRadius: `100px`,
    paddingLeft: "15px",
  },
  cap: {
    marginLeft: "15px",
  },
  but: {
    backgroundColor: " #02B589",
    borderRadius: "100px",
    padding: "3px 33px 3px 33px",
    fontSize: "90%",
    width: "25vw",
    color: "white",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "4vh",
  },
  topic: { fontSize: "32px", color: "#02B589" },
};
