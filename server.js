const PORT = 8010;
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.listen(PORT, () =>
    console.log(`Server listening on ${PORT}`));