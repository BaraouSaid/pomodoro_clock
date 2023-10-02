import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { BsFillPlayFill, BsPauseFill, BsArrowRepeat } from 'react-icons/bs';
import './App.css';

// function incrementBreakLength(prev) {
//   if (prev < 60) {
//     return prev + 1;
//   }
//   return prev;
// }

// function decrementBreakLength(prev) {
//   if (prev > 1) {
//     return prev - 1;
//   }
//   return prev;
// }

// function incrementSessionLength(prev) {
//   if (prev < 60) {
//     return prev + 1;
//   }
//   return prev;
// }

// function decrementSessionLength(prev) {
//   if (prev > 1) {
//     return prev - 1;
//   }
//   return prev;
// }

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(1500);
  const [sessionMinutes, setSessionMinutes] = useState(null);
  const [sessionSeconds, setSessionSeconds] = useState(null);
  const [isCounting, setIsCounting] = useState(false);
  const [sessionTitle, setSessionTitle] = useState('Session');
  const [isOnBreak, setIsOnBreak] = useState(false);

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
    }
  }

  function decrementSessionLength() {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
    }
  }

  function formatTime() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft - minutes * 60;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  function reset() {
    setIsCounting(false);
    setBreakLength(5);
    setSessionLength(25);
    setSessionMinutes(25);
    setSessionSeconds(0);
  }

  // function handleCount() {
  //   clearTimeout(counter);
  //   setIsCounting(!isCounting);
  // }

  // function countDown() {
  //   if (isCounting) {
  //     counter;
  //     reset();
  //   } else {
  //     clearTimeout(counter);
  //   }
  // }

  useEffect(() => {
    if (isCounting) {
      const counter = setInterval(() => {
        if (sessionSeconds == 0) {
          setSessionMinutes(sessionMinutes - 1);
          setSessionSeconds(59);
        } else {
          setSessionMinutes(sessionMinutes);
          setSessionSeconds(sessionSeconds - 1);
        }

        if (sessionMinutes == 0 && sessionSeconds == 0 && isOnBreak == false) {
          setIsOnBreak(true);
          setSessionMinutes(breakLength - 1);
          setSessionTitle('Break');
        }
        if (sessionMinutes == 0 && sessionSeconds == 0 && isOnBreak == false) {
          setIsOnBreak(true);
        }
        if (sessionMinutes == 0 && sessionSeconds == 0 && isOnBreak == true) {
          setIsOnBreak(false);
          setSessionTitle('Session');
          setSessionMinutes(sessionLength);
        }
        setTimeLeft(`${formatTime(sessionMinutes, sessionSeconds)}`);
      }, 1000);
      return () => clearInterval(counter);
    }
  }, [isCounting, sessionMinutes, sessionSeconds, timeLeft]);

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
                onClick={incrementBreakLength}
                disabled={isCounting}
              />
              <p id="break-length">{breakLength}</p>
              <FaArrowDown
                id="break-decrement"
                className="text-yellow-600 hover:cursor-pointer"
                onClick={decrementBreakLength}
                disabled={isCounting}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div id="session-label">Session Length</div>
            <div className="flex items-center gap-5">
              <FaArrowUp
                id="session-increment"
                className="text-amber-600 hover:cursor-pointer"
                onClick={incrementSessionLength}
                disabled={isCounting}
              />
              <p id="session-length">{sessionLength}</p>
              <FaArrowDown
                id="session-decrement"
                className="text-amber-600 hover:cursor-pointer"
                onClick={decrementSessionLength}
                disabled={isCounting}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-40 border-8 rounded-full h-80 w-80 bg-amber-500 border-amber-800">
          <h2 id="timer-label" className="text-3xl">
            {sessionTitle}
          </h2>
          <p id="time-left" className="text-8xl">
            MM:SS
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
