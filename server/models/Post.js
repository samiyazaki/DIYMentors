const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    status: { type: String, default: 'unresolved' },
    category: { type: String, required: true },
});

module.exports = mongoose.model('Post', PostSchema);