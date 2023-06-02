const express = require('express');
const app = express();
const userRoutes = require('./routes/user');

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(5000, () => console.log('Server runnign on port 5000'));