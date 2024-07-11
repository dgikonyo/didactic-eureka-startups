class RegisterDto {
  username;
  firstName;
  lastName;
  email;
  dateOfBirth;
  country_id;
  password;
  role_id;
  createdAt;
  updatedAt;

  constructor(
    username,
    firstName,
    lastName,
    email,
    dateOfBirth,
    country_id,
    password,
    role_id,
    createdAt,
    updatedAt
  ) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.country_id = country_id;
    this.password = password;
    this.role_id = role_id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  getUsername() {
    return this.username;
  }

  setUsername(newUsername) {
    this.username = newUsername;
  }

  getFirstName() {
    return this.firstName;
  }

  setFirstName(newFirstName) {
    this.firstName = newFirstName;
  }

  getLastName() {
    return this.lastName;
  }

  setLastName(newLastname) {
    this.lastName = newLastname;
  }

  getEmail() {
    return this.email;
  }

  setEmail(newEmail) {
    this.email = newEmail;
  }

  getDateOfBirth() {
    return this.dateOfBirth;
  }

  setDateOfBirth(newDob) {
    this.dateOfBirth = newDob;
  }

  getCountryId() {
    return this.country_id;
  }

  setCountryId(country_id) {
    this.country_id = country_id;
  }

  getPassword() {
    return this.password;
  }

  setPassword(newPassword) {
    this.password = newPassword;
  }

  getRoleId() {
    return this.role_id;
  }

  setRoleId(role_id) {
    this.role_id = role_id;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  setCreatedAt(createdAt) {
    this.createdAt = createdAt;
  }

  getUpdatedAt() {
    return this.updatedAt;
  }

  setUpdatedAt(updatedAt) {
    this.updatedAt = updatedAt;
  }
}

module.exports = RegisterDto;
