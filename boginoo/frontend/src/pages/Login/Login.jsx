import { Button, Input, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-default.svg";
import { FuncContext } from "../../context/functions";
import { InputPass } from "../../components/Passinput";
import { useRef } from "react";

export const Login = () => {
  const { userinfo, setUserinfo, login, checkEmail, checkPass, checkUser } =
    useContext(FuncContext);
  const emailRef = useRef(null);

  const checkInput = () => {
    checkEmail && emailRef.current.focus();
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "4vh",
      }}
      maxWidth="xl"
    >
      <img src={Logo} alt="logo" />
      <Typography sx={{ color: "#02B589", fontSize: "32px" }}>
        Нэвтрэх
      </Typography>
      <Box sx={{
        display: "flex",
        flexDirection: "column", 
        alignItems: "center"
      }}>
        {checkUser && (
          <Typography sx={{ textAlign: "center", color: "red" }}>
            Мэйл хаяг эсвэл нууц үг буруу байна
          </Typography> 
        )}
        {checkEmail ? (
          <Typography sx={{ marginLeft: "15px", color: "red" }}>
            Зөв мэйл хаяг оруулна уу
          </Typography>
        ) : (
          <Typography sx={{ marginLeft: "15px" }}>Цахим хаяг</Typography>
        )}
          <Input
            disableUnderline={true}
            placeholder="name@mail.domain"
            style={{
              width: "150%",
              height: "4vh",
              background: "#FFFFFF",
              border: !checkEmail ? "1px solid #F0F0F0" : "1px solid red",
              boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.16)`,
              borderRadius: `100px`,
              paddingLeft: "15px",
            }}
            ref={emailRef}
            onChange={(e) =>
              setUserinfo({ ...userinfo, email: e.target.value })
            }
          />
      </Box>
      <Box sx={{
        display: "flex",
        flexDirection: "column",  
        alignItems: "center",
      }}>
        {checkPass ? (
          <Typography sx={{ textAlign:'left',  color: "red" }}>
            8ш урттай нууц үг оруулаарай
          </Typography>
        ) : (
          <Typography sx={{ textAlign:'left' }}>Нууц үг</Typography>
        )}
        <Input
          disableUnderline={true}
          id="passInput"
          type="password"
          placeholder="••••••••••"
          style={{
            width: "150%",
            height: "4vh",
            background: "#FFFFFF",
            border: !checkPass ? "1px solid #F0F0F0" : "1px solid red",
            boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.16)`,
            borderRadius: `100px`,
            paddingLeft: "15px",
          }}
          onChange={(e) =>
            setUserinfo({ ...userinfo, password: e.target.value })
          }
          onKeyDown={(e) => e.code === "Enter" && login()}
        />
        <InputPass />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          gap:"5vw"
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Input
            disableUnderline={true}
            type="checkbox"
            style={{ color: "#02B589" }}
          />
          <Typography sx={{ color: "#02B589" }}>Намайг сана</Typography>
        </Box>
        <Link style={{ color: "black" }} to="/forgotpass">
          Нууц үгээ мартсан
        </Link>
      </Box>
      <Button
        style={{
          backgroundColor: " #02B589",
          borderRadius: "100px",
          padding: "3px 33px 3px 33px",
          fontSize: "90%",
          width: "300px",
          color: "white",
        }}
        onClick={() => {
          login();
          checkInput();
        }}
      >
        Нэвтрэх
      </Button>
      <Link style={{ color: "#02B589" }} to="/signup">
        Шинэ хэрэглэгч бол энд дарна уу?
      </Link>
    </Container>
  );
};
