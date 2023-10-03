const express=require('express');
const dotenv = require('dotenv');
const app=express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path=require('path');
// const expressLayouts=require('express-layouts');

const connectDB=require('./server/database/connection');

dotenv.config({path:'config.env'})
const PORT =8080;

// log request
app.use(morgan('tiny'));

// mongodb connection
connectDB();


// parse request
app.use(bodyParser.urlencoded({extended:true}))



// set view engine

app.set("view engine","ejs");
// app.set("views",path.resolve(__dirname,"/views/index.ejs"));



// load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));




app.use('/',require('./server/routes/router'))



app.listen(PORT,()=>{
   console.log(`Server is running port ${PORT} `); 
})
