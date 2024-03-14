import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import reportWebVitals from './reportWebVitals';
import { RouterMain } from './components/router/router';
import EditForm from './components/edit-form-functionality/edit-form';
import AddessEditForm from './components/edit-form-functionality/address-edit';

import AddressEditForm from './components/edit-form-functionality/address-edit';
import EmergencyEditForm from './components/edit-form-functionality/Emergency-edit';
import BankEditForm from './components/edit-form-functionality/Bank-edit';

import NewsComponent from './components/api-utils/NewsComponent';
import EmployeeDetails from './components/api-utils/userDetails';
import DashboardDetails from './components/api-utils/dashboard';
import StateDetails from './components/api-utils/getStates';
import CityDetails from './components/api-utils/getCities';
import CityList from './components/api-utils/getCities';
import ClockOutdetails from './components/api-utils/time-zone-api';
import getJobComponent from './components/api-utils/get-jobs';
import GetJobComponent from './components/api-utils/get-jobs';
import CompanyDetails from './components/api-utils/get-company';
import DocumentUpload from './components/api-utils/get-documents';
import {Attendance}  from './components/api-utils/attendence';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Attendance/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
