export interface User {
  _id?: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  country_id: number;
  password: string;
  role_id: number;
}

export interface LoginDto {
  email: string;
  password: string;
}
