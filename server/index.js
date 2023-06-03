const express = require('express');
const app = express();
const userRoutes = require('./routes/user');

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/solutions', solutionRoutes);
app.use('/api/comments', commentRoutes);


app.listen(5000, () => console.log('Server runnign on port 5000'));