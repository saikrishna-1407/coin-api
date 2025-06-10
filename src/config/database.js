require('dotenv').config();
const { Sequelize } = require('sequelize');

const config = require('../config/config.js');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: console.log, // Prevents excessive logs
});

sequelize.authenticate()
    .then(() => console.log("✅ Database connected successfully!"))
    .catch(err => console.error("❌ Database connection error:", err));

module.exports = sequelize;