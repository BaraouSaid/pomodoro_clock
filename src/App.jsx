import { useState } from 'react';
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

function incrementSessionLength(prev) {
  if (prev == 60) {
    return prev;
  }
  return prev + 1;
}
function decrementSessionLength(prev) {
  if (prev == 1) {
    return prev;
  }
  return prev - 1;
}

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [isOn, setIsOn] = useState(true);

  // function handleChangeIcons() {
  //   setIsOn(!isOn);
  // }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-10 text-3xl bg-cyan-200">
        <div>
          <h1 className="mb-20 text-5xl">Pomodoro Clock</h1>
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
                onClick={() =>
                  setSessionLength(incrementSessionLength(sessionLength))
                }
              />
              <p id="session-length">{sessionLength}</p>
              <FaArrowDown
                id="session-decrement"
                className="text-amber-600 hover:cursor-pointer"
                onClick={() =>
                  setSessionLength(decrementSessionLength(sessionLength))
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center px-10 py-5 text-white border-4 bg-amber-600 rounded-xl">
          <h2 id="timer-label" className="text-3xl">
            Session
          </h2>
          <p id="time-left" className="text-8xl">
            {sessionLength}:00
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div
            id="start_stop"
            className="flex gap-0 p-1 border-4 border-amber-600 rounded-xl hover:cursor-pointer"
            onClick={() => setIsOn(!isOn)}
          >
            {isOn ? <BsFillPlayFill /> : <BsPauseFill />}
          </div>

          <BsArrowRepeat id="reset" className="hover:cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default App;
