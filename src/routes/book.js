const {Router} = require('express');
const Book = require('../controllers/books-controller')
const bookRouter = Router()


// books end points
bookRouter.post('/',Book.createBook); 
bookRouter.get('/',Book.getAllBooks);
bookRouter.get('/:bookId',Book.getBookById);
bookRouter.patch('/:bookId',Book.updateBook);
bookRouter.delete('/:bookId',Book.deleteBook);



module.exports = {
    bookRouter,
}