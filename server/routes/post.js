const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
  const posts = await Post.find().populate('user');
  res.json(posts);
});

// Get a specific post
router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id).populate('user');
  res.json(post);
});

// Create a new post
router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  const savedPost = await newPost.save();
  res.json(savedPost);
});

// Update a post
router.put('/:id', async (req, res) => {
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true }); // {new: true} returns the updated post
  res.json(updatedPost);
});

// Delete a post
router.delete('/:id', async (req, res) => {
  const deletedPost = await Post.findByIdAndDelete(req.params.id);
  res.json(deletedPost);
});

module.exports = router;
