const express =  require('express')
const BooksList = require('./books-controller')
const EmployeesList =require('./empolyees-controller');
const memberslist = require("./members-controller");

const app = express()
app.use(express.json())

// End Points
//Books end points
app.get('/books',BooksList.getAllBooks);
app.get('/books/:bookId',BooksList.getBookByID);
app.post('/books',BooksList.addBook); 
app.put('/books/:bookId',BooksList.updateBook);
app.delete('/books/:bookId',BooksList.deleteBook);


//Employee end points
app.put('/employees/:id',EmployeesList.updateEmployeeName);
app.delete('/employees/:id',EmployeesList.deleteEmplyee);
app.delete('/employees',EmployeesList.deleteAllEmplyee);
app.get('/employees',EmployeesList.getAllemployees);
app.get('/employees/:id',EmployeesList.getEmployeeByID);
app.post('/employees',EmployeesList.addEmployee);


// members End Points
app.post("/members", memberslist.addMember);
app.put("/members/:memberId", memberslist.updateMember);

// PORT
app.listen(8080, ()=> console.log("Server is running on http://localhost:8080"))
