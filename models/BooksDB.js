"use strict";

var db = require('../db-connections');
class BooksDB{
    getAllBooks(callback){
        var sql = "SELECT * from book_review.book";
        db.query(sql, callback)
    }
}

module.exports = BooksDB;