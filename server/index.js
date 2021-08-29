const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 5000;
const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://stemconnect:abcdtest@cluster0.f8os5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const ObjectId = require('mongoose').Types.ObjectId;
const Program = require('./model');

app.get("/", async (req, res) => {
    const programs = await Program.find();
    res.send(programs);
})
app.post("/", (req, res) => {
    const id = new ObjectId();
    const params = req.query
    const prog = new Program({
        _id: id,
        title: params.title,
        company: params.company,
        price: params.price,
        URL: params.URL,
        email: params.email,
        phone: params.phone,
        description: params.description
    })
    const update = prog.save();
    console.log(prog);
    console.log(req.query)
    res.send("hi");
})
mongoose.connect(MONGO_URI, {useNewUrlParser: true , useUnifiedTopology: true})
        .then(() => {
            app.listen(port, () => {
                console.log(`Server ready`);
            })
        })
        .catch(error => {
            console.log(error)
        });