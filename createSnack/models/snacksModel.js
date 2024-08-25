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
  description: DataTypes.STRING,
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  mark: DataTypes.STRING,
  advert: DataTypes.STRING,
  advert2: DataTypes.STRING
}, {
  tableName: 'snacks',
  timestamps: false
});

module.exports = Snack;
