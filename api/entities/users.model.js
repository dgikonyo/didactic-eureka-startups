const mongoose = require('mongoose');
const uuid = require('uuid');
const Schema = mongoose.Schema;
const validator = require('validator');


const userSchema = new Schema(
  {
    id: {
      type: String,
      default: uuid.v4(),
      unique: true,
    },
    username: {
      type: String,
      unique: true,
      required: [true, 'Username must be provided'],
      minlength: 3,
    },
    firstName: {
      type: String,
      trim: true,
      required: [true, 'First name must be provided'],
      minlength: 3,
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, 'Last name must be provided'],
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, 'Please provide a valid email.'],
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    country_id: {
      type: Number,
      required: [true, 'Country details must be provided'],
    },
    password: {
      type: String,
      trim: false,
      required: [true, 'Password must be provided'],
      minlength: 8,
    },
    role_id: {
      type: Number,
      required: [true, 'Role details must be provided'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
