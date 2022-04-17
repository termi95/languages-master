import { useEffect, useState } from "react";
import { api } from "../../api/api.config";
import { userProfile } from "../../types/user";

const userInitialState: userProfile = {
  id: "",
  username: "",
  email: "",
};

export const useProfile = () => {
  const [user, setUser] = useState<userProfile>(userInitialState);

  const getProfile = async () => {
    await api
      .get("auth/profile")
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data);
        }
      })
      .catch((error) => {});
  };
  useEffect(() => {
    getProfile();
  }, []);

  return {
    user,
  };
};
