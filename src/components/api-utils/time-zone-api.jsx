import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClockOutdetails = () => {
    const [userData, setUserData] = useState(null);
    const apiUrl = 'https://ourcap-hrms.ctportfolio.in/api/clock-in-clock-out-details';
    const token = 'Bearer 434|c32QLClIrMPJM5LXJoKtaVVBqRS7Nx2swgTlI7aJ11d25434';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl, {
                    headers: {
                        'Authorization': token,
                        'Accept': 'application/json'
                    }
                });

                setUserData(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div>
            <h1>User Data</h1>
            {userData.clock_in_clock_outs.length === 0 ? (
                <p>No clock in/clock out events available</p>
                
            ) : (
                <ul>
                    {userData.clock_in_clock_outs.map((event, index) => (
                        <li key={index}>
                            {/* Display details of each clock in/clock out event */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
        </>
    );
};

export default ClockOutdetails;
