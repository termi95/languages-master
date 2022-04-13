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

export type { UserRegister, UserLogin };
