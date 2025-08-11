import express from "express"
import mongoose from "mongoose"
import bookRouter from "./Route/BookRout.js"

const app = express();
import cors from "cors"

app.use(express.json());
app.use(cors());

// route
app.use("/book",bookRouter);


mongoose.connect("mongodb+srv://jinad:jinad@cluster0.9yavy0y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Connected to mongoDB"))
.then(() => {
    app.listen(5000)
})
.catch((err)=>console.log(err));