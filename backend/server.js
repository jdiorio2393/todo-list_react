const express = require('express');
const app = express();
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

//connect database
connectDB();

app.use(cors());

const taskData = require('./routes/tasks');

//init middleware (This replaces bodyParser)
app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(taskData);

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
