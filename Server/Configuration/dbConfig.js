// program to connect to database..

const mongoose = require('mongoose');

mongoose.connect(process.env.CONN_STR);

// returns the state of database connection

const db = mongoose.connection;


db.on('connected', () => {
     console.log("DB connected successfully");
});

db.on('err', () => {
     console.log("DB Connection Failed");
});

module.exports = db;