import React, { useState, useEffect } from "react";
const Timer = ({ isActive, setter }) => {
  const [seconds, setSeconds] = useState(0);
  const [minuts, setMinutes] = useState(0);
  const [hours, sethours] = useState(0);

  function toggle() {
    setter(!isActive);
  }

  function reset() {
    setSeconds(0);
    setMinutes(0);
    sethours(0);
    setter(false);
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
      if (minuts === 60) {
        sethours((hours) => hours + 1);
        setMinutes(0);
      }
    } else if (
      (!isActive && seconds !== 0,
      !isActive && minuts !== 0,
      !isActive && hours !== 0)
    ) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [hours, isActive, minuts, seconds]);

  return (
    <div className="app">
      <div className="seconds">{seconds}s</div>
      <div className="minutes">{minuts}m</div>
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

export default Timer;
