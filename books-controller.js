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
res.send(booksDB);
};


//get book give id in param bookId
const getBookByID =(req,res)=>
{
let BookByID =booksDB.find((book)=>book.bookId===parseInt(req.params.bookId))
if(!BookByID) return res.status(404).send('The book with the given id not found');
res.send(BookByID);
}


const addBook = (req,res)=>{
  const book ={
    bookId: booksDB.length+1,
    bookName: req.body.bookName,
    bookISBN :req.body.bookISBN,
  };
  booksDB.push(book);
  res.send(book);
};


const updateBook = (req,res)=>{

  let BookByID =booksDB.find((book)=>book.bookId===parseInt(req.params.bookId));
  if(!BookByID) return res.status(404).send('The book with the given id not found');
  BookByID.bookName=req.body.bookName;
  BookByID.bookISBN=req.body.bookISBN;
  res.send(BookByID);

};


module.exports={
  getAllBooks,
  getBookByID,
  addBook,
  updateBook
};
