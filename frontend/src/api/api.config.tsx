import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    Authoryzation: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

const saveToken = (token: string) => {
 localStorage.setItem('accessToken', token);
}

const removeToken = () =>{
  localStorage.removeItem('accessToken');
}

export {api, saveToken, removeToken};
