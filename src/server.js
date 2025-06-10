require('dotenv').config();
const express = require('express');
const cors = require('cors');
const coinRoutes = require('./routes/coinRoutes');
const sequelize = require('./config/database'); // Import Sequelize connection
const Coin = require('./models/coin'); // Import your Sequelize model

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Sync Sequelize models before starting the server
sequelize.sync({ force: false })
  .then(() => console.log("✅ Database synced successfully!"))
  .catch((err) => console.error("❌ Database sync error:", err));

app.use('/coins', coinRoutes);

app.listen(PORT, '127.0.0.1', () => {
    console.log('Server running on port ${PORT}');
});