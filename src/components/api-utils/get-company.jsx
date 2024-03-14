import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyDetails = () => {
    const [companyData, setCompanyData] = useState(null);
    const [message, setMessage] = useState(null);
    const apiUrl = 'https://ourcap-hrms.ctportfolio.in/api/get-company';
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

                setCompanyData(response.data.data.company);
                setMessage(response.data.message);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!companyData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Company Details</h1>
            <p>{message}</p>
            <div>
                {companyData.map(company => (
                    <div key={company.id}>
                        <h2>{company.name}</h2>
                        <p>Email: {company.email}</p>
                        <p>Phone: {company.country_code} {company.contact_number}</p>
                        <p>Website: {company.website}</p>
                        <p>Branch: {company.branch}</p>
                        <p>Descriptions: {company.descriptions}</p>
                        <img src={company.logo} alt="Company Logo" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyDetails;
