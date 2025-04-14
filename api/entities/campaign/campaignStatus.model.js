import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../../config/database.config.js';

const CampaignStatus = sequelize.define(
  'CampaignStatus',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
      unique: true,
    },
    statusName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      set(value) {
        this.setDataValue('statusName', value.toLowerCase());
      },
      validate: {
        notEmpty: {
          msg: 'Campaign status name not provided!',
        },
      },
    },
  },
  {
    timestamps: true,
    tableName: 'campaign_statuses', // Explicit table name
  }
);

export default CampaignStatus;
