const Snack = require('../models/snacksModel');

const updateSnacks = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedSnackData = req.body;

    const snack = await Snack.findByPk(id);
    if (!snack) {
      return res.status(404).json({ message: 'Snack not found' });
    }

    await snack.update(updatedSnackData);

    res.json({ message: 'Snack updated successfully', snack });
  } catch (err) {
    console.error('Error updating snack:', err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  updateSnacks
};
