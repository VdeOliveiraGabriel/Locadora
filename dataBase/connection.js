const mysql = require('mysql')
require('dotenv').config();


var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE
})


connection.connect(function (err) {
    if (err) {
        console.error('erro na conexão: ' + err.stack);
        return;
    }

    console.log('Conectado ao banco ' + connection.threadId);
});

module.exports = connection;