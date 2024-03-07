import React, { useState } from 'react';

export default function EmergencyEditForm() {
    
    const [formData, setFormData] = useState({
        fullName: '',
        Relationship: '',
        PhoneNumber: '',
        
        
    });

    const [editMode, setEditMode] = useState(true);

    const handleSave = () => {
        console.log('Form Data:', formData);

        setEditMode(false);
    };

    
    const handleEdit = () => {
        
        setEditMode(true);
    };

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="container-fluid">
            <h2>Personal info</h2>
            {editMode ? (
                <dl className="m-4 p-4">
                    <div className="d-flex justify-content-between">
                        <dt>First Name</dt>
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
                        <dt>PhoneNumber</dt>
                        <input type="text" name="PhoneNumber" value={formData.PhoneNumber} onChange={handleInputChange} />
                    </div>
                    <div className="d-flex justify-content-between">
                        <dt>RelationShip</dt>
                        <input type="text" name="Relationship" value={formData.Relationship} onChange={handleInputChange} />
                        
                    </div>
                
                </dl>
            ) : (
                
                <div>
                    <p>Full Name: {formData.fullName}</p>
                    <p>Relationship: {formData.Relationship}</p>
                    <p>PhoneNumber: {formData.PhoneNumber}</p>
                    
                    
                </div>
            )}
            {editMode ? (
                <button onClick={handleSave}>Save</button>
            ) : (
                <button onClick={handleEdit}>Edit</button>
            )}
            <button>Cancel</button>
        </div>
    );
}


    


