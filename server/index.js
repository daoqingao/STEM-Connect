const express = requre("express");
const app = express();
const cors = require("cors");
app.use(cors);
const port = 5000;
const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://stemconnect:abcdtest@cluster0.f8os5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.get("/", );

mongoose.connect(MONGO_URI, {useNewUrlParser: true , useUnifiedTopology: true})
        .then(() => {
            app.listen(port)
        })
        .catch(error => {
            console.log(error)
        });