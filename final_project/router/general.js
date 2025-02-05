const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
    res.send(JSON.stringify({books}, null, 4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
    const isbn = req.params.isbn;
    // Filter the books array to find books with isbn that matches the extracted isbn parameter
    let filtered_books = books.filter((book) => book.isbn === isbn);
    // Send the filtered_books array as the response to the client
    res.send(JSON.stringify({filtered_books}, null, 4));
 });
  
// Get book details based on author
public_users.get('/:author', (req, res) =>{
    const author = req.params.author;
    let filtered_books = books.filter((books) => books.author === author);

    if (filtered_books) {
        res.send(JSON.stringify(book, null, 4));
    } else {
        res.send(`Book with author name ${author} not found.`);
        console.log(filtered_books);
    }
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
