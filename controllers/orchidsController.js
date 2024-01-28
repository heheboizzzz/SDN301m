const Orchid = require('../models/orchids');

exports.getAllOrchids = async (req, res) => {
  try {
    const orchids = await Orchid.find();
    res.json(orchids);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrchidById = async (req, res) => {
  try {
    const orchid = await Orchid.findById(req.params.orchidId);
    res.json(orchid);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createOrchid = async (req, res) => {
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
};

exports.updateOrchid = async (req, res) => {
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
};

exports.deleteOrchid = async (req, res) => {
  try {
    await Orchid.findByIdAndDelete(req.params.orchidId);
    res.json({ message: 'Orchid deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
