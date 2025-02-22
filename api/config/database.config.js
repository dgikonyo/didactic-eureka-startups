import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQL_DB_NAME,
  process.env.MYSQL_DB_USER_NAME,
  process.env.MYSQL_DB_PASSWORD,
  {
    host: process.env.MYSQL_DB_HOST,
    dialect: 'mysql',
    logging: false, // Disable SQL query logging in production
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// Test DB Connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
})();

export default sequelize;