import React, { useEffect, useState } from "react";
import axios from "axios";

const UserLeaveList = () => {
  const [leaveList, setLeaveList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaveList = async () => {
      try {
        const response = await axios.get(
          "https://ourcap-hrms.ctportfolio.in/api/get-all-user-leave",
          {
            headers: {
              Authorization: "Bearer 456|AGrG7d6xtwEPngRSdOTDik7zpj1KMkTzztwHC1XCefeaf5bc"
            }
          }
        );
        setLeaveList(response.data.data.list);
      } catch (error) {
        console.error("Error response:", error.response);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaveList();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>User Leave List</h1>
      <table>
        <thead>
          <tr>
            <th>Leave ID</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Date To</th>
            <th>Date From</th>
            <th>Time To</th>
            <th>Time From</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leaveList.map(leave => (
            <tr key={leave.leaveId}>
              <td>{leave.leaveId}</td>
              <td>{leave.user_id}</td>
              <td>{leave.name}</td>
              <td>{leave.email}</td>
              <td>{leave.gender}</td>
              <td>{leave.date_to}</td>
              <td>{leave.date_from}</td>
              <td>{leave.time_to ? leave.time_to : "-"}</td>
              <td>{leave.time_from ? leave.time_from : "-"}</td>
              <td>{leave.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserLeaveList;
