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


//get all books given route to books
const getAllBooks=(req,res)=>{
  res.status(200).send(booksDB);
};

//get book give id in param bookId
const getBookByID =(req,res)=>
{
  let requestedBookId = parseInt(req.params.bookId)
  let bookByID = booksDB.find((book) => book.bookId === requestedBookId)
  if(!bookByID) return res.status(404).send('The book with the given id not found');
  res.status(200).send(bookByID);
}

// add book to books list
const addBook = (req,res)=>{
  const book ={
    bookId: booksDB.length+1,
    bookName: req.body.bookName,
    bookISBN :req.body.bookISBN,
  };
  booksDB.push(book);
  res.status(200).send(book);
};

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
const deleteBook = (req,res)=>{
  let requestedBookId = parseInt(req.params.bookId)
  let bookByID = booksDB.find((book) => book.bookId === requestedBookId)
  if(!bookByID) return res.status(404).send('The book with the given id not found');
  const index = booksDB.indexOf(bookByID);
  booksDB.splice(index,1);
  res.status(200).send(bookByID);
};


module.exports={
  getAllBooks,
  getBookByID,
  addBook,
  updateBook,
  deleteBook
};
