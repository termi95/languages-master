export interface CreateUsersDTO {
  username: string;
  email: string;
  password: string;
}

export interface LoginUsersDTO {
  username: string;
  id: string;
}

export interface LoginUserDtoReq {
  user: LoginUsersDTO;
}
