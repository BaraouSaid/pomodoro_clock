import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { BsFillPlayFill, BsPauseFill, BsArrowRepeat } from 'react-icons/bs';
import './App.css';

function incrementBreakLength(prev) {
  if (prev == 60) {
    return prev;
  }
  return prev + 1;
}

function decrementBreakLength(prev) {
  if (prev == 1) {
    return prev;
  }
  return prev - 1;
}

function incrementSessionLength(minutes) {
  if (minutes == 60) {
    return minutes;
  }
  return minutes + 1;
}

function decrementSessionLength(minutes) {
  if (minutes == 1) {
    return minutes;
  }
  return minutes - 1;
}

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  // const [sessionLength, setSessionLength] = useState({
  //   minutes: 25,
  //   seconds: '00',
  // });
  // const { minutes, seconds } = sessionLength;
  const [isOff, setIsOff] = useState(true);
  const [sessionMinutes, setSessionMinutes] = useState(25);
  const [sessionSeconds, setSessionSeconds] = useState('00');
  const [isCounting, setIsCounting] = useState(false);

  let parsedSeconds = parseInt(sessionSeconds);

  useEffect(() => {
    if (isCounting) {
      const counter = setInterval(() => {
        if (parsedSeconds === parseInt('00')) {
          setSessionMinutes(sessionMinutes - 1);
          setSessionSeconds(parseInt('59'));
        } else {
          setSessionMinutes(sessionMinutes);
          setSessionSeconds(sessionSeconds - 1);
        }
      }, 1000);
      return () => clearInterval(counter);
    }
  }, [isCounting, sessionMinutes, sessionSeconds]);

  function reset() {
    setBreakLength(5);
    setSessionLength(25);
    setSessionMinutes(25);
    setSessionSeconds(`00`);
    setIsCounting(false);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-10 text-3xl font-bold bg-cyan-200">
        <div>
          <h1 className="mb-20 text-5xl font-extrabold">Pomodoro Clock</h1>
        </div>
        <div className="flex flex-row gap-24">
          <div className="flex flex-col items-center">
            <div id="break-label">Break Length</div>
            <div className="flex items-center gap-5">
              <FaArrowUp
                id="break-increment"
                className="text-yellow-600 hover:cursor-pointer"
                onClick={() =>
                  setBreakLength(incrementBreakLength(breakLength))
                }
              />
              <p id="break-length">{breakLength}</p>
              <FaArrowDown
                id="break-decrement"
                className="text-yellow-600 hover:cursor-pointer"
                onClick={() =>
                  setBreakLength(decrementBreakLength(breakLength))
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div id="session-label">Session Length</div>
            <div className="flex items-center gap-5">
              <FaArrowUp
                id="session-increment"
                className="text-amber-600 hover:cursor-pointer"
                onClick={() => {
                  setSessionLength(incrementSessionLength(sessionLength));
                  setSessionMinutes(incrementSessionLength(sessionMinutes));
                }}
              />
              <p id="session-length">{sessionLength}</p>
              <FaArrowDown
                id="session-decrement"
                className="text-amber-600 hover:cursor-pointer"
                onClick={() => {
                  setSessionLength(decrementSessionLength(sessionLength));
                  setSessionMinutes(decrementSessionLength(sessionMinutes));
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-8 rounded-full h-80 w-80 bg-amber-500 border-amber-800">
          <h2 id="timer-label" className="text-3xl">
            Session
          </h2>
          <p id="time-left" className="text-8xl">
            {sessionMinutes}:{sessionSeconds}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div
            id="start_stop"
            className="flex gap-0 p-1 border-4 border-amber-600 rounded-xl hover:cursor-pointer"
            onClick={() => {
              if (isCounting == false) {
                setIsCounting(true);
              } else {
                setIsCounting(false);
              }
            }}
          >
            {isCounting ? <BsPauseFill /> : <BsFillPlayFill />}
          </div>

          <BsArrowRepeat
            id="reset"
            className="hover:cursor-pointer"
            onClick={reset}
          />
        </div>
      </div>
    </>
  );
}

export default App;
