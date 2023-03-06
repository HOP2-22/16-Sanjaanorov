import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const FuncContext = createContext();

export const Functions = ({ children }) => {
  const navigate = useNavigate();

  const [checkUser, setCheckUser] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPass, setCheckPass] = useState(false);
  const [value, setValue] = useState("");
  const [arr, setArr] = useState();
  const [info, setInfo] = useState();
  const [history, setHistory] = useState([]);
  const [match, setMatch] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [userinfo, setUserinfo] = useState({
    email: "",
    password: "",
  });

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const GenerateString = (length) => {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  const randomValue = GenerateString(6);

  axios.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token");
      config.headers.set("token", token);
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  const LogOut = () => {
    Cookies.remove("token");
    setInfo(null);
  };
  const linkTransfer = async () => {
    try {
      if (info) {
        const { data } = await axios.post("https://boginoo-backend.onrender.com/link", {
          original: value,
          short: randomValue,
          user: info.email,
        });
        setArr(data);
        setValue("");
      } else {
        alert("Login First");
      }
    } catch (error) {
      console.log({ error: error });
    }
  };

  const createUser = async () => {
    try {
      await axios.post("https://boginoo-backend.onrender.com/signup", {
        email: userData.email,
        password: userData.password,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async () => {
    if (userinfo.email.includes("@") && userinfo.email.includes(".")) {
      setCheckEmail(false);
      if (userinfo.password.length === 8) {
        setCheckPass(false)
        try {
          const { data } = await axios.post("https://boginoo-backend.onrender.com/login", {
            email: userinfo.email,
            password: userinfo.password,
          });
          setInfo(data);
          if (data.match) {
            navigate("/");
            setMatch(true);
            Cookies.set("token", data.token, { expires: 1 });
            setCheckUser(false)
          } else {
            setCheckUser(true);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setCheckPass(true);
      }
    } else {
      setCheckEmail(true);
    }
  };

  useEffect(() => {
    const authenticate = async () => {
      const { data } = await axios.get("https://boginoo-backend.onrender.com/login/checkUser");
      if (data.exp * 1000 <= Date.now()) {
        LogOut();
      } else {
        setMatch(true);
        setInfo({ ...info, email: data.email });
      }
    };

    authenticate();
    const getHistory = async () => {
      const email = info.email;
      const { data } = await axios.get(
        `https://boginoo-backend.onrender.com/link/${email}/list`
      );
      setHistory(() => (data ? data : []));
    };
    if (info) getHistory();
  }, [info]);

  return (
    <FuncContext.Provider
      value={{
        userinfo: userinfo,
        match: match,
        info: info,
        arr: arr,
        value: value,
        userData: userData,
        history: history,
        checkEmail: checkEmail,
        checkPass: checkPass,
        checkUser: checkUser,
        LogOut: LogOut,
        setMatch: setMatch,
        setInfo: setInfo,
        setHistory: setHistory,
        setUserData: setUserData,
        setUserinfo: setUserinfo,
        login: login,
        setValue: setValue,
        linkTransfer: linkTransfer,
        createUser: createUser,
      }}
    >
      {children}
    </FuncContext.Provider>
  );
};
