import BookModel from "../Model/BookModel.js"
import express from "express"
const router = express.Router();

// a) List all available books
router.get('/books', async (req, res, next) => {
    try {
        const books = await BookModel.find({ isAvailable:true });
        if (!books || books.length === 0) {
            return res.status(404).json({message:"books not found"});
        }
        return res.status(200).json({books});

    } catch (error) {
         return res.status(500).json({ message: "Server error", error });
    }
});
// b) Search by title, author, or genre
router.get('/books/search', async (req, res, next) => {
    try {
        const{query = ""} = req.query;
        const searchCondition = {
            $or:[
                {title:{$regex:query, $options:"i"}},
                {author:{$regex:query, $options:"i"}},
                { genre: { $regex: query, $options: "i" } },
            ]
        };
        const books = await BookModel.find(searchCondition).sort({createdAt:-1});
        if (!books || books.length === 0) {
            return res.status(404).json({message:"books not found"});
        }
        return res.status(200).json({books}); 

    } catch (error) {
         return res.status(500).json({ message: "Server error", error });
    }
});
// c) Purchase book by ID and mark unavailable
router.get('/books/payment/:id', async (req, res, next) => {
    try {
        const {id} = req.params.id;
        const book = await BookModel.find({_id: id,isAvailable:true });
        if (!book) {
             return res.status(404).json({message:"books not found or already sold"});
        }
        // process payment
        await BookModel.findByIdANDUpdate({_id: id,isAvailable:false });
     return res.status(200).json({message:"payment sucessfully. Book purchased"}); 
        
    } catch (error) {
         return res.status(500).json({ message: "Server error", error });
    }
});

// additional : create book
router.post('/books', async (req, res) => {
  try {
    const { title, author, genre, price, isAvailable } = req.body;

    if (!title || !author || !genre || price == null || isAvailable == null) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBook = new BookModel({
      title,
      author,
      genre,
      price,
      isAvailable,
    });

    const savedBook = await newBook.save();
    res.status(201).json({ message: "Book added successfully", book: savedBook });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
