"use strict"
const BooksDB = require('../models/BooksDB');

var booksdb = new BooksDB();

function getAllBooks(request, respond){
    booksdb.getAllBooks(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllBooks};