import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DocumentUpload = () => {
    const [documentDetails, setDocumentDetails] = useState(null);
    const [message, setMessage] = useState(null);
    const apiUrl = 'https://ourcap-hrms.ctportfolio.in/api/get-ducuments';
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

                setDocumentDetails(response.data.data.document_details);
                setMessage(response.data.message);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!documentDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Document Upload Details</h1>
            <p>{message}</p>
            <div>
                {documentDetails.map(document => (
                    <div key={document.id}>
                        <h2>Document ID: {document.id}</h2>
                        <p>User ID: {document.user_id}</p>
                        <img src={document.document_file} alt={`Document ${document.id}`} />
                        <p>Created At: {document.created_at}</p>
                        <p>Updated At: {document.updated_at}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DocumentUpload;
