import React, { useState } from 'react';

export default function BankEditForm() {
    const initialState = {
        BankName: '',
        AccountName: '',
        branch: '',
        accountNumber: '',
        swift: '',
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
                        <dt>Bank Name </dt>
                        <input type="text" name="BankName" value={formData.BankName} onChange={handleInputChange} /><br />
                        <dt>Branch</dt>
                        <input type="text" name="branch" value={formData.branch} onChange={handleInputChange} /><br />
                    </div>
                    <div className="d-flex justify-content-between">
                        <dt>Account Name</dt>
                        <input type="text" name="AccountName" value={formData.AccountName} onChange={handleInputChange} /><br />
                        <dt>Account Number</dt>
                        <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} /><br />
                        <dt>Swift</dt>
                        <input type="text" name="swift" value={formData.swift} onChange={handleInputChange} /><br />
                    </div>
                </dl>
            ) : (
                <div>
                    <p>Bank Name: {formData.BankName}</p>
                    <p>Account Name: {formData.AccountName}</p>
                    <p>Branch: {formData.branch}</p>
                    <p>Account Number: {formData.accountNumber}</p>
                    <p>Postal Code: {formData.swift}</p>
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