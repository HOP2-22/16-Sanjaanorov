import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import Image from "./assets/LowerBack.png";
import Image2 from "./assets/UpperBack.png";
import Image3 from "./assets/rat.png";

const Timer = ({ isActive, setIsActive }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, sethours] = useState(0);
  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setMinutes(0);
    sethours(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      if (seconds === 60) {
        setMinutes((minuts) => minuts + 1);
        setSeconds(0);
      }
      if (minutes === 60) {
        sethours((hours) => hours + 1);
        setMinutes(0);
      }
    } else if (
      (!isActive && seconds !== 0,
      !isActive && minutes !== 0,
      !isActive && hours !== 0)
    ) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="seconds">{seconds}s</div>
      <div className="minutes">{minutes}m</div>
      <div className="hours">{hours}h</div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

const MyData = ({ index, Data, isActive, setMove, setScore }) => {
  const translate = () => {
    const num = Math.floor(Math.random() * 15);
    const newArr = new Array(15).fill(false);
    newArr[num] = true;
    setMove(newArr);
    setTimeout(() => {
      newArr[num] = false;
      setMove(newArr);
    }, 3500);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        translate();
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  console.log(isActive);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100px",
        height: "300px",
        marginLeft: "32px",
      }}
    >
      <img
        src={Image2}
        alt="upperBack"
        style={{
          position: "absolute",
          width: "128px",
          height: "152px",
        }}
        sx={{ draggable: false }}
      />
      <img
        src={Image3}
        alt="rat"
        style={{
          width: "64px",
          height: "129px",
          position: "absolute",
          transition: "0.5s",
          transform: Data ? "translateY(30px)" : "translateY(145px)",
        }}
        onClick={() => setScore((prev) => prev + 1)}
      />
      <img
        src={Image}
        alt="lowerBack"
        style={{
          position: "absolute",
          transform: "translateY(134px)",
          width: "128px",
        }}
      />
    </div>
  );
};

function App() {
  const [move, setMove] = useState(new Array(15).fill(false));
  const [isActive, setIsActive] = useState(false);
  const [score, setScore] = useState(0);
  useEffect(() => {}, [score]);

  return (
    <Box sx={{ backgroundColor: "#B40000", height: "100vh" }}>
      <Container maxWidth="md">
        <Box>
          <Box
            sx={{
              display: "flex",
            }}
          ></Box>
          <Box>
            <Timer isActive={isActive} setIsActive={setIsActive} />
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: " repeat(5, minmax(0, 1fr))",
            }}
          >
            {move.map((item, index) => {
              return (
                <MyData
                  Data={item}
                  setMove={setMove}
                  setScore={setScore}
                  index={index}
                  isActive={isActive}
                />
              );
            })}
          </Box>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: "50px", display: "flex", justifyContent: "center" }}
          >
            Score is {score}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
