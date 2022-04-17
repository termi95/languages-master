import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
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
