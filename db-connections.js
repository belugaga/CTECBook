var mysql = require('mysql');
var connection  = mysql.createConnection({
    host:'database-1.cjb5vrcyxql7.ap-southeast-1.rds.amazonaws.com',
    port:'3306',
    user:'admin',
    password:'tG078568',
    database:'book_review'
});

connection.connect(err => {
    if(err) throw err;
    console.log('Connected to AWS DB');
});

module.exports = connection;
