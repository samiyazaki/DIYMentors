const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Get all comments
router.get('/', async (req, res) => {
  const comments = await Comment.find().populate('user').populate('post');
  res.json(comments);
});

// Get a specific comment
router.get('/:id', async (req, res) => {
  const comment = await Comment.findById(req.params.id).populate('user').populate('post');
  res.json(comment);
});

// Create a new comment
router.post('/', async (req, res) => {
  const newComment = new Comment(req.body);
  const savedComment = await newComment.save();
  res.json(savedComment);
});

// Update a comment
router.put('/:id', async (req, res) => {
  const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }); // {new: true} returns the updated comment
  res.json(updatedComment);
});

// Delete a comment
router.delete('/:id', async (req, res) => {
  const deletedComment = await Comment.findByIdAndDelete(req.params.id);
  res.json(deletedComment);
});

module.exports = router;
