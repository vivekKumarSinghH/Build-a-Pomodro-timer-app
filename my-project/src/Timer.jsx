import { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import IconButton from "@mui/material/IconButton";

const InitialTime = 1500,
  BreakTime = 300;

export default function Timer() {
  const [timer, setTimer] = useState(InitialTime);
  const [stop, setStop] = useState(false);
  let timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (timer == 0) {
        clearInterval(timerRef);
        return;
      }
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [timer]);

  const handleClick = () => {
    if (!stop) {
      clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(() => {
        if (timer == 0) {
          clearInterval(timerRef);
          return;
        }
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    setStop((prev) => !prev);
  };
  return (
    <div className="h-screen w-screen  text-center">
      <div className="w-fit flex gap-3 p-2  m-auto mt-5 rounded shadow-md">
        <IconButton onClick={handleClick} className="text-black text-[2rem]">
          {stop ? (
            <PlayArrowIcon fontSize="large" />
          ) : (
            <StopIcon fontSize="large" />
          )}
        </IconButton>

        <IconButton className="text-black text-[2rem]">
          <RestartAltIcon
            fontSize="large"
            onClick={() => {
              setTimer(InitialTime);
            }}
          />
        </IconButton>
        {timer == 0 && (
          <button
            type="button"
            onClick={() => setTimer(BreakTime)}
            className="focus:outline-none font-1rem text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            BREAK FOR 5 MINUTES
          </button>
        )}
      </div>

      <div className="text-[20rem] font-semibold">
        {Math.floor(timer / 60)}:
        {parseInt(timer % 60) >= 10
          ? parseInt(timer % 60)
          : "0" + parseInt(timer % 60)}
      </div>
    </div>
  );
}
