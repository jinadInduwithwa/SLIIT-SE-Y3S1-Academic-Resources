import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/users.js'

const app = express();
const port = 3000;

//Middleware - parse JSON bodies
app.use(express.json());

//Mongo DB connection
mongoose.connect('mongodb://localhost:27017/myNodeProject',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Mongo DB Connected'))
.catch(err => console.error('Mongo DB connection error ', err));

//Routes
app.use('/users', userRoute);

// start server
app.listen(port, ()=> {
    console.log(`server running at http://localhost:${port}`);
})