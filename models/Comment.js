"use strict";

class Comment {
  constructor(_id, bookId, book_name, usernameFK, review, datePosted, rating) {
    this.id = _id;
    this.bookId = bookId;
    this.book_name = book_name;
    this.usernameFK = usernameFK;
    this.review = review;
    this.datePosted = datePosted;
    this.rating = rating;
  }

  getId() {
    return this.id;
  }
  getBookId() {
    return this.bookId;
  }
  getBookName() {
    return this.book_name;
  }
  getUsernameFK() {
    return this.usernameFK;
  }
  getReview() {
    return this.review;
  }
  getDatePosted() {
    return this.datePosted;
  }
  getRating() {
    return this.rating;
  }


  setBookId(bookId) {
    this.bookId = bookId;
  }
  setBookName(book_name) {
    this.book_name = book_name;
  }
  setUsernameFK(usernameFK) {
    this.usernameFK = usernameFK;
  }
  setReview(review) {
    this.review = review;
  }
  setDatePosted(datePosted) {
    this.datePosted = datePosted;
  }
  setRating(rating) {
    this.rating = rating;
  }
}

module.exports = Comment;
