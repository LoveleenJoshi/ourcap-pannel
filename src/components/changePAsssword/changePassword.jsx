import React, { useState } from 'react';

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetMessage, setResetMessage] = useState('');

  function handleResetClick() {
    // Basic form validation
    if (!currentPassword || !newPassword || !confirmPassword) {
      setResetMessage('Please fill in all password fields.');
    } else if (newPassword !== confirmPassword) {
      setResetMessage('New password and confirm password do not match.');
    } else {
      // TODO: Make an API call to update the password on the server
      // For simplicity, I'm displaying a success message without an actual API call.
      setResetMessage('Password change is successful');
      // You would typically make an API call to update the password on the server here
      // and handle success or error accordingly.
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form className="m-4 p-4">
        <h1>Change Password</h1>
        <dl>
          <dt>Current Password</dt>
          <dd>
            <input
              type="password"
              className="form-control"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </dd>
          <dt>New Password</dt>
          <dd>
            <input
              type="password"
              className="form-control"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </dd>
          <dt>Confirm Password</dt>
          <dd>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </dd>
          <button onClick={handleResetClick} className="w-100 btn btn-primary">
            Change Password
          </button>
        </dl>
        <p className={resetMessage.includes('successful') ? 'text-success' : 'text-danger'}>
          {resetMessage}
        </p>
      </form>
    </div>
  );
}
