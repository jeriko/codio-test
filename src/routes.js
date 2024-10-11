const express = require('express');
const app = express();


// A mock/fake books database
const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", id: 1 },
  { title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", id: 2 },
  { title: "1984", author: "George Orwell", id: 3 },
  { title: "Animal Farm", author: "George Orwell", id: 4 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", id: 5 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", id: 6 }
];

// Home route
app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

// Add your new routes here



/* We export the app to run the server in a different file.
 Don't worry about running it */
module.exports = app
