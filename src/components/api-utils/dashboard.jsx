import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardDetails = () => {
    const [dashboard, setDashboard] = useState(null);
    const apiUrl = 'https://ourcap-hrms.ctportfolio.in/api/dashboard';
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

                setDashboard(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error here
            }
        };

        fetchData();
    }, []);

    if (!dashboard) {
        return <div>Loading...</div>;
    }

    const { user, news, holidays, company } = dashboard;

    return (
        <>
            <h1>Welcome, {user.name}!</h1>
            <h2>Company Information</h2>
            <p>Company Name: {company[0].name}</p>
            <p>Contact Email: {company[0].email}</p>


            <h2>News</h2>
            {news.map(item => (
                <div className="news-item" key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>Posted by: {item.name}</p>

                </div>
            ))}

            <h2>Holidays</h2>
            {holidays.map(item => (
                <div className="holiday-item" key={item.id}>
                    <p>{item.name}</p>
                    <p>Date: {item.holiday_date_to}</p>
                    <p>Day: {item.days}</p>
                </div>
            ))}
        </>
    );
};

export default DashboardDetails;
