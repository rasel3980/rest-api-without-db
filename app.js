const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const userRouter = require('./routes/users.route')

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

app.use('/users',userRouter)

// route not found

app.use((req,res,next)=>{
    res.status(404).json({"message":"Your request is not valid route"})
})

app.use((err,req,res,next)=>{
    res.status(500).json({"message":"something went wrong"})
})
module.exports = app;