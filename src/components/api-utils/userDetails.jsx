import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeDetails = () => {
    const [userData, setUserData] = useState(null);
    const apiUrl = 'https://ourcap-hrms.ctportfolio.in/api/user';
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

                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    

    return (
        <div>
            {userData ? (
                <div>
                    <h2>User Details</h2>
                    <p>Name: {userData.data.user.name}</p>
                    <p>Email: {userData.data.user.email}</p>
                    <p>Contact Number: {userData.data.user.contact_number}</p>

                    <h2>Address Details</h2>
                    <p>Primary Address: {userData.data.addresses.primary_address}</p>
                    <p>Country: {userData.data.addresses.country_name}</p>
                    <p>State: {userData.data.addresses.state_name}</p>
                    <p>City ID: {userData.data.addresses.city_id}</p>
                    <p>Postal Code: {userData.data.addresses.postal_code}</p>

                    <h2>Bank Details</h2>
                    <p>Name: {userData.data.bank_detail.name}</p>
                    <p>Branch: {userData.data.bank_detail.branch}</p>
                    <p>Account Holder Name: {userData.data.bank_detail.account_holder_name}</p>
                    <p>Account Number: {userData.data.bank_detail.account_number}</p>
                    

                    <h2>Employee Details</h2>
                    <p>Employee ID: {userData.data.employee_detail.employee_id}</p>
                    <p>Job Title: {userData.data.employee_detail.job_title}</p>
                    <p>Employee Type: {userData.data.employee_detail.employee_type}</p>
                
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default EmployeeDetails;
