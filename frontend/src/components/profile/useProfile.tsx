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
  useEffect(() => {
    api
      .get("auth/profile")
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return {
    user,
  };
};
