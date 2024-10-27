// models/index.js
const sequelize = require('../config/database');
const User = require('./user');

// Sync all models with the database
sequelize.sync({ alter: true })
  .then(() => console.log('All models synchronized.'))
  .catch(error => console.error('Error syncing models:', error));

module.exports = { User };
