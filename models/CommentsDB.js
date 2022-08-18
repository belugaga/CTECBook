"use strict"

var db = require('../db-connections');
class CommentsDB{
    getAllComments(callback){
        var sql = "SELECT * from book_review.comment";
        db.query(sql, callback);
    }

    addComment(comment, callback){
        var sql = "INSERT INTO comment (book_id, book_name, usernameFK, review, datePosted, rating) VALUES (?, ?, ?, ?, ?, ?)";
        console.log(comment);
        db.query(sql, [comment.getBookId(), comment.getBookName().trim(), comment.getUsernameFK(), comment.getReview(), comment.getDatePosted(), comment.getRating()], callback);
    }

    updateComment(comment, callback){
        var sql = "UPDATE comment SET review = ?, usernameFK = ?, rating = ?, datePosted = ? WHERE _id = ?";
        return db.query(sql, [comment.getReview(), comment.getUsernameFK(), comment.getRating(), comment.getDatePosted(), comment.getId()], callback);
    }

    deleteComment(commentID, callback){
        var sql = "DELETE from comment WHERE _id = ?";
        return db.query(sql, [commentID], callback);
    }
}

module.exports = CommentsDB;