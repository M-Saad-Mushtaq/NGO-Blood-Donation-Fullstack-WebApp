const mongodb = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();

const {ngoDAO} = require("./dao/ngoDAO.js");



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const login = require("./routes/login")
const signup = require("./routes/signup")

const testResult = require("./routes/test_result")
const review = require("./routes/review")

const profileEdit = require("./routes/profileEdit")

const acceptorDonor = require("./routes/acceptorDonor")

app.use('/Blood/public/login', login);
app.use('/Blood/public/signup', signup);
app.use('/Blood/public/test_result', testResult);
app.use('/Blood/public/review', review);
app.use('/Blood/public/profileEdit', profileEdit);
app.use('/Blood/public/acceptorDonor', acceptorDonor);

app.use('*', (req,res)=>{
    res.send('Route Not Found!!');
})

const MongoClient = mongodb.MongoClient;
const uri = `mongodb://localhost:27017/ngodb`;   //your connection string

const port = 5000;

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500
    })
    .catch(err => {
        console.error(err.stack);
        process.exit(1);
    })
    .then(async client => {
        await ngoDAO.injectDB(client);
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        })
    });