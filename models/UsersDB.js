"use strict"

var db = require('../db-connections');
class UsersDB{
    getAllUsers(callback){
        var sql = "SELECT username FROM book_reiview.user";
        db.query(sql, callback);
    }

    loginUser(username, callback){
        var sql = "SELECT password from book_review.user WHERE username = ?";
        db.query(sql, [username], callback);
    }

    addUser(username, name, password, email, callback){
        var sql = "INSERT INTO user (username, name, password, email) VALUES (?, ?, ?, ?)";
        //console.log(comment);
        db.query(sql, [username, name, password, email], callback);
    }

    updateUser(username, name, email, callback){
        var sql = "UPDATE user SET name = ?, email = ? WHERE username = ?";
        return db.query(sql, [name, email, username], callback);
    }

    deleteUser(userID, callback){
        var sql = "DELETE from user WHERE username = ?";
        return db.query(sql, [userID], callback);
    }

    getUser(username, callback) {
        var sql = "SELECT DISTINCT username, name, email FROM user WHERE username = ?";
        db.query(sql, [username], callback)
      }
}

module.exports = UsersDB;