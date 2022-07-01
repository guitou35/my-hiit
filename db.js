const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const { POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USER, HOST } = process.env;

const sequelize = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
    host: HOST,
    dialect: "postgres"
})

module.exports = sequelize;