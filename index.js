const express =  require('express')
const BooksList = require('./books-controller')

const memberslist = require("./members-controller");



const app = express()
app.use(express.json())

// End Points

// books end points
app.get('/books',BooksList.getAllBooks);
app.get('/books/:bookId',BooksList.getBookByID);
app.post('/books',BooksList.addBook); 
app.put('/books/:bookId',BooksList.updateBook);
app.delete('/books/:bookId',BooksList.deleteBook);









// members end points
app.get("/members", memberslist.getAllMembers);
app.get("/members/:memberId", memberslist.getMemberbyId);
app.delete("/members/:memberId", memberslist.deleteMember);
app.post("/members", memberslist.addMember);
app.put("/members/:memberId", memberslist.updateMember);


// PORT
app.listen(8080, ()=> console.log("Server is running on http://localhost:8080"))