require('dotenv').config()
console.log(process.env)

const Pool = require('pg').Pool;

const pool = new Pool({
    user: DB_USER,
    password: DB_PW,
    host: 'localhost',
    port: DB_PORT, 
    database: 'perntodo'
});

module.exports = pool;