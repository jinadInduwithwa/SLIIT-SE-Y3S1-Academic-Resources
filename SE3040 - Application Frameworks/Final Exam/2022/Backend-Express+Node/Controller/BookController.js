import Book from "../Model/BookModel.js"

const getAllBooks = async (req, res, next)=>{
    try{
        const book = await Book.find();

        if (!book) {
            return res.status(404).json({message:"book not found"});
        }
        res.status(200).json({book});

    }catch(err){
        console.log(err);
        return res.status(500).json({message:"Internal server error "});
    }
}

const searchBook = async (req, res, next) => {
    try {
        const {query = ""} = req.body;
        const searchCondition = {
            $or:[
                {title: {$regex:query, $options:"i"}},
                {author: {$regex:query, $options:"i"}},
                {genre: {$regex:query, $options:"i"}},
            ]
        }
        const books = await Book.find(searchCondition).sort({createdAt: -1});
        if (!books || books.length === 0) {
            return res.status(404).json({message:"not found "})
        }
        return res.status(200).json({books})
    } catch (error) {
        console.log(error);
    }
}

const purchesBook = async (req, res, next)=>{
    try{
        const id = req.params.id;
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({message:"book not found"});
        }
        payment = book.price;

        res.json({ message: "Purchase successful", book });

    }catch(err){
        console.log(err);
        return res.status(500).json({message:"Internal server error "});
    }
}

export default{
    getAllBooks, searchBook, purchesBook
}