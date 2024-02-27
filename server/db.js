require('dotenv').config()
console.log(process.env)

const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    host: 'localhost',
    port: process.env.DB_PORT, 
    database: 'perntodo'
});

module.exports = pool;