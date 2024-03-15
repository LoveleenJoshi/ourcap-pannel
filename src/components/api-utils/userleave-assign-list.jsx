import React, { useState, useEffect } from 'react';

const UserLeaveListAss = () => {
    const [leaveDetail, setLeaveDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLeaveList = async () => {
            try {
                const token = '456|AGrG7d6xtwEPngRSdOTDik7zpj1KMkTzztwHC1XCefeaf5bc';
                const response = await fetch('https://ourcap-hrms.ctportfolio.in/api/user-leave-assign-list', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setLeaveDetail(data.data.leave_detail);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLeaveList();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>User Leave List</h1>
            <ul>
                {leaveDetail.map(leave => (
                    <li key={leave.id}>
                        <p>Leave Type: {leave.leave_type}</p>
                        <p>Yearly Leave: {leave.yearly_leave}</p>
                        <p>Remaining Leave: {leave.remaining_leave}</p>
                        {/* Additional leave details */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserLeaveListAss;
