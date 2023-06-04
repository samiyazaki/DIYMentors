const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/solutions', solutionRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Server runnign on port 5000'));