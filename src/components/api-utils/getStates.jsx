import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StateDetails = () => {
    const [stateData, setStateData] = useState(null);
    const apiUrl = 'https://ourcap-hrms.ctportfolio.in/api/get-states';
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

                setStateData(response.data.data.getState);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!stateData) {
        return <div>Loading...</div>;
    }

    return (
        <>
           <h1>State Data</h1>
            <ul>
                {stateData.map(state => (
                    <li key={state.id}>{state.name}</li>
                ))}
            </ul>
        </>
    );
};

export default StateDetails;
