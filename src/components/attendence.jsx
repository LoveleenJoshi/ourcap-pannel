import React, { useEffect, useState } from "react";
import { userAttendanceApi } from "../api/api-Services";

export const Attendance = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestBody = {
          month: "January",
          year: 2024,
        };

        const response = await userAttendanceApi.post("", requestBody);
        setData(response.data);
      } catch (error) {
        console.error("Error response:", error.response);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Attendance Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Clock In Time</th>
            <th>Clock Out Time</th>
            <th>Duration</th>
            <th>Notes</th>
            <th>Clock In Date</th>
            <th>Date</th>
            <th>Day of Week</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((attendance, index) => (
            <tr key={index}>
              <td>{attendance.id}</td>
              <td>{attendance.user_id ? attendance.user_id : "-"}</td>
              <td>
                {attendance.clock_in_time ? attendance.clock_in_time : "-"}
              </td>
              <td>
                {attendance.clock_out_time ? attendance.clock_out_time : "-"}
              </td>
              <td>{attendance.duration ? attendance.duration : "-"}</td>
              <td>{attendance.notes ? attendance.notes : "-"}</td>
              <td>
                {attendance.clock_in_date ? attendance.clock_in_date : "-"}
              </td>
              <td>{attendance.date}</td>
              <td>{attendance.day_of_week}</td>
              <td>{attendance.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
