import axios from "axios";

const API_TOKEN = "145|dIBM41Vtg5zEi726dAhXJ9UXo4563VLh4D5jEBiGd299ee7c";

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
