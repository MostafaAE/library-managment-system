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


module.exports={
  getAllBooks,
  getBookByID
};
