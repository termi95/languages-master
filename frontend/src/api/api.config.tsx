import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    withCredentials: true,
    crossdomain : true,
    Authoryzation: `Bearer ${localStorage.getItem("accessToken")}`,
    'Content-Type': 'application/json',
  },
});

const saveToken = (token: string, userId: any) => {
  localStorage.setItem("accessToken", token);
  localStorage.setItem("userId", userId);
};

const removeToken = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userId");
};

export { api, saveToken, removeToken };
