import express from 'express'
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Configure multer
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });

// In-memory post storage
const posts = []; 

// create new post
router.post("/", upload.single('image'), async(req, res) => {
    try {
        const newPost = {
            id : posts.length + 1,
            title : req.body.title,
            content : req.body.content,
            image: req.file ? req.file.filename : null
        }
        posts.push(newPost);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({message:"internal server error"});
    }
});

// get all post
router.get("/", async(req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;

        const paginatedPost = posts.slice(startIndex, endIndex);
        
        res.status(200).json(paginatedPost);
    } catch (error) {
        res.status(500).json({message:"internal server error"});
    }
});

// get post by specific id
router.get("/:id", async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const post = posts.find(p => p.id === id);
        if (!post) {
            res.status(404).json({message:"post not found"});
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({message:"internal server error"});
    }
});

// update post
router.patch("/:id", async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const post = posts.find(p => p.id === id);
        if (!post) {
            res.status(404).json({message:"post not found"});
        }

        post.title = req.body.title || post.title;
        post.content = req.body.content || post.content;

        res.status(200).json(post);

    } catch (error) {
        res.status(500).json({message:"internal server error"});
    }
});

// delete post
router.delete("/:id", async(req, res) => {

    const id = parseInt(req.params.id);
    const index = posts.findIndex(p => p.id === id);

    if (index === -1) {
        res.status(404).json({message:"post not found"});
    }

    posts.splice(index, 1);
    res.status(204).json({message:"post deleted"})
});

export default router;