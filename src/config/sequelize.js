const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

class Database {
  constructor() {
    if (!Database.instance) {
      this._sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        logging: false
      });
      Database.instance = this;
    }
    return Database.instance;
  }

  get sequelize() {
    return this._sequelize;
  }
}

module.exports = new Database().sequelize;
