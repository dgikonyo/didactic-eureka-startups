export class RegisterDto {
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
    
  }