import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { BsFillPlayFill, BsPauseFill, BsArrowRepeat } from 'react-icons/bs';
import './App.css';

function increment(prev) {
  if (prev == 60) {
    return prev;
  }
  return prev + 1;
}

function decrementBreakLength(prev) {
  if (prev == 0) {
    return prev;
  }
  return prev - 1;
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
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-10 text-3xl bg-slate-100">
        <div>
          <h1 className="mb-20 text-5xl">25 + 5 Clock</h1>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-col items-center">
            <div id="break-label">Break Length</div>
            <div className="flex items-center gap-2">
              <FaArrowUp
                id="break-increment"
                className="text-yellow-600 hover:cursor-pointer"
                onClick={() => setBreakLength(increment(breakLength))}
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
            <div className="flex items-center gap-2">
              <FaArrowUp
                id="session-increment"
                className="text-yellow-600 hover:cursor-pointer"
                onClick={() => setSessionLength(increment(sessionLength))}
              />
              <p id="session-length">25</p>
              <FaArrowDown
                id="session-decrement"
                className="text-yellow-600 hover:cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center p-3 border-4 border-yellow-600 rounded-xl">
          <h2 id="timer-label" className="text-3xl">
            Session
          </h2>
          <p id="time-left" className="text-8xl">
            25:00
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div
            id="start_stop"
            className="flex gap-0 p-1 border-4 border-yellow-600 rounded-xl hover:cursor-pointer"
          >
            <BsFillPlayFill />
            <BsPauseFill />
          </div>

          <BsArrowRepeat id="reset" className="hover:cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default App;
