import axios from "axios";

const API_TOKEN = "453|rfXIy1acZ721s2558ExRcPjBXaiCMoSh5XjTGTotb0bcb9ea";

export const userAttendanceApi = axios.create({
  baseURL: "https://ourcap-hrms.ctportfolio.in/api/get-user-attendance",
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});
export const userTimeOff = axios.create({
  baseURL: "https://ourcap-hrms.ctportfolio.in/api/user-leave-assign-list",
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});
