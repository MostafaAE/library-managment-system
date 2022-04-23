const {Book} = require ('../models/Book');

let booksDB = [
  {
    bookId:1,
    bookName: "The Alchemist",
    bookISBN: "127-127-127-127",
  },
  {
    bookId: 2,
    bookName: "The A Little Life",
    bookISBN: "128-157-923-102",
  },
];


// add new book to database 
const createBook = async (req, res) =>{
  try{
      const book = new Book(req.body)
      await book.save()
      res.status(200).send(book)
  }
  catch(e){
     res.status(400).send(e)
  }
}

//get all books
const getAllBooks = async (req, res) =>{
  try{
      const books = await Book.find({})
      res.status(200).send(books)
  }
  catch(e){
     res.status(400).send(e)
  }
}

//get book give id in param bookId
const getBookById = async (req, res) =>{

  try{
      const bookId =  req.params.bookId
      const book = await Book.findById({_id : bookId})
      res.status(200).send(book)
  }
  catch(e){
      res.status(400).send(e)
   }
}


// update book by id
const updateBook = (req,res)=>{

  let requestedBookId = parseInt(req.params.bookId)
  let bookByID = booksDB.find((book) => book.bookId === requestedBookId)
  if(!bookByID) return res.status(404).send('The book with the given id not found');
  bookByID.bookName=req.body.bookName;
  bookByID.bookISBN=req.body.bookISBN;
  res.status(200).send(bookByID)

};

// delete book by id
const deleteBook = async (req,res) =>{

  try{
      const bookId =  req.params.bookId
      const book = await Book.deleteOne({_id : bookId})
      res.status(200).send(book)
  }
  catch(e){
      res.status(400).send(e)
   }
}




module.exports={
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
};
