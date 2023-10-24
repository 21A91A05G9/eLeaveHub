import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import mongoose from "mongoose";
const app =express();
app.use(bodyparser.json())
app.use(cors())
//bqz0DwT22jAAojuS
mongoose.connect('mongodb+srv://SudheeshnaVijju:bqz0DwT22jAAojuS@cluster0.lertnm8.mongodb.net/projectZERO?retryWrites=true&w=majority')
.then(() => app.listen(5056))
.then(() =>console.log("Connected to Database & Listining to localhost 5056"))
.catch((err) => console.log(err));