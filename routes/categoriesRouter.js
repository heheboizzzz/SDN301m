const express = require("express");
const router = express.Router();
const Category = require("../models/categories");

router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/categories/:categoryId", async (req, res) => {
  try {
    const category = await Category.findById(req.params.categoryId);
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/categories", async (req, res) => {
  const category = new Category({
    name: req.body.name,
    description: req.body.description,
  });

  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/categories/:categoryId", async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.categoryId,
      {
        name: req.body.name,
        description: req.body.description,
      },
      { new: true }
    );
    res.json(updatedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/categories/:categoryId", async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.categoryId);
    res.json({ message: "Danh mục đã được xóa" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
