import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api, saveToken } from "../../api/api.config";
import { UserLogin } from "../../types/user";

const userInitialState: UserLogin = {
  username: "",
  password: "",
};

export const useLogin = () => {
  const [user, setUser] = useState<UserLogin>(userInitialState);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    login();
  };

  const login = async () => {
    await api
      .post("/auth/login", { user })
      .then((res) => {
        if (res.status === 200) {
          setUser(userInitialState);
          saveToken(res.data.access_token);
          navigate("/home");
        }
      })
      .catch((error) => {
        setMessage("Some error occured");
        setTimeout(() => setMessage(""), 5000);
      });
  };

  const handleChange = (e: HTMLInputElement) => {
    let newUserData = { ...user };
    if (e.name === "username") {
      newUserData.username = e.value;
    } else if (e.name === "password") {
      newUserData.password = e.value;
    }
    setUser(newUserData);
  };

  return {
    handleSubmit,
    handleChange,
    message,
  };
};
