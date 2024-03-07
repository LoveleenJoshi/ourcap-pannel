import React, { useState } from 'react';

export default function EditForm() {
    // State variable to store input values
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        maritalStatus: ''
        // Add other input fields similarly
    });

    // State variable to control edit mode
    const [editMode, setEditMode] = useState(true);

    // Function to log input values
    const handleSave = () => {
        console.log('Form Data:', formData);

        // Switch to view mode (editMode = false)
        setEditMode(false);
    };

    // Function to handle clicking the "Edit" button
    const handleEdit = () => {
        // Switch to edit mode (editMode = true)
        setEditMode(true);
    };

    // Function to handle input changes
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
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                        <dt>Gender</dt>
                        <input type="text" name="gender" value={formData.gender} onChange={handleInputChange} />
                    </div>
                    <div className="d-flex justify-content-between">
                        <dt>Last Name</dt>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                        <dt>Marital Status</dt>
                        <input type="text" name="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange} />
                    </div>
                    {/* Add other input fields similarly */}
                </dl>
            ) : (
                // Display saved data when not in edit mode
                <div>
                    <p>First Name: {formData.firstName}</p>
                    <p>Last Name: {formData.lastName}</p>
                    <p>Gender: {formData.gender}</p>
                    <p>Marital Status: {formData.maritalStatus}</p>
                    {/* Display other saved data similarly */}
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


    


