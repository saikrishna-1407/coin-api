const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ensure correct DB connection

const Coin = sequelize.define("Coin", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
    tableName: "coins", // Ensure lowercase table name
    timestamps: true // Automatically handle createdAt & updatedAt
});

// Fetch all coins
const getAllCoins = async () => {
    return await Coin.findAll();
};

// Add a new coin
const addCoin = async (name, symbol, price) => {
    const newCoin = await Coin.create({ name, symbol, price });
    console.log("✅ Coin inserted into DB:", newCoin.toJSON()); // Debugging log
    return newCoin;
};

// Update a coin's price
const updateCoin = async (id, price) => {
    await Coin.update({ price }, { where: { id } });
    return await Coin.findByPk(id);
};

// Delete a coin
const deleteCoin = async (id) => {
    await Coin.destroy({ where: { id } });
    return { message: '✅ Coin deleted successfully' };
};

module.exports = { getAllCoins, addCoin, updateCoin, deleteCoin };