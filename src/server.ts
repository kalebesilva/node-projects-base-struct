import "reflect-metadata";
import cors from "cors";
import express from "express";

const app = express();
app.use(cors());




app.listen(3000, () => {
    console.log(3000);
});