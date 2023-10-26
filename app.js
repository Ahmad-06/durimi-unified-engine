require('dotenv').config();

const express = require('express');

const app = express();
const PORT = process.env.UNIFIED_PORT || 49500;
const HOST = process.env.UNIFIED_HOST || '127.0.0.1';

app.get('/', (req, res) => {
    res.send('Hello, express!');
});

app.listen(PORT, () => {
    console.log(`Unified Engine is listening at: http://${HOST}:${PORT}`);
});
