type UserRegister = {
  username: string;
  email: string;
  password: string;
  rePassword: string;
};

type UserLogin = {
  username: string;
  password: string;
};

type userProfile = {
  id: string;
  username: string;
  email: string;
};

export type { UserRegister, UserLogin, userProfile };
