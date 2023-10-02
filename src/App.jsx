import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { BsFillPlayFill, BsPauseFill, BsArrowRepeat } from 'react-icons/bs';
import './App.css';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isCounting, setIsCounting] = useState(false);
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [sessionTitle, setSessionTitle] = useState('Session');

  const sound = document.getElementById('ring');

  function incrementBreakLength() {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  }

  function decrementBreakLength() {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  }

  function incrementSessionLength() {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimeLeft(timeLeft + 60);
    }
  }

  function decrementSessionLength() {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimeLeft(timeLeft - 60);
    }
  }

  function formatTime() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    //To change if a problem occur
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  const counter = setInterval(() => {
    if (isCounting && timeLeft) {
      setTimeLeft(timeLeft - 1);
    }
    return clearInterval(counter);
  }, 1000);

  function toggleCounter() {
    clearInterval(counter);
    setIsCounting(!isCounting);
  }

  function resetTimer() {
    if (!isOnBreak && !timeLeft) {
      setTimeLeft(breakLength * 60);
      setIsOnBreak(true);
      setSessionTitle('Break');
      sound.play();
    }
    if (!timeLeft && isOnBreak) {
      setTimeLeft(sessionLength * 60);
      setIsOnBreak(false);
      setSessionTitle('Session');
      sound.pause();
      sound.currentTime = 0;
    }
  }

  function countdown() {
    if (isCounting) {
      counter;
      resetTimer();
    } else {
      return clearInterval(counter);
    }
  }

  function reset() {
    setBreakLength(5);
    setSessionLength(25);
    setIsCounting(false);
    setTimeLeft(1500);
    setIsOnBreak(false);
    sound.pause();
  }

  useEffect(() => {
    countdown();
  }, [isCounting, timeLeft, counter]);

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
              <button disabled={isCounting}>
                <FaArrowUp
                  id="break-increment"
                  className="text-yellow-600 hover:cursor-pointer"
                  onClick={incrementBreakLength}
                />
              </button>
              <p id="break-length">{breakLength}</p>
              <button disabled={isCounting}>
                <FaArrowDown
                  id="break-decrement"
                  className="text-yellow-600 hover:cursor-pointer"
                  onClick={decrementBreakLength}
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div id="session-label">Session Length</div>
            <div className="flex items-center gap-5">
              <button disabled={isCounting}>
                <FaArrowUp
                  id="session-increment"
                  className="text-amber-600 hover:cursor-pointer"
                  onClick={incrementSessionLength}
                />
              </button>
              <p id="session-length">{sessionLength}</p>
              <button disabled={isCounting}>
                <FaArrowDown
                  id="session-decrement"
                  className="text-amber-600 hover:cursor-pointer"
                  onClick={decrementSessionLength}
                  disabled={isCounting}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-40 border-8 rounded-full h-80 w-80 bg-amber-500 border-amber-800">
          <h2 id="timer-label" className="text-3xl">
            {sessionTitle}
          </h2>
          <p id="time-left" className="text-8xl">
            {formatTime()}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div
            id="start_stop"
            className="flex gap-0 p-1 border-4 border-amber-600 rounded-xl hover:cursor-pointer"
            onClick={toggleCounter}
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
      <audio
        id="ring"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </>
  );
}

export default App;
