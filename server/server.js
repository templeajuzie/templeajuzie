const express = require('express')
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();

const app = express();
const DBString = process.env.DATABASE_STRING;
const port = process.env.PORT;

mongoose.connect(DBString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connnected to database successfully")
}).catch(err => {
    console.log("connection error " + err.message)
})

app.listen(port, () => {
    console.log(`listening to ${port}`)
})