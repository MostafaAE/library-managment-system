const express =  require('express')
const BooksList = require('./books-controller')
const memberslist = require("./members-controller");


const app = express()
app.use(express.json())

// End Points
//Books end points
app.get('/books',BooksList.getAllBooks);
app.get('/books/:bookId',BooksList.getBookByID);
app.post('/books',BooksList.addBook); 


// members End Points
app.post("/members", memberslist.addMember);

// PORT
app.listen(8080, ()=> console.log("Server is running on http://localhost:8080"))