export interface User {
  name: string;
  email: string;
  phone: string;
  location: string;
  company: string;
  status: string;
}

export interface AllUserResponse {
  data: User[];
}

export interface UserStat {
  label: string;
  value: number;
}

export interface UserStatResponse {
  data: UserStat[];
}
