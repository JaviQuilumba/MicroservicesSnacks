const Snack = require('../models/snacksModel');

const listSnacks = async (req, res) => {
  try {
    const snacks = await Snack.findAll({
      attributes: ['id', 'name', 'price', 'description', 'mark', 'advert', 'advert2'] 
    });
    res.json(snacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSnackById = async (req, res) => {
  try {
    const id = req.params.id;
    const snack = await Snack.findByPk(id, {
      attributes: ['id', 'name', 'price', 'description', 'mark', 'advert', 'advert2'] 
    });

    if (!snack) {
      return res.status(404).json({ message: 'Snack not found' });
    }

    res.json(snack);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  listSnacks,
  getSnackById,
};
