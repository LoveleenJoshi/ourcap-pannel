import React, { useState } from 'react';

// Simulated API call to request reset link
// const requestResetLink = async (email) => {
//   // Simulate API call, in a real-world scenario, this would be an asynchronous HTTP request
//   return new Promise((resolve, reject) => {
//     // Assume validateEmail is a function that checks if the email is valid and exists in the system
//     if (validateEmail(email)) {
//       // Simulate sending reset link
//       resolve(`Reset link sent`);
//     } else {
//       reject("Email not found. Please check and try again.");
//     }
//   });
// };
// Simulated API call to request reset link
const requestResetLink = async (email) => {
    // Send a request to the server to generate a token and send the reset link
    return fetch(`/api/reset-password?email=${email}`)
      .then(response => response.json())
      .then(data => data.message);
  };
  
  // Simulated API call to reset password
  const resetPassword = async (token, newPassword) => {
    // Send a request to the server to reset the password
    return fetch(`/api/reset-password/${token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newPassword }),
    })
      .then(response => response.json())
      .then(data => data.message);
  };
  

// Simulated API call to reset password
// const resetPassword = async (token, newPassword) => {
//   // Simulate API call, in a real-world scenario, this would be an asynchronous HTTP request
//   return new Promise((resolve, reject) => {
//     // Assume validatePassword is a function that checks if the password meets certain criteria
//     if (validatePassword(newPassword)) {
//       // Simulate updating the password
//       resolve(`Password successfully reset for email associated with token ${token}`);
//     } else {
//       reject("Invalid password. Please try again.");
//     }
//   });
// };

const validateEmail = (email) => {
  // Placeholder for email validation logic
  return true; // Replace with actual validation
};

const validatePassword = (password) => {
  // Placeholder for password validation logic
  return true; // Replace with actual validation
};

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [resetLinkMessage, setResetLinkMessage] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [resetPasswordMessage, setResetPasswordMessage] = useState('');

  const handleRequestResetLink = async () => {
    try {
      const message = await requestResetLink(email);
      setResetLinkMessage(message);
    } catch (error) {
      setResetLinkMessage(error);
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      setResetPasswordMessage("Passwords do not match. Please try again.");
      return;
    }
  
    try {
      const message = await resetPassword(token, newPassword);
      setResetPasswordMessage(message);
    } catch (error) {
      setResetPasswordMessage(error);
    }
  };

  return (
    <div>
      {/* Stage 1: Request Reset Link */}
      <h2>Forgot Password</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleRequestResetLink}>Send Reset Link</button>
      <p>{resetLinkMessage}</p>

      {/* Stage 2: Reset Password */}
      {token && (
        <div>
          <h2>Reset Password</h2>
          <label>New Password:</label>
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
          <button onClick={handleResetPassword}>Reset Password</button>
          <p>{resetPasswordMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
