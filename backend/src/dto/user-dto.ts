export interface UserDTO {
  username: string;
  email: string;
  password: string;
}

export interface LoginUserDTO {
  username: string;
  id: number;
}

export interface LoginUserDtoReq {
  user: LoginUserDTO;
}

export interface ProfileUserDTO {
  id: number;
  username: string;
  email: string;
}
