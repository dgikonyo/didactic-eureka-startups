export class LoginDto {
  email;
  password;

  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get getEmail() {
    return this.email;
  }

  set setEmail(newEmail) {
    this.email = newEmail;
  }

  get getPassword() {
    return this.password;
  }

  set setPassword(newPassword) {
    this.password = newPassword;
  }
}
