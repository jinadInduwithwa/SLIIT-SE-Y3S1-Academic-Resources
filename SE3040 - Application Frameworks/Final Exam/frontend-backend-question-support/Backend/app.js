import express from "express"
import mongoose from "mongoose"
import userRoute from "./Route/UserRoute.js"


const app = express();
import cors from "cors"



// connect middlewares
app.use(express.json()); // Parses incoming JSON requests. Puts the parsed data into req.body
app.use(cors());
app.use("/users", userRoute);

mongoose.connect("mongodb+srv://jinad:jinad@cluster0.9yavy0y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("connected mongo DB"))
.then(() => {
    app.listen(5000)
})
.catch((err)=>console.log((err)));

