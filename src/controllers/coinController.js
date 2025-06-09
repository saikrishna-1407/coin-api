const coinService = require('../services/coinService');

const getCoins = async (req, res) => {
    try {
        const coins = await coinService.getCoins();
        res.json(coins);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const addCoin = async (req, res) => {
    try {
        const newCoin = await coinService.addCoin(req.body);
        res.json(newCoin);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateCoin = async (req, res) => {
    try {
        const updatedCoin = await coinService.updateCoin(req.params.id, req.body);
        res.json(updatedCoin);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteCoin = async (req, res) => {
    try {
        const message = await coinService.deleteCoin(req.params.id);
        res.json(message);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getCoins, addCoin, updateCoin, deleteCoin };