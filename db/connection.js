require('dotenv').config();


const mysql = require('mysql2');

// set up sql connection
const db = mysql.createConnection({
    host:'localhost',
    user: process.env.user,
    password: process.env.password,
    database: 'organization'
    },
    console.log('Connected to the organization database')
);

module.exports = db;