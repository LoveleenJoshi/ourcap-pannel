import axios from "axios";

const API_TOKEN = "454|nYqkWBhe68CLWVgA3JmyIv6735tihvpFqUvX5aBoe9755375";

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
