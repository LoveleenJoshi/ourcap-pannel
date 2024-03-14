import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetJobComponent = () => {
    const [jobData, setJobData] = useState(null);
    const [message, setMessage] = useState(null);
    const apiUrl = 'https://ourcap-hrms.ctportfolio.in/api/get-jobs';
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

                setJobData(response.data.data);
                setMessage(response.data.message); // Set the message from the API response
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!jobData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Job Titles</h1>
            <p>{message}</p>
            <ul>
                {jobData.job_details.map(job => (
                    <li key={job.id}>
                        {job.job_title} - Employee Count: {job.employee_count}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GetJobComponent;
