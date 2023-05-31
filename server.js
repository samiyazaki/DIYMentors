const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/diymentors', { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(5000, () => console.log('Server started on port 5000'));

