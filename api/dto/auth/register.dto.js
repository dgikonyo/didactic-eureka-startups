class RegisterDto {
  username;
  firstname;
  lastname;
  email;
  dateOfBirth;
  country_id;
  password;
  createdAt;
  updatedAt;

  constructor(
    username,
    firstname,
    lastname,
    email,
    dateOfBirth,
    country_id,
    password,
    createdAt,
    updatedAt
  ) {
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.country_id = country_id;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  get getUsername() {
    return this.username;
  }

  set setUsername(newUsername) {
    this.username = newUsername;
  }

  get getFirstName() {
    return this.firstname;
  }

  set setFirstName(newFirstName) {
    this.username = newFirstName;
  }

  get getLastName() {
    return this.lastname;
  }

  set setLastName(newLastname) {
    this.lastname = newLastname;
  }

  get getEmail() {
    return this.email;
  }

  set setEmail(newEmail) {
    this.email = newEmail;
  }

  get getDateOfBirth() {
    return this.dateOfBirth;
  }

  set setDateOfBirth(newDob) {
    this.dateOfBirth = newDob;
  }

  get getCountryId() {
    return this.country_id;
  }

  set setCountryId(country_id) {
    this.country_id = country_id;
  }

  get getPassword() {
    return this.password;
  }

  set setPassword(newPassword) {
    this.password = newPassword;
  }

  get getCreatedAt() {
    return this.createdAt;
  }

  set setCreatedAt(createdAt) {
    this.createdAt = createdAt;
  }

  get getUpdatedAt() {
    return this.updatedAt;
  }

  set setUpdatedAt(updatedAt) {
    this.updatedAt = updatedAt;
  }
}
