require('dotenv').config();
const express = require('express');
const cors = require('cors');
const coinRoutes = require('./routes/coinRoutes');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/coins', coinRoutes);

app.listen(PORT, '127.0.0.1', () => {
    console.log('Server running on port ${PORT}');
});