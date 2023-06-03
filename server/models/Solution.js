const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SolutionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    post: { type: Schema.Types.ObjectId, ref: 'Post' },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    videoLink: { type: String },
});

module.exports = mongoose.model('Solution', SolutionSchema);