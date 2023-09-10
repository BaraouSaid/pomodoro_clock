import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { BsFillPlayFill, BsPauseFill, BsArrowRepeat } from 'react-icons/bs';
import './App.css';

function App() {
  return (
    <>
      <div className="container flex flex-col items-center justify-center h-screen gap-5 bg-slate-100">
        <div>
          <h1>25 + 5 Clock</h1>
        </div>
        <div className="flex flex-row gap-5">
          <div>
            <div id="break-label">Break length</div>
            <div className="flex items-center gap-2">
              <FaArrowUp id="break-decrement" />
              <p id="break-length">5</p>
              <FaArrowDown id="break-increment" />
            </div>
          </div>
          <div>
            <div id="session-label">Session Length</div>
            <div className="flex items-center gap-2">
              <FaArrowUp id="session-decrement" />
              <p id="session-length">25</p>
              <FaArrowDown id="session-increment" />
            </div>
          </div>
        </div>
        <div className="p-3 border-4 border-yellow-600 rounded-xl">
          <h2 id="timer-label">Session</h2>
          <p id="time-left">25 : 00</p>
        </div>
        <div className="flex items-center gap-2"></div>
      </div>
    </>
  );
}

export default App;
