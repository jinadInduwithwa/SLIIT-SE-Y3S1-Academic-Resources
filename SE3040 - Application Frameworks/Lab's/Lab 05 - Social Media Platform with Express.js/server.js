import express from 'express'
import postRoute from './route/post.js'
import authRoute from './route/auth.js'
import protectedRoutes from './route/protectedRoutes.js'

const app = express();
const port = 3000;

// middlewares
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './views');

// Routes
app.use('/post', postRoute);
app.use('/auth', authRoute);
app.use('/protect', protectedRoutes);

// Test the server by sending an HTTP request to it
// app.get("/", async(req, res) => {
//     console.log("Test route hit");
//     res.json({message:"Hello from Express!"});
// });

// Create a basic server that listens for HTTP requests on a specific port
app.listen(port, () => {
    console.log(`server running a ${port}`);
})