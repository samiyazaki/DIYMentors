const express = require('express');
const router = express.Router();
const Solution = require('../models/Solution');

// Get all solutions
router.get('/', async (req, res) => {
  const solutions = await Solution.find().populate('user').populate('post');
  res.json(solutions);
});

// Get a specific solution
router.get('/:id', async (req, res) => {
  const solution = await Solution.findById(req.params.id).populate('user').populate('post');
  res.json(solution);
});

// Create a new solution
router.post('/', async (req, res) => {
  const newSolution = new Solution(req.body);
  const savedSolution = await newSolution.save();
  res.json(savedSolution);
});

// Update a solution
router.put('/:id', async (req, res) => {
  const updatedSolution = await Solution.findByIdAndUpdate(req.params.id, req.body, { new: true }); // {new: true} returns the updated solution
  res.json(updatedSolution);
});

// Delete a solution
router.delete('/:id', async (req, res) => {
  const deletedSolution = await Solution.findByIdAndDelete(req.params.id);
  res.json(deletedSolution);
});

module.exports = router;
