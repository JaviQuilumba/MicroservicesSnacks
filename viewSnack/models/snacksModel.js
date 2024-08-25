const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Snack = sequelize.define('Snack', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mark: {
    type: DataTypes.STRING,
    allowNull: true
  },
  advert: {
    type: DataTypes.STRING,
    allowNull: true
  },
  advert2: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'snacks',
  timestamps: false
});

module.exports = Snack;
