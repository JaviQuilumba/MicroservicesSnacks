const Snack = require('../models/snacksModel');

const createSnack = async (req, res) => {
  try {
    const newSnack = await Snack.create(req.body);
    res.status(201).json(newSnack);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createSnack };
