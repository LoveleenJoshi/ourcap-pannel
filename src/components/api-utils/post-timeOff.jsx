import React, { useEffect, useState } from "react";
import { userTimeOff } from "../api/api-Services";
export const Timeoff = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userTimeOff.get();
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || !data.data || !data.data.leave_detail)
    return <div>No data available</div>;

  return (
    <div>
      <h1>API Time-Off Fetch Demo</h1>
      <table className="table table-striped-columns">
        <thead>
          <tr>
            <th scope="col">Leave Type</th>
            <th scope="col">Yearly Leave</th>
            <th scope="col">Total Leave</th>
            <th scope="col">Paid Leave</th>
          </tr>
        </thead>
        <tbody>
          {data.data.leave_detail.map((item) => (
            <tr key={item.id}>
              <td>{item.leave_type}</td>
              <td>{item.yearly_leave}</td>
              <td>{item.LeaveBalance.total_leave}</td>
              <td>{item.LeaveBalance.remaining_leave}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
