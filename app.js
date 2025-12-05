const express = require('express');
const dotenv=require('dotenv').config();
const app = express();
console.log("Starting the server....")
const port = process.env.PORT||3000;
const taskRouter=require("./router/taskRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",taskRouter);
app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;