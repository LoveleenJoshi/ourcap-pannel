import { useState, useEffect } from "react";
import "./Attendence.css";

export function Attendence() {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [firstClockInTime, setFirstClockInTime] = useState(null);
  const [lastClockOutTime, setLastClockOutTime] = useState(null);
  const [totalDuration, setTotalDuration] = useState(0);

  const buttonText = isClockedIn ? "Clock Out" : "Clock In";
  const buttonTheme = isClockedIn ? "btn btn-danger" : "btn btn-success";

  useEffect(() => {
    let interval;

    if (isClockedIn) {
      // Clock In
      const currentTime = new Date();
      setFirstClockInTime(`First In: ${currentTime.toLocaleTimeString()}`);

      // Start tracking duration when clocked in
      const startTime = currentTime.getTime();

      interval = setInterval(() => {
        // Update the total duration every second
        setTotalDuration((prevDuration) => prevDuration + 1000);
      }, 1000);
    } else {
      // Clock Out
      const currentTime = new Date();
      setLastClockOutTime(`Last Out: ${currentTime.toLocaleTimeString()}`);

      // Clear the interval when user clocks out
      clearInterval(interval);
    }

    return () => {
      // Clear the interval when component unmounts or user clocks out
      clearInterval(interval);
    };
  }, [isClockedIn]);

  function handleClock() {
    setIsClockedIn((prev) => !prev);
  }

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between m-3 p-3">
        <h4>Attendance</h4>
        <div>
          <div>
          <button className="btn btn-light me-1 p-2">
            {firstClockInTime}
            </button>
            <button className="btn btn-light me-3">
              {lastClockOutTime}
            </button>

            <button onClick={handleClock} className={buttonTheme}>
              {buttonText}-{totalDuration > 0 && (
              <>{formatDuration(totalDuration)}</>
            )}
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
