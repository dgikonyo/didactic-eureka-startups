import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';

const Role = sequelize.define(
  'Role',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Auto-increment for integer-based IDs
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Role name cannot be empty',
        },
      },
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
    tableName: 'roles', // Explicit table name to prevent Sequelize from pluralizing it
  }
);

export default Role;
