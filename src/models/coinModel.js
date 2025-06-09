const pool = require('../config/db');

const getAllCoins = async () => {
    const result = await pool.query('SELECT * FROM coins');
    return result.rows;
};

const addCoin = async (name, symbol, price) => {
    const result = await pool.query(
        'INSERT INTO coins (name, symbol, price) VALUES ($1, $2, $3) RETURNING *',
        [name, symbol, price]
    );
    return result.rows[0];
};

const updateCoin = async (id, price) => {
    const result = await pool.query(
        'UPDATE coins SET price = $1 WHERE id = $2 RETURNING *',
        [price, id]
    );
    return result.rows[0];
};

const deleteCoin = async (id) => {
    await pool.query('DELETE FROM coins WHERE id = $1', [id]);
    return { message: 'Coin deleted successfully' };
};

module.exports = { getAllCoins, addCoin, updateCoin, deleteCoin };