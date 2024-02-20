import { useState, useEffect } from "react";
import "./Attendence.css";

export default function AttendenceMain() {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [firstClockInTime, setFirstClockInTime] = useState(null);
  const [lastClockOutTime, setLastClockOutTime] = useState(null);
  const [totalDuration, setTotalDuration] = useState(0);
  const [lastClockInTimestamp, setLastClockInTimestamp] = useState(null);
  let interval;

  useEffect(() => {
    // Retrieve last clock-in timestamp and date from localStorage
    const storedTimestamp = localStorage.getItem('lastClockInTimestamp');
    const storedDate = localStorage.getItem('lastClockInDate');
    setLastClockInTimestamp(storedTimestamp ? parseInt(storedTimestamp, 10) : null);

    // If the stored date is not the current date, reset the timestamp
    if (storedDate !== new Date().toLocaleDateString()) {
      setLastClockInTimestamp(null);
    }
  }, []);

  const canUpdateFirstIn = !lastClockInTimestamp || (Date.now() - lastClockInTimestamp >= 24 * 60 * 60 * 1000);

  const buttonText = isClockedIn ? "Clock Out" : "Clock In";
  const buttonTheme = isClockedIn ? "btn btn-danger" : "btn btn-success";

  useEffect(() => {
    if (isClockedIn) {
      // Clock In
      const currentTime = new Date();
      setFirstClockInTime(`${currentTime.toLocaleTimeString()}`);
      setLastClockOutTime(null);

      // Start tracking duration when clocked in
      const startTime = currentTime.getTime();

      interval = setInterval(() => {
        // Update the total duration every second
        setTotalDuration((prevDuration) => prevDuration + 1000);
      }, 1000);

      // Save the current timestamp and date to localStorage
      localStorage.setItem('lastClockInTimestamp', Date.now());
      localStorage.setItem('lastClockInDate', currentTime.toLocaleDateString());
    } else {
      // Clock Out
      const currentTime = new Date();
      setLastClockOutTime(`${currentTime.toLocaleTimeString()}`);
      setFirstClockInTime(null);

      // Clear the interval when the user clocks out
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isClockedIn, canUpdateFirstIn]);

  useEffect(() => {
    setLastClockOutTime(null);
  }, []);

  function handleClock() {
    if (!isClockedIn && !canUpdateFirstIn) {
      alert("You can't start the time before the next date. Please wait for 24 hours.");
      return;
    }
    setIsClockedIn((prev) => !prev);
  }

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between m-3 p-3">
        <h4>Attendance</h4>
        <div>
          <div>
            <button className="btn btn-light me-1 p-2">
              First in : {firstClockInTime || " - "}
            </button>
            <button className="btn btn-light me-3">
              Last Out : {isClockedIn ? " - " : lastClockOutTime}
            </button>

            <button onClick={handleClock} className={buttonTheme}>
              {buttonText}-{totalDuration > 0 && <>{formatDuration(totalDuration)}</>}
            </button>
          </div>
        </div>
      </div>

      <table className="table table hover table-secondary">
        <thead>
          <tr>
            <th>Date</th>
            <th>Clock In</th>
            <th>Clock In Location </th>
            <th>Clock Out</th>
            <th>Work Schedule</th>
            <th>Logged Time</th>
            <th>Paid Time</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

// Helper function to format duration in HH:MM:SS format
function formatDuration(duration) {
  const hours = Math.floor(duration / 3600000);
  const minutes = Math.floor((duration % 3600000) / 60000);
  const seconds = Math.floor((duration % 60000) / 1000);

  return `${hours}:${minutes}:${seconds}`;
}
