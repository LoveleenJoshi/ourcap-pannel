import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CityDetails = () => {
    const [cityData, setCityData] = useState(null);
    const apiUrl = 'https://ourcap-hrms.ctportfolio.in/api/get-cityes';
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

                setCityData(response.data.data.getCity);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!cityData) {
        return <div>Loading...</div>;
    }

    return (
        <>
           <h1>City Data</h1>
           <ul>
        {cityData.map(city => (
          <li key={city.id}>
            {city.city}, State ID: {city.state_id}
          </li>
        ))}
      </ul>
        </>
    );
};

export default CityDetails;
