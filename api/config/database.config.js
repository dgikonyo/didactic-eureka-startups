import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

const options = {
  dialect: 'postgres',
  logging: process.env.NODE_ENV === 'production' ? false : console.log, // Log queries in dev mode
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// Select database configuration based on environment
const config = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_DB_HOST || 'postgres_db',
    port: process.env.POSTGRES_PORT || 5432,
    ...options
  },
  test: {
    username: process.env.POSTGRES_TEST_USER || 'test_user',
    password: process.env.POSTGRES_TEST_PASSWORD || 'test_secret',
    database: process.env.POSTGRES_TEST_DB || 'test_db',
    host: process.env.POSTGRES_TEST_HOST || 'localhost',
    port: process.env.POSTGRES_TEST_PORT || 5432,
    ...options
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    ...options
  }
};

// Initialize Sequelize with the correct environment configuration
const sequelize = process.env.NODE_ENV === 'production' 
? new Sequelize(process.env.DATABASE_URL, config.production) 
: new Sequelize(config[process.env.NODE_ENV] || config.development);

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