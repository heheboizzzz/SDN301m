// OrchidRouter.js
const express = require('express');
const router = express.Router();
const Orchid = require('../models/orchids');

router.get('/orchids', async (req, res) => {
  try {
    const orchids = await Orchid.find();
    res.json(orchids);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/orchids/:orchidId', async (req, res) => {
  try {
    const orchid = await Orchid.findById(req.params.orchidId);
    res.json(orchid);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/orchids', async (req, res) => {
  const orchid = new Orchid({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    nation: req.body.nation,
    isNatural: req.body.isNatural,
    color: req.body.color,
  });

  try {
    const newOrchid = await orchid.save();
    res.status(201).json(newOrchid);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/orchids/:orchidId', async (req, res) => {
  try {
    const updatedOrchid = await Orchid.findByIdAndUpdate(
      req.params.orchidId,
      {
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        nation: req.body.nation,
        isNatural: req.body.isNatural,
        color: req.body.color,
      },
      { new: true }
    );
    res.json(updatedOrchid);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/orchids/:orchidId', async (req, res) => {
  try {
    await Orchid.findByIdAndDelete(req.params.orchidId);
    res.json({ message: 'Hoa lan đã được xóa' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
