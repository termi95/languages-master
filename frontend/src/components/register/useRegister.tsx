import { useState } from "react";
import { api } from "../../api/api.config";
import { UserRegister } from "../../types/user";

let formValid = true;

const userRegisterInitialState: UserRegister = {
  username: "",
  email: "",
  password: "",
  rePassword: "",
};

export const useRegister = () => {
  const [user, setUser] = useState<UserRegister>(userRegisterInitialState);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    validatePassword();

    if (formValid) {
      register();
    }
  };

  const register = async () => {
    await api
      .post("/auth/register", { ...user })
      .then((res) => {
        if (res.status === 201) {
          setMessage("Account creat successfully.");
        }
      })
      .catch((error) => {
        setMessage("Some error occured");
        setTimeout(() => setMessage(""), 5000);
      });
  };

  const validatePassword = () => {
    const { password, rePassword } = user;
    if (password !== rePassword) {
      formValid = false;
      setMessage("Passwords not match.");
      setTimeout(() => setMessage(""), 5000);
    } else if (password.length >= 8) {
      setMessage("Minimum passwords lenghtis 8.");
      setTimeout(() => setMessage(""), 5000);
    } else if (password === rePassword) {
      formValid = true;
    }
  };

  const handleChange = (e: HTMLInputElement) => {
    let newUserData = { ...user };
    if (e.name === "username") {
      newUserData.username = e.value;
    } else if (e.name === "password") {
      newUserData.password = e.value;
    } else if (e.name === "rePassword") {
      newUserData.rePassword = e.value;
    } else if (e.name === "email") {
      newUserData.email = e.value;
    }
    setUser(newUserData);
  };

  return {
    handleSubmit,
    handleChange,
    message,
  };
};
