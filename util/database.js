const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database:'nodefirstdb',
    password:'danny49'
});

module.exports=pool.promise();