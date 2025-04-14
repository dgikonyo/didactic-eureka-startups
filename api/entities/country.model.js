import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';

const Country = sequelize.define(
  'Country',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Automatically increments IDs
      unique: true,
    },
    country_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Country name cannot be empty',
        },
      },
    },
    country_initial: {
      type: DataTypes.STRING(3), // Assuming initials like "USA" or "KEN"
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Country initials must be provided',
        },
      },
    },
    country_currency: {
      type: DataTypes.STRING(10), // Assuming currency codes like "USD" or "KES"
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Country currency must be provided',
        },
      },
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
    tableName: 'countries', // Explicit table name
  }
);

export default Country;
