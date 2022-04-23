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

    if(req.query.available)
    {

      if(req.query.available=='true')
      {
        const books = await Book.find({bookAvailability:true})
        res.status(200).send(books)
  
      }
      else if (req.query.available=='false')
      {
        const books = await Book.find({bookAvailability:false})
        res.status(200).send(books)
      }
      else
      {
        res.status(200).send('Unknown query')
      }
    }
   
    else
    {
      const books = await Book.find({})
      res.status(200).send(books)
    }
      
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


const updateBook = async (req,res) =>{
  try{
      const bookId =  req.params.bookId
      const book = await Book.findOne({_id : bookId})

      if(req.body.isbn){
          book.isbn = req.body.isbn;
      }
      if(req.body.bookName){
          book.bookName = req.body.bookName;
      }
      if(req.body.bookType){
          book.bookType = req.body.bookType;
      }
      if(req.body.authorName){
          book.authorName = req.body.authorName;
      }
      if(req.body.yearOfPublication){
          book.yearOfPublication = req.body.yearOfPublication;
      }
      if(req.body.bookAvailability){
          book.bookAvailability = req.body.bookAvailability;
      }
      if(req.body.memberId){
          book.memberId = req.body.memberId;
      }

  

      await book.save()
      res.status(200).send(book)
  }
  catch(e){
      res.status(400).send(e)
   }

}

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
