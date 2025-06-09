const express = require('express');
const coinController = require('../controllers/coinController');

const router = express.Router();

router.get('/', coinController.getCoins);
router.post('/', coinController.addCoin);
router.put('/:id', coinController.updateCoin);
router.delete('/:id', coinController.deleteCoin);

module.exports = router;