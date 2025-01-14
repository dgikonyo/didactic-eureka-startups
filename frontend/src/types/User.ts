export interface User {
  _id?: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  country_id: Number;
  password: string;
  role_id: Number;
}

export interface LoginDto {
  email: string;
  password: string;
}
