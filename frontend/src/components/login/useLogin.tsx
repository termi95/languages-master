import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api, saveToken } from "../../api/api.config";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  let handleSubmit = (e: any) => {
    e.preventDefault();

    loginPost();
    async function loginPost() {
      api
        .post("/auth/login", {
          username: username,
          password: password,
        })
        .then((res) => {
          if (res.status === 200) {
            setUsername("");
            setPassword("");
            saveToken(res.data.access_token);
            navigate("/home");
          }
        })
        .catch((error) => {
          setMessage("Some error occured");
          setTimeout(() => setMessage(""), 5000);
        });
    }
  };

  let handleChange = (e: HTMLInputElement) => {
    if (e.name === "username") {
      setUsername(e.value);
    } else if (e.name === "password") {
      setPassword(e.value);
    }
  };

  return {
    handleSubmit,
    handleChange,
    message,
  };
};
