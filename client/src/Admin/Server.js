const express = require('express');
const { connectDb, requestDb } = require('../Admin/Database/db');

const server = express();
let db;

connectDb(() => {
    if (!err) {
        server.listen(3001, () => {
            console.log('listening...')
        });

        db = requestDb();
    }
})


server.get('/admin', (req, res) => {

    res.json({ mssg: 'listening' });

});

