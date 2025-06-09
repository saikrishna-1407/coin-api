const coinModel = require('../models/coinModel');

const getCoins = async () => {
    return await coinModel.getAllCoins();
};

const addCoin = async (data) => {
    const { name, symbol, price } = data;
    if (!name || !symbol || !price) {
        throw new Error("❌ All fields are required!");
    }
    return await coinModel.addCoin(name, symbol, price);
};

const updateCoin = async (id, data) => {
    if (!data.price) {
        throw new Error("❌ Price is required for update!");
    }
    return await coinModel.updateCoin(id, data.price);
};

const deleteCoin = async (id) => {
    return await coinModel.deleteCoin(id);
};

module.exports = { getCoins, addCoin, updateCoin, deleteCoin };