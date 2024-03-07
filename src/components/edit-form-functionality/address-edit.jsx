import React, { useState } from 'react';

export default function AddressEditForm() {
    const initialState = {
        primary: '',
        country: '',
        city: '',
        state: '',
        postalCode: '',
        editMode: true
    };

    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSave = () => {
        console.log('Form Data:', formData);
        setFormData({ ...formData, editMode: false });
    };

    const handleEdit = () => {
        setFormData({ ...formData, editMode: true });
    };

    return (
        <div className="container-fluid">
            <h2>Personal info</h2>
            {formData.editMode ? (
                <dl className="m-4 p-4">
                    <div className="d-flex justify-content-between">
                        <dt>Primary Address</dt>
                        <input type="text" name="primary" value={formData.primary} onChange={handleInputChange} /><br />
                        <dt>City</dt>
                        <input type="text" name="city" value={formData.city} onChange={handleInputChange} /><br />
                    </div>
                    <div className="d-flex justify-content-between">
                        <dt>Country</dt>
                        <input type="text" name="country" value={formData.country} onChange={handleInputChange} /><br />
                        <dt>State</dt>
                        <input type="text" name="state" value={formData.state} onChange={handleInputChange} /><br />
                        <dt>Postal Code</dt>
                        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} /><br />
                    </div>
                </dl>
            ) : (
                <div>
                    <p>Primary Address: {formData.primary}</p>
                    <p>Country: {formData.country}</p>
                    <p>City: {formData.city}</p>
                    <p>State: {formData.state}</p>
                    <p>Postal Code: {formData.postalCode}</p>
                </div>
            )}
            {formData.editMode ? (
                <button onClick={handleSave}>Save</button>
            ) : (
                <button onClick={handleEdit}>Edit</button>
            )}
            <button>Cancel</button>
        </div>
    );
}