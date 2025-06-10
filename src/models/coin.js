const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Coin = sequelize.define('Coin', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    symbol: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    tabelName: "coins",
    timestamps: true,
});

module.exports = Coin;